export abstract class StringValueObject {
  readonly value: string;

  constructor(value: string) {
    this.value = value;
  }

  // Permite comparar contra otro StringValueObject o contra un string
  equalsTo(anotherValue: StringValueObject | string): boolean {
    if (typeof anotherValue === 'string') {
      return this.value === anotherValue;
    }
    return this.value === anotherValue.value;
  }

  isEmpty(): boolean {
    return this.value == null || this.value.trim() === '';
  }

  differentTo(anotherValue: StringValueObject | string): boolean {
    if (typeof anotherValue === 'string') {
      return this.value !== anotherValue;
    }
    return this.value !== anotherValue.value;
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
