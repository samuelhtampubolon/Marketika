# Spec Changelog

## 1.0.1

- Fixed `price_elasticity` inverse for `q2`: the published closed form
  `q1 * (1 + E*m) / (1 - 0.5*E*m)` does not invert the midpoint (arc) form;
  corrected to `q1 * (2 + E*m) / (2 - E*m)` (with `m` the price-change term),
  verified to 1e-9 relative recovery.
- Completed `qfd_technical_importance` worked example: `relationship_matrix`
  was 4x3 against a 4-element `customer_importance` vector (dimensionally
  invalid). Row 4 extended to `[9, 0, 3, 9]` with the owner supplying the
  fourth value (strong relation).

## 1.0.0

- Initial specification: 76 formulas, 161 canonical variables, 9 modules, 30 phases.
