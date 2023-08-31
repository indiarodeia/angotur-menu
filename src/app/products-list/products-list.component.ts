import { Component, Input, OnInit } from '@angular/core';
import { Category, Product } from 'src/app/models/models';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestaurantService } from '../restaurant.service';



@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {


  public lume: boolean = false;
  /*   public categories: Array<Category> = new Array<Category>(); */
  public categories!: Category[];
  public backgroundImageUrl!: string;
  restaurantData: any;

  constructor(
    public router: Router,
    private http: HttpClient,
    private restaurantService: RestaurantService
  ) { }

  ngOnInit(): void {

    this.checkRoute();

    this.changeBackgroundImage();

    /* if (this.lume) {
      this.getRestaurantData(2,)
    } else {

    } */

    /* if (this.lume) {
      this.categories = [
        {
          title: "Entradas",
          products: [
            { title: "Sopa do dia", price: 2.5 },
            { title: "Queijo Coalho assado", price: 5.5 },
            { title: "Croquete de alheira e molho de mostarda (4 uni.)", price: 6.9 },
            { title: "Pão com chouriço na grelha", price: 3.9 },
            { title: "Tábua de queijos e enchidos", price: 12 },
            { title: "Couvert especial", price: 4 },
            { title: "Palitos de Queijo", price: 4.50 },
            { title: "Aros de Cebola", price: 4.50 },
            { title: "Hashbrowns", price: 4.50 },
          ],
        },
        {
          title: "Carne",
          products: [
            { title: "Tira Açoriana", price: 15 },
            { title: "Lombelo", price: 17 },
            { title: "T-bone / Tomahack", price: 45, description: "3 acompanhamentos incluídos" },
            { title: "Tiras de maminha", price: 16 },
            { title: "Medalhão de Picanha", price: 19 },
            { title: "Piano ao molho Bourbon", price: 17 },
            { title: "Frango de Churrasco", price: 12 },

          ],
        },
        {
          title: "Peixe",
          products: [
            { title: "Polvo na brasa", price: 18 },
            { title: "Bacalhau na brasa", price: 19 },
            { title: "Atum na brasa", price: 18 },
          ]
        },
        {
          title: "Acompanhamentos",
          products: [
            { title: "Arroz", price: 2.5 },
            { title: "Feijão", price: 3.5 },
            { title: "Maionese de Batata", price: 3.9 },
            { title: "Salada coleslaw", price: 2.5 },
            { title: "Banana Frita (1un)", price: 2 },
            { title: "Legumes Assados", price: 3.5 },
            { title: "Polenta Frita", price: 3 },
            { title: "Batata Frita", price: 3.5 },
            { title: "Batata a murro", price: 3 },
            { title: "Batata doce assada", price: 3 },
            { title: "Ovo Estrelado", price: 1.9 },

          ]
        },
        {
          title: "Sobremesas",
          products: [
            { title: "Ananás da terra caramelizado na brasa com licores da ilha", price: 6.5 },
            { title: "Pudim de queijo caramelizado com gelado", price: 6.5 },
            { title: "Mousse de chocolate com flor de sal", price: 5 },
            { title: "Bolo brigadeiro com bola de gelado", price: 4 },
          ]
        },
      ];

    } else {
      this.categories = [
        {
          title: "Entradas e acompanhamentos",
          products: [
            { title: "Batata Pré frita", price: 1.90 },
            { title: "Batata Caseira", price: 2.50 },
            { title: "Batata Doce", price: 2.80 },
            { title: "Dirty Frize", price: 5.50 },
            { title: "Mac and Cheese", price: 5.50 },
            { title: "Pão de Alho", price: 2.90 },
            { title: "Palitos de Queijo", price: 4.50 },
            { title: "Aros de Cebola", price: 4.50 },
            { title: "Hashbrowns", price: 4.50 },
          ],
        },
        {
          title: "Hambúrguers",
          products: [
            { title: "Alto Sé", price: 6.90, description: "Hambúrguer de 180gr,  2x bacon, 2x cheddar, alface, cebola caramelizada, ovo e molho especial da casa" },
            { title: "Mesmo Especial", price: 5.50, description: "Hambúrguer de 180gr, bacon, queijo, ovo, alface e molho especial de maionese" },
            { title: "Hamburguer Ango", price: 6.9, description: "Peito 100% de Frango panado, queijo chedder, pickels, coleslaw e molho especial da casa" },
            { title: "Hamburguesinha", price: 7.5, description: "Hambúrguer de 180gr, 2x bacon, queijo, cebola, ovo e molho de francesinha" },
            { title: "Pizza Burguer", price: 7.5, description: "3x Hambúrguer, 3x bacon, 3x cheddar, ovo, molho especial de maionese, bolo lêvedo temperado com queijo parmesão, pepperoni e orégãos" },
            { title: "Chedder Sublime", price: 7.5, description: "Hambúrguer de 180gr, molho chedder caseiro, bacon e cebola crocante" },
            { title: "Double Trouble", price: 7.5, description: "Hambúrguer de 180gr, porco fumado desfiado, queijo chedder e coleslaw" },
            { title: "Vegie Burger", price: 6.9, description: "Hambúrger vegetariana, alface e cebola caramelizada e molho de iogurte" },
          ],
        },
        {
          title: "Saladas",
          products: [
            { title: "Alto Sé", price: 6.90, description: "Mix de salada, frango grelhado, queijo fresco e croutons" },
            { title: "Deliciosa", price: 6.90, description: "Mix de saladas, delícias do mar, camarão, queijo e croutons" },
            { title: "Salada Natural", price: 6.90, description: "Mix de salada, frutos secos, queijo fresco, laranja e molho de iogurte" },

          ]
        },
        {
          title: "Pizzarotos",
          products: [
            { title: "Pizzaroto Alto Sé", price: 8.5, description: "Queijo, peperroni oregãos e molho de pizza caseiro" },
            { title: "Pizzaroto Lume", price: 9.5, description: "Carne de hamburger caseira 180gr, queijo chedder, cebola caramelizada, pimentos e molho de BBQ" },
          ]
        },
        {
          title: "Cachorros",
          products: [
            { title: "Cachorro Alto Sé", price: 7.5, description: "Salchicha, salchicha fresca, linguiça, bacon, queijo  e molho de francezinha" },
            { title: "Cachorro Lume", price: 7.5, description: "Salshicha, cebola caramelizada , molho caseiro de chedder com bacon e cebola crocante" },
            { title: "Cachorro de Camarão ao Alho", price: 7.5, description: "Salada coleslaw com camarão ao alho" },
          ]
        },
      ]; 
    }*/
  };

  checkRoute() {
    if (this.router.url.includes('/lume')) {
      this.lume = !this.lume;
    }
  }

  getRestaurantData(restaurantId: number, isDefaultLanguage: boolean) {
    this.restaurantService.getRestaurantData(restaurantId, isDefaultLanguage).subscribe((data) => {
      this.categories = <Category[]>data;
      console.warn('this is my data: ', this.categories);
    })
  }

  changeBackgroundImage() {
    if (this.lume) {
      this.backgroundImageUrl = "url(../../assets/bg-lume.jpg)";
    } else {
      this.backgroundImageUrl = "url(../../assets/bg-altose.jpeg)";
    }
  }


};