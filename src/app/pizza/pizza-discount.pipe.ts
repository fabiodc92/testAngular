import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pizzaDiscount'
})
export class PizzaDiscountPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
