import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-pizza-details',
  templateUrl: './pizza-details.component.html',
  styleUrls: ['./pizza-details.component.css']
})
export class PizzaDetailsComponent implements OnInit {
  pizzaId: number;
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  getSelectedHero() {
    this.pizzaId = + this.route.snapshot.paramMap.get('nomePizza');
  }

}
