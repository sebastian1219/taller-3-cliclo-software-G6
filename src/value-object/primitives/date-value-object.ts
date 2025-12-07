
import { StringValueObject } from "./string-value-object";

export abstract class DateValueObject extends StringValueObject {
  readonly value: string;

  constructor(value: string) {
    super(value);
    this.checkDateIsValid(value);
    this.value = this.format(value);
  }

  private checkDateIsValid(date: string): void {
    // Si la fecha es inválida, lanza error
    if (Number.isNaN(new Date(date).getTime())) {
      this.throwErrorForInvalidDate(date);
    }
  }

  public format(date: string): string {
    return new Date(date).toISOString().split("T")[0]; // YYYY-MM-DD
  }

  public isBetweenTheDates(startDate: string, lastDate: string): boolean {
    this.checkDateIsValid(startDate);
    this.checkDateIsValid(lastDate);
    return this.isAfterThisDate(startDate) && this.isBeforeThisDate(lastDate);
  }

  public isBeforeThisDate(anotherDate: string): boolean {
    this.checkDateIsValid(anotherDate);
    return this.value < this.format(anotherDate);
  }

  public isAfterThisDate(anotherDate: string): boolean {
    this.checkDateIsValid(anotherDate);
    return this.value > this.format(anotherDate);
  }

  protected abstract throwErrorForInvalidDate(value: string): void;
}
