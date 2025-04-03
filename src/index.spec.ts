import Person from "./index"

it("should return the correct greeting", () => {
  const person = new Person()
  expect(person.sayMyName()).toBe("Hello, I am a person!")
})
