const {capitalize, foo} = require("./practice.js")

test("capitalize", () =>  {
    expect(capitalize("test")).toBe("Test")
})