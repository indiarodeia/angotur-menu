import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestaurantService } from '../restaurant.service';
import { Category, DailyMeal, Image } from '../models/models';
import { Subscription } from 'rxjs';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {


  public lume: boolean = false;
  public categories!: Category[];
  public backgroundfilename!: string;
  restaurantData: any;
  public dailymeal!: DailyMeal;
  windowScrolled!: boolean;
  public images!: Image[];

  language: string = 'en';
  private languageSubscription: Subscription;

  constructor(
    public router: Router,
    public RestaurantService: RestaurantService,
  ) {
    this.languageSubscription = this.RestaurantService.language$.subscribe(
      (language) => {
        this.language = language;
        // Update menu content based on the new language
        this.getRestaurantMenu();
      }
    );
  }

  @HostListener("window:scroll", [])

  ngOnInit(): void {
    this.setRestaurantId();
    this.changeBackgroundImage();
    this.getRestaurantMenu();
    this.getRestaurantDailyMeals();
    this.getTodaysDate();
    this.getRestaurantImages();
  };

  getRestaurantData() {
    this.RestaurantService.getRestaurantData().subscribe((data) => {
    })
  }
  getRestaurantMenu() {
    this.RestaurantService.getRestaurantMenu().subscribe((data) => {
      this.categories = <Category[]>data;
    }
    )
  }
  getRestaurantImages() {
    this.RestaurantService.getRestaurantImages().subscribe((data) => {
      this.images = <Image[]>data
    }
    )
  }
  getRestaurantDailyMeals() {
    this.RestaurantService.getRestaurantDailyMeals().subscribe((data: any) => {
      this.dailymeal = new DailyMeal(
        data.id,
        data.title,
        data.price,
        data.description,
        data.filename
      );
    })
  }

  setRestaurantId() {
    if (this.router.url.includes('/lume')) {
      this.lume = !this.lume;
      this.RestaurantService.restaurantId = 2;
    } else {
      this.RestaurantService.restaurantId = 1;
    }
  }

  changeBackgroundImage() {
    if (this.lume) {
      this.backgroundfilename = "url(../../assets/bg-lume.jpg)";
    } else {
      this.backgroundfilename = "url(../../assets/bg-altose.jpeg)";
    }
  }

  getTodaysDate() {
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let currentDate = `${day}-${month}-${year}`;
    return currentDate;
  }

  scrollToElement(elementId: string) {
    setTimeout(() => {
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 250);
  }

}