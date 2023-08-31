import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  /*  { path: '', component: WelcomePageComponent }, */
  { path: '', component: RestaurantsComponent },
  { path: 'altose', component: MenuComponent },
  { path: 'lume', component: MenuComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
