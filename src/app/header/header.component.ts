import { Component, OnInit } from '@angular/core';



import { Router } from '@angular/router';
import { Restaurant } from '../models/models';
import { RestaurantService } from '../restaurant.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public refeicaoSelected: boolean = false;
  public comidaSelected: boolean = false;
  public pt: boolean = false;
  public lume: boolean = false;
  public logo: string = '';

  constructor(
    public router: Router,
    public RestaurantService: RestaurantService
  ) {
  }

  ngOnInit(): void {
    this.checkRoute();
  }

  /*   selectLanguage(pt: boolean): void {
      if (true) { }
    } */

  checkRoute() {
    if (this.router.url.includes('/lume')) {
      this.lume = !this.lume;
    }
  }
  selectLanguage(): void {
    this.pt = !this.pt;
  }
}
