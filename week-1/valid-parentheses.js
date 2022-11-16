/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function (s) {
  const hold = [];

  for (let i = 0; i < s.length; ++i) {
    if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
      hold.push(s[i]);
    } else if (
      (hold[hold.length - 1] === "(" && s[i] === ")") ||
      (hold[hold.length - 1] === "[" && s[i] === "]") ||
      (hold[hold.length - 1] === "{" && s[i] === "}")
    ) {
      hold.pop();
    } else {
      return false;
    }
  }
  if (hold.length > 0) {
    return false;
  }
  return true;
};
