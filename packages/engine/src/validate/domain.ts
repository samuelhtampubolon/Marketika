export class DomainViolation extends Error {
  readonly code: string;

  constructor(code: string, message: string) {
    super(message);
    this.name = "DomainViolation";
    this.code = code;
  }
}
