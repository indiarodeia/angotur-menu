import { Component, OnInit } from '@angular/core';



import { Router } from '@angular/router';


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
  ) {
  }

  ngOnInit(): void {
    this.checkRoute();
  }

  /*  selectType() {
     this.refeicaoSelected = !this.refeicaoSelected;
   }
  */
  /*  selectCategory() {
     this.comidaSelected = !this.comidaSelected;
   } */

  selectLanguage() {
    this.pt = !this.pt;
  }

  checkRoute() {
    if (this.router.url.includes('/lume')) {
      this.lume = !this.lume;
    }
  }

}
