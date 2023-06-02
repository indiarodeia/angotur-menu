import { Component, OnInit } from '@angular/core';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import { Image } from '../models/models';
import { Router } from '@angular/router';


@Component({
  selector: 'app-images-carousel',
  templateUrl: './images-carousel.component.html',
  styleUrls: ['./images-carousel.component.scss'],
})
export class ImagesCarouselComponent implements OnInit {


  public images!: Image[];
  public imagesLume!: Image[];
  public imagesAltose!: Image[];
  public lume!: boolean;


  constructor(
    public router: Router,
  ) { }

  ngOnInit(): void {

    this.images = [
      {
        src: "../../assets/galeria1.jpg",
        description: "Hambúrguer de 180gr,  2x bacon, 2x cheddar, alface, cebola caramelizada, ovo e molho especial da casa"
      },
      {
        src: "../../assets/galeria2.jpg",
        description: "Hambúrguer no prato "
      },
      {
        src: "../../assets/galeria3.jpg",
        description: "Mix de salada, frutos secos, queijo fresco, laranja e molho de iogurte."
      },
      {
        src: "../../assets/galeria4.jpg",
        description: "Hambúrguer no prato com batata frita e salada de feijão"
      },
    ]

    this.imagesLume = [
      {
        src: "../../assets/galeria/lume_1.png",
      },
      {
        src: "../../assets/galeria/lume_2.png",
      },
      {
        src: "../../assets/galeria/lume_3.png",
      },
      {
        src: "../../assets/galeria/lume_4.png",
      },
      {
        src: "../../assets/galeria/lume_5.png",
      },
      {
        src: "../../assets/galeria/lume_6.png",
      },
      {
        src: "../../assets/galeria/lume_7.png",
      },
      {
        src: "../../assets/galeria/lume_8.png",
      },
      {
        src: "../../assets/galeria/lume_9.png",
      },
      {
        src: "../../assets/galeria/lume_10.png",
      },

    ]
    this.imagesAltose = [
      {
        src: "../../assets/galeria/altose_1.png",
      },
      {
        src: "../../assets/galeria/altose_2.png",
      },
      {
        src: "../../assets/galeria/altose_3.png",
      },
      {
        src: "../../assets/galeria/altose_4.png",
      },
      {
        src: "../../assets/galeria/altose_5.png",
      },
      {
        src: "../../assets/galeria/altose_6.png",
      },
      {
        src: "../../assets/galeria/altose_7.png",
      },
      {
        src: "../../assets/galeria/altose_8.png",
      },
      {
        src: "../../assets/galeria/altose_9.png",
      },
      {
        src: "../../assets/galeria/altose_10.png",
      },

    ]
    this.checkRoute();

  }

  checkRoute() {
    if (this.router.url.includes('/lume')) {
      this.lume = !this.lume;
    }
  }

}
