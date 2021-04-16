const { sum, diff, div } = require("../calculator")

test("meaning of life", () => {
  expect(sum(32, 10)).toBe(42);
})


test("difference", () => {
  expect(diff(123, 23)).toBe(100);
})

test("division", () => {
  expect(div(4, 2)).toBe(2);
})