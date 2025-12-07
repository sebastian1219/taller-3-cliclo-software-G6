import { StringValueObject } from "../../../../src/value-object/primitives/string-value-object";

// Creamos una subclase concreta para poder instanciar
class TestStringValueObject extends StringValueObject {}

describe("StringValueObject › isEmpty", () => {
  it("should return true for empty string", () => {
    const obj = new TestStringValueObject("");
    expect(obj.isEmpty()).toBe(true);
  });

  it("should return true for spaces", () => {
    const obj = new TestStringValueObject("   ");
    expect(obj.isEmpty()).toBe(true);
  });

  it("should return false for non-empty string", () => {
    const obj = new TestStringValueObject("Juan");
    expect(obj.isEmpty()).toBe(false);
  });

  it("should return true for null or undefined", () => {
    const objNull = new TestStringValueObject(null as any);
    const objUndefined = new TestStringValueObject(undefined as any);
    expect(objNull.isEmpty()).toBe(true);
    expect(objUndefined.isEmpty()).toBe(true);
  });
});
