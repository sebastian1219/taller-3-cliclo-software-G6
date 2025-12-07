export abstract class StringValueObject {
  readonly value: string;

  constructor(value: string) {
    this.value = value;
  }

  equalsTo(anotherValue: string): boolean {
    return this.value === anotherValue;
  }

  isEmpty(): boolean {
    return this.value == null || this.value.trim() === "";
  }

  differentTo(anotherValue: string): boolean {
    return this.value !== anotherValue;
  }

  hasMoreCharacterThan(length = 30): boolean {
    return this.value.length > length;
  }

  hasLessCharacterThan(length = 5): boolean {
    return this.value.length < length;
  }

  toString(): string {
    return this.value;
  }
}


