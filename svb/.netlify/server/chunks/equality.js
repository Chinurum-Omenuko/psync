let public_env = {};
let safe_public_env = {};
function set_private_env(environment) {
}
function set_public_env(environment) {
  public_env = environment;
}
function set_safe_public_env(environment) {
  safe_public_env = environment;
}
function equals(value) {
  return value === this.v;
}
function safe_not_equal(a, b) {
  return a != a ? b == b : a !== b || a !== null && typeof a === "object" || typeof a === "function";
}
function safe_equals(value) {
  return !safe_not_equal(value, this.v);
}
export {
  safe_equals as a,
  set_private_env as b,
  set_public_env as c,
  set_safe_public_env as d,
  equals as e,
  safe_public_env as f,
  public_env as p,
  safe_not_equal as s
};
