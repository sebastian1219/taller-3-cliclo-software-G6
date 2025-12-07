import { StringValueObject } from './string-value-object';

export abstract class DateValueObject extends StringValueObject {
  constructor(value: string) {
    super(value);
    this.checkDateIsValid(value);
    this.value = this.format(value);
  }

  private checkDateIsValid(date: string): void {
    if (Number.isNaN(new Date(date).getTime())) {
      this.throwErrorForInvalidDate(date);
    }
  }

  public format(date: string): string {
    return new Date(date).toISOString().split('T')[0]; // YYYY-MM-DD
  }

  public isBetweenTheDates(startDate: DateValueObject | string, lastDate: DateValueObject | string): boolean {
    const start = typeof startDate === "string" ? startDate : startDate.value;
    const end = typeof lastDate === "string" ? lastDate : lastDate.value;
    this.checkDateIsValid(start);
    this.checkDateIsValid(end);
    return this.isAfterThisDate(start) && this.isBeforeThisDate(end);
  }

  public isBeforeThisDate(anotherDate: DateValueObject | string): boolean {
    const date = typeof anotherDate === "string" ? anotherDate : anotherDate.value;
    this.checkDateIsValid(date);
    return this.value < this.format(date);
  }

  public isAfterThisDate(anotherDate: DateValueObject | string): boolean {
    const date = typeof anotherDate === "string" ? anotherDate : anotherDate.value;
    this.checkDateIsValid(date);
    return this.value > this.format(date);
  }

  protected abstract throwErrorForInvalidDate(value: string): void;
}

