const { sum, diff } = require("./calculator")

test("meaning of life", () => {
  expect(sum(32, 10)).toBe(42);
})


test("difference", () => {
  expect(diff(123, 23)).toBe(100);
})