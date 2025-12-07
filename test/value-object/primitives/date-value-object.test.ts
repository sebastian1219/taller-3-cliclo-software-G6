import { DateValueObject } from "../../../src/value-object/primitives/date-value-object";

class TestDateValueObject extends DateValueObject {
  protected throwErrorForInvalidDate(value: string): void {
    throw new Error(`Invalid date value: ${value}`);
  }
}

describe("DateValueObject", () => {
  it("should create a valid date", () => {
    const date = new TestDateValueObject("2025-12-06");
    expect(date.toString()).toBe("2025-12-06");
  });

  it("should detect invalid date", () => {
    expect(() => new TestDateValueObject("invalid-date")).toThrow("Invalid date value");
  });

  it("should compare dates correctly", () => {
    const date = new TestDateValueObject("2025-12-06");
    expect(date.isBeforeThisDate("2025-12-07")).toBe(true);
    expect(date.isAfterThisDate("2025-12-05")).toBe(true);
    expect(date.isBetweenTheDates("2025-12-05", "2025-12-07")).toBe(true);
  });
});
