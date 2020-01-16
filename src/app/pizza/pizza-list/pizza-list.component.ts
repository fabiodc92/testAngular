import { Component, OnInit } from '@angular/core';
import {PizzaService} from '../pizza.service';
import {Pizza} from '../models/pizza';
import {Router} from '@angular/router';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css']
})
export class PizzaListComponent implements OnInit {
  pizze: Pizza[];
  selectedPizza: Pizza;
  constructor(private pizzaService: PizzaService,
              private router: Router) { }

  ngOnInit() {
    this.pizze = this.pizzaService.getAll();
  }

  onSelectPizza(pizza: Pizza) {
    this.selectedPizza = pizza;
    this.router.navigate(['detailsPizza/' + this.selectedPizza.nome]);
  }
}
