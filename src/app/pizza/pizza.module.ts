import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PizzaListComponent } from './pizza-list/pizza-list.component';
import { PizzaListItemComponent } from './pizza-list-item/pizza-list-item.component';
import { PizzaSearchComponent } from './pizza-search/pizza-search.component';
import { PizzaDiscountPipe } from './pizza-discount.pipe';
import {PizzaService} from './pizza.service';



@NgModule({
  declarations: [
    PizzaListComponent,
    PizzaListItemComponent,
    PizzaSearchComponent,
    PizzaDiscountPipe],
  exports: [
    PizzaListComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    PizzaService
  ]
})
export class PizzaModule { }
