import {RouterModule, Routes} from '@angular/router';
import {PizzaListComponent} from './pizza-list/pizza-list.component';
import {NgModule} from '@angular/core';
import {PizzaDetailsComponent} from './pizza-details/pizza-details.component';

const routes: Routes = [
  { path: 'detailsPizza/:idPizza', component: PizzaDetailsComponent },
  { path: 'listPizza', component: PizzaListComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: []
})
export class PizzaRoutingModule { }
