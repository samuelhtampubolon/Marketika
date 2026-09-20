import {
  seriesSum,
  npvCalc,
  irrSolve,
  blackScholesCall,
  vwFromFourPrices,
  dot,
  matvec,
} from "@metrika/engine";
import type { IrrResult, VwResult } from "@metrika/engine";

export type EvalValue = number | number[] | number[][] | IrrResult | VwResult;

type Token = { kind: "number" | "identifier" | "operator" | "eof"; value: string };
type SafeFunction = (...args: EvalValue[]) => EvalValue;

const HELPERS: Record<string, SafeFunction> = {
  series_sum: seriesSum as unknown as SafeFunction,
  npv_calc: npvCalc as unknown as SafeFunction,
  irr_solve: irrSolve as unknown as SafeFunction,
  black_scholes_call: blackScholesCall as unknown as SafeFunction,
  vw_intersection: vwFromFourPrices as unknown as SafeFunction,
  dot: dot as unknown as SafeFunction,
  matvec: matvec as unknown as SafeFunction,
};

function finiteNumber(value: EvalValue, name: string): number {
  if (typeof value !== "number" || !Number.isFinite(value)) {
    throw new Error(`${name} must be a finite number`);
  }
  return value;
}

function numericFunction(
  name: string,
  fn: (...values: number[]) => number,
  minimumArguments = 1,
): SafeFunction {
  return (...args) => {
    if (args.length < minimumArguments) {
      throw new Error(`${name} expects at least ${minimumArguments} argument(s)`);
    }
    return fn(...args.map((value) => finiteNumber(value, name)));
  };
}

const FUNCTIONS: Record<string, SafeFunction> = {
  ...HELPERS,
  "Math.abs": numericFunction("Math.abs", Math.abs),
  "Math.exp": numericFunction("Math.exp", Math.exp),
  "Math.max": numericFunction("Math.max", Math.max),
};

function tokenize(source: string): Token[] {
  const tokens: Token[] = [];
  let offset = 0;

  while (offset < source.length) {
    const rest = source.slice(offset);
    const whitespace = rest.match(/^\s+/);
    if (whitespace) {
      offset += whitespace[0].length;
      continue;
    }

    const number = rest.match(/^(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?/);
    if (number) {
      tokens.push({ kind: "number", value: number[0] });
      offset += number[0].length;
      continue;
    }

    const identifier = rest.match(/^[A-Za-z_][A-Za-z0-9_]*(?:\.[A-Za-z_][A-Za-z0-9_]*)?/);
    if (identifier) {
      tokens.push({ kind: "identifier", value: identifier[0] });
      offset += identifier[0].length;
      continue;
    }

    const symbol = rest[0];
    if (symbol !== undefined && "()+-*/,".includes(symbol)) {
      tokens.push({ kind: "operator", value: symbol });
      offset += 1;
      continue;
    }

    throw new Error(`Unsupported expression character at ${offset}`);
  }

  tokens.push({ kind: "eof", value: "" });
  return tokens;
}

class SafeExpressionParser {
  private readonly tokens: Token[];
  private position = 0;

  constructor(
    source: string,
    private readonly scope: Record<string, EvalValue>,
  ) {
    this.tokens = tokenize(source);
  }

  parse(): EvalValue {
    const result = this.parseAdditive();
    if (this.current.kind !== "eof") {
      throw new Error(`Unexpected token '${this.current.value}'`);
    }
    return result;
  }

  private get current(): Token {
    return this.tokens[this.position] ?? { kind: "eof", value: "" };
  }

  private peekValue(): string {
    return this.current.value;
  }

  private take(value?: string): Token {
    const token = this.current;
    if (value !== undefined && token.value !== value) {
      throw new Error(`Expected '${value}', found '${token.value}'`);
    }
    this.position += 1;
    return token;
  }

  private parseAdditive(): EvalValue {
    let result = this.parseMultiplicative();
    while (this.current.value === "+" || this.current.value === "-") {
      const operator = this.take().value;
      const right = this.parseMultiplicative();
      result = this.applyArithmetic(operator, result, right);
    }
    return result;
  }

  private parseMultiplicative(): EvalValue {
    let result = this.parseUnary();
    while (this.current.value === "*" || this.current.value === "/") {
      const operator = this.take().value;
      const right = this.parseUnary();
      result = this.applyArithmetic(operator, result, right);
    }
    return result;
  }

  private parseUnary(): EvalValue {
    if (this.current.value === "+" || this.current.value === "-") {
      const operator = this.take().value;
      const value = finiteNumber(this.parseUnary(), "unary expression");
      return operator === "-" ? -value : value;
    }
    return this.parsePrimary();
  }

  private parsePrimary(): EvalValue {
    if (this.current.kind === "number") {
      return Number(this.take().value);
    }

    if (this.current.kind === "identifier") {
      const name = this.take().value;
      if (this.peekValue() === "(") {
        this.take("(");
        const args: EvalValue[] = [];
        if (this.peekValue() !== ")") {
          do {
            args.push(this.parseAdditive());
            const separator = this.peekValue();
            if (separator !== ",") break;
            this.take(",");
          } while (this.peekValue() !== ")");
        }
        this.take(")");
        const fn = FUNCTIONS[name];
        if (!fn) throw new Error(`Function '${name}' is not allowed`);
        return fn(...args);
      }

      if (!Object.prototype.hasOwnProperty.call(this.scope, name)) {
        throw new Error(`Variable '${name}' is not in the evaluation scope`);
      }
      return this.scope[name]!;
    }

    if (this.current.value === "(") {
      this.take("(");
      const result = this.parseAdditive();
      this.take(")");
      return result;
    }

    throw new Error(`Unexpected token '${this.current.value}'`);
  }

  private applyArithmetic(operator: string, left: EvalValue, right: EvalValue): number {
    const leftNumber = finiteNumber(left, "left operand");
    const rightNumber = finiteNumber(right, "right operand");
    if (operator === "+") return leftNumber + rightNumber;
    if (operator === "-") return leftNumber - rightNumber;
    if (operator === "*") return leftNumber * rightNumber;
    return leftNumber / rightNumber;
  }
}

export function evalExpression(js: string, scope: Record<string, EvalValue>): EvalValue {
  return new SafeExpressionParser(js, scope).parse();
}

export function isScalar(v: EvalValue | undefined): v is number {
  return typeof v === "number" && Number.isFinite(v);
}
