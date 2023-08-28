import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestaurantService } from '../restaurant.service';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  public pt: boolean = false;
  public lume: boolean = false;
  public logo: string = '';


  constructor(
    public router: Router,
    public RestaurantService: RestaurantService
  ) { }

  ngOnInit(): void {
    this.checkRoute();
  }

  checkRoute() {
    if (this.router.url.includes('/lume')) {
      this.lume = !this.lume;
    }
  }

}
