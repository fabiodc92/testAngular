import {Component, Input, OnInit} from '@angular/core';
import {Pizza} from '../models/pizza';


@Component({
  selector: 'app-pizza-list-item',
  templateUrl: './pizza-list-item.component.html',
  styleUrls: ['./pizza-list-item.component.css']
})
export class PizzaListItemComponent implements OnInit {
  @Input() pizzaInput: Pizza;


  constructor() { }

  ngOnInit() {
  }

}
