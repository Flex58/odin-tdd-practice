const { capitalize, reverseString, calculator, caesarCypher } = require("./practice.js");

test("capitalize", () => {
  expect(capitalize("test")).toBe("Test");
});

test("reverse", () => {
  expect(reverseString("lane")).toBe("enal");
});

test("calculator", () => {
  expect(calculator.add(1, 2)).toBe(3);
  expect(calculator.subtract(2, 1)).toBe(1);
  expect(calculator.multiply(5, 2)).toBe(10);
  expect(calculator.divide(10, 2)).toBe(5);
});

test("caesar cypher", () => {
    expect(caesarCypher("xyz", 3)).toBe("abc")
    expect(caesarCypher("HeLLo", 3)).toBe("KhOOr")
})
