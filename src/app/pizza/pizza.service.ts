import { Injectable } from '@angular/core';
import {Pizza} from './models/pizza';
import {PIZZAS} from './models/pizzas';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor() { }
  getAll(): Pizza[] {
    return PIZZAS;
  }
}
