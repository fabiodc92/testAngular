import { Component, OnInit } from '@angular/core';
import {PizzaService} from '../pizza.service';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css']
})
export class PizzaListComponent implements OnInit {

  constructor(private pizzaService: PizzaService) { }

  ngOnInit() {
  }

}
