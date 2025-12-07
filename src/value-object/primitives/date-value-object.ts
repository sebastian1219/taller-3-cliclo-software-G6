import { StringValueObject } from './string-value-object';

export abstract class DateValueObject extends StringValueObject {
  constructor(value: string) {
    // validamos antes de formatear
    if (Number.isNaN(new Date(value).getTime())) {
      // lanzamos un error genérico, la subclase puede personalizarlo
      throw new Error('Invalid date value');
    }

    // formateamos antes de pasar al padre
    const formatted = new Date(value).toISOString().split('T')[0];
    super(formatted);
  }

  public isBetweenTheDates(startDate: DateValueObject | string, lastDate: DateValueObject | string): boolean {
    const start = typeof startDate === 'string' ? startDate : startDate.value;
    const end = typeof lastDate === 'string' ? lastDate : lastDate.value;
    return this.isAfterThisDate(start) && this.isBeforeThisDate(end);
  }

  public isBeforeThisDate(anotherDate: DateValueObject | string): boolean {
    const date = typeof anotherDate === 'string' ? anotherDate : anotherDate.value;
    return this.value < new Date(date).toISOString().split('T')[0];
  }

  public isAfterThisDate(anotherDate: DateValueObject | string): boolean {
    const date = typeof anotherDate === 'string' ? anotherDate : anotherDate.value;
    return this.value > new Date(date).toISOString().split('T')[0];
  }

  // 👇 aquí está la firma corregida
  protected abstract throwErrorForInvalidDate(_value: string): void;
}


