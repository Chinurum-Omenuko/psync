import { a as attr } from "../../../chunks/attributes.js";
import { p as pop, a as push } from "../../../chunks/index3.js";
import "../../../chunks/client.js";
function _page($$payload, $$props) {
  push();
  let email = "";
  let firstname = "";
  let lastname = "";
  let password = "";
  let program = null;
  let course = null;
  let organization = null;
  $$payload.out += `<form><label for="email">Email:</label> <input type="email" id="email" name="email"${attr("value", email)} required><br> <label for="firstname">First Name:</label> <input type="text" id="firstname" name="firstname"${attr("value", firstname)} required><br> <label for="lastname">Last Name:</label> <input type="text" id="lastname" name="lastname"${attr("value", lastname)} required><br> <label for="password">Password:</label> <input type="password" id="password" name="password"${attr("value", password)} required><br> <label for="program">Program:</label> <input type="text" id="program" name="program"${attr("value", program)}><br> <label for="course">Course:</label> <input type="text" id="course" name="course"${attr("value", course)}><br> <label for="organization">Organization:</label> <input type="text" id="organization" name="organization"${attr("value", organization)}><br> <input type="submit" value="Register"></form>`;
  pop();
}
export {
  _page as default
};
