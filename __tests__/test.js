const { greet } = require("../script");

test("greet returns correct message", () => {
  expect(greet("Alice")).toBe("Hello, Alice!");
});

test("greet handles empty string", () => {
  expect(greet("")).toBe("Hello, !");
});

test("greet does not throw error for null", () => {
  expect(() => greet(null)).not.toThrow();
});

test("greet is a function", () => {
  expect(typeof greet).toBe("function");
});
