import { DomainViolation } from "../validate/domain";
import { phi } from "./normal";

export function blackScholesCall(S: number, X: number, r: number, T: number, sigma: number): number {
  if (!(S > 0)) throw new DomainViolation("bs_S", "blackScholesCall: S must be > 0");
  if (!(X > 0)) throw new DomainViolation("bs_X", "blackScholesCall: X must be > 0");
  if (!(T > 0)) throw new DomainViolation("bs_T", "blackScholesCall: T must be > 0");
  if (!(sigma > 0)) throw new DomainViolation("bs_sigma", "blackScholesCall: sigma must be > 0");
  const d1 = (Math.log(S / X) + (r + (sigma * sigma) / 2) * T) / (sigma * Math.sqrt(T));
  const d2 = d1 - sigma * Math.sqrt(T);
  return S * phi(d1) - X * Math.exp(-r * T) * phi(d2);
}
