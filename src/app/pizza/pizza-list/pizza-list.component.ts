import { Component, OnInit } from '@angular/core';
import {PizzaService} from '../pizza.service';
import {Pizza} from '../models/pizza';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css']
})
export class PizzaListComponent implements OnInit {
  pizza: Pizza = {
    nome: 'Margherita',
    descrizione: 'Pomodoro, mozzarella, olio'
  };
  pizze: Pizza[];
  constructor(private pizzaService: PizzaService) { }

  ngOnInit() {
    this.pizze = this.pizzaService.getAll();
  }

}
