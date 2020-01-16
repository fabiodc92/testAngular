import { PizzaDiscountPipe } from './pizza-discount.pipe';

describe('PizzaDiscountPipe', () => {
  it('create an instance', () => {
    const pipe = new PizzaDiscountPipe();
    expect(pipe).toBeTruthy();
  });
});
