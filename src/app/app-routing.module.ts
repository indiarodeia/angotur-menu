import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';

const routes: Routes = [
  /*  { path: '', component: WelcomePageComponent }, */
  { path: '', component: RestaurantsComponent },
  { path: 'altose', component: ProductsListComponent },
  { path: 'lume', component: ProductsListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
