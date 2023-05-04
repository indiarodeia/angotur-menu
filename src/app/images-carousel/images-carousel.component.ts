import { Component, OnInit } from '@angular/core';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import { Image } from '../models/models';


@Component({
  selector: 'app-images-carousel',
  templateUrl: './images-carousel.component.html',
  styleUrls: ['./images-carousel.component.scss'],
})
export class ImagesCarouselComponent implements OnInit {


  public images!: Image[];

  constructor() { }

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
  }

}
