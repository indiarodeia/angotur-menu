import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestaurantService } from '../restaurant.service';
import { Category } from '../models/models';
import { ViewportScroller } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {


  public lume: boolean = false;
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
    /*    this.getRestaurantData(0, true); */
    this.changeBackgroundImage();

    console
    console.log(this.lume + 'lume');

    if (this.lume) {
      this.categories = [
        {
          title: "Entradas",
          products: [
            { title: "Sopa do dia", price: 2.5, imageUrl: "../../assets/produtos/lume_entradas_sopa.jpg" },
            { title: "Queijo Coalho assado", price: 5.5, imageUrl: "../../assets/produtos/lume_produto_default.jpg" },
            {
              title: "Croquete de alheira e molho de mostarda (4 uni.)", price: 6.9, imageUrl: "../../assets/produtos/lume_entradas_croquetesalheira.jpg"
            },
            { title: "Pão com chouriço na grelha", price: 3.9, imageUrl: "../../assets/produtos/lume_produto_default.jpg" },
            { title: "Tábua de queijos e enchidos", price: 12, imageUrl: "../../assets/produtos/lume_entradas_tabuaqueijo.jpg" },
            { title: "Couvert especial", price: 4, imageUrl: "../../assets/produtos/lume_produto_default.jpg" },
            { title: "Palitos de Queijo", price: 4.50, imageUrl: "../../assets/produtos/lume_produto_default.jpg" },
            { title: "Aros de Cebola", price: 4.50, imageUrl: "../../assets/produtos/lume_produto_default.jpg" },
            { title: "Hashbrowns", price: 4.50, imageUrl: "../../assets/produtos/lume_produto_default.jpg" },
          ],
        },

        {
          title: "Carne",
          products: [
            { title: "Tira Açoriana", price: 15, imageUrl: "../../assets/produtos/lume_produto_default.jpg" },
            { title: "Lombelo", price: 17, imageUrl: "../../assets/produtos/lume_produto_default.jpg" },
            {
              title: "T-bone / Tomahack", price: 45, description: "3 acompanhamentos incluídos", imageUrl: "../../assets/produtos/lume_carne_tbone.jpg"
            },
            { title: "Tiras de maminha", price: 16, imageUrl: "../../assets/produtos/lume_carne_maminha.jpg" },
            {
              title: "Medalhão de Picanha", price: 19, imageUrl: "../../assets/produtos/lume_carne_picanha.jpg"
            },
            { title: "Piano ao molho Bourbon", price: 17, imageUrl: "../../assets/produtos/lume_produto_default.jpg" },
            { title: "Frango de Churrasco", price: 12, imageUrl: "../../assets/produtos/lume_produto_default.jpg" },
          ],
        },
        {
          title: "Peixe",
          products: [
            { title: "Polvo na brasa", price: 18, imageUrl: "../../assets/produtos/lume_peixe_polvo.jpg" },
            { title: "Bacalhau na brasa", price: 19, imageUrl: "../../assets/produtos/lume_produto_default.jpg" },
            { title: "Atum na brasa", price: 18, imageUrl: "../../assets/produtos/lume_produto_default.jpg" },
          ]
        },
        {
          title: "Acompanhamentos",
          products: [
            { title: "Arroz", price: 2.5, imageUrl: "../../assets/produtos/lume_produto_default.jpg" },
            { title: "Feijão", price: 3.5, imageUrl: "../../assets/produtos/lume_produto_default.jpg" },
            { title: "Maionese de Batata", price: 3.9, imageUrl: "../../assets/produtos/lume_produto_default.jpg" },
            { title: "Salada coleslaw", price: 2.5, imageUrl: "../../assets/produtos/lume_produto_default.jpg" },
            { title: "Banana Frita (1un)", price: 2, imageUrl: "../../assets/produtos/lume_produto_default.jpg" },
            { title: "Legumes Assados", price: 3.5, imageUrl: "../../assets/produtos/lume_acompanhamentos_legumes.jpg" },
            { title: "Polenta Frita", price: 3, imageUrl: "../../assets/produtos/lume_acompanhamentos_polenta.jpg" },
            { title: "Batata Frita", price: 3.5, imageUrl: "../../assets/produtos/lume_acompanhamentos_batatafrita.jpg" },
            { title: "Batata a murro", price: 3, imageUrl: "../../assets/produtos/lume_produto_default.jpg" },
            { title: "Batata doce assada", price: 3, imageUrl: "../../assets/produtos/lume_produto_default.jpg" },
            { title: "Ovo Estrelado", price: 1.9, imageUrl: "../../assets/produtos/lume_produto_default.jpg" },
          ]
        },

        {
          title: "Sobremesas",
          products: [
            { title: "Ananás da terra caramelizado na brasa com licores da ilha", price: 6.5, imageUrl: "../../assets/produtos/lume_produto_default.jpg" },
            { title: "Pudim de queijo caramelizado com gelado", price: 6.5, imageUrl: "../../assets/produtos/lume_produto_default.jpg" },
            { title: "Mousse de chocolate com flor de sal", price: 5, imageUrl: "../../assets/produtos/lume_produto_default.jpg" },
            { title: "Bolo brigadeiro com bola de gelado", price: 4, imageUrl: "../../assets/produtos/lume_produto_default.jpg" },
          ]
        },

      ];

    } else {
      this.categories = [
        {
          title: "Entradas e acompanhamentos",
          products: [
            { title: "Batata Pré frita", price: 1.90, imageUrl: "../../assets/produtos/altose_produto_default.jpg" },
            { title: "Batata Caseira", price: 2.50, imageUrl: "../../assets/produtos/altose_produto_default.jpg" },
            { title: "Batata Doce", price: 2.80, imageUrl: "../../assets/produtos/altose_produto_default.jpg" },
            { title: "Dirty Frize", price: 5.50, imageUrl: "../../assets/produtos/altose_produto_default.jpg" },
            { title: "Mac and Cheese", price: 5.50, imageUrl: "../../assets/produtos/altose_produto_default.jpg" },
            { title: "Pão de Alho", price: 2.90, imageUrl: "../../assets/produtos/altose_produto_default.jpg" },
            { title: "Palitos de Queijo", price: 4.50, imageUrl: "../../assets/produtos/altose_produto_default.jpg" },
            { title: "Aros de Cebola", price: 4.50, imageUrl: "../../assets/produtos/altose_produto_default.jpg" },
            { title: "Hashbrowns", price: 4.50, imageUrl: "../../assets/produtos/altose_produto_default.jpg" },
          ],
        },
        {
          title: "Hambúrguers",
          products: [
            { title: "Alto Sé", price: 6.90, description: "Hambúrguer de 180gr, 2x bacon, 2x cheddar, alface, cebola caramelizada, ovo e molho especial da casa", imageUrl: "../../assets/produtos/altose_produto_default.jpg" },
            {
              title: "Mesmo Especial", price: 5.50, description: "Hambúrguer de 180gr, bacon, queijo, ovo, alface e molho especial de maionese", imageUrl: "../../assets/produtos/altose_hamburguer_mesmoespecial.jpg"
            },
            { title: "Hamburguer Ango", price: 6.9, description: "Peito 100% de Frango panado, queijo chedder, pickels, coleslaw e molho especial da casa", imageUrl: "../../assets/produtos/altose_hamburguer_hamburguerango.jpg" },
            { title: "Hamburguesinha", price: 7.5, description: "Hambúrguer de 180gr, 2x bacon, queijo, cebola, ovo e molho de francesinha", imageUrl: "../../assets/produtos/altose_hamburguer_hamburguesinha.jpg" },
            {
              title: "Pizza Burguer", price: 7.5, description: "3x Hambúrguer, 3x bacon, 3x cheddar, ovo, molho especial de maionese, bolo lêvedo temperado com queijo parmesão, pepperoni e orégãos", imageUrl: "../../assets/produtos/altose_hamburguer_pizzaburguer.jpg"
            },
            { title: "Chedder Sublime", price: 7.5, description: "Hambúrguer de 180gr, molho chedder caseiro, bacon e cebola crocante", imageUrl: "../../assets/produtos/altose_hamburguer_cheddersublime.jpg" },
            {
              title: "Double Trouble", price: 7.5, description: "Hambúrguer de 180gr, porco fumado desfiado, queijo chedder e coleslaw", imageUrl: "../../assets/produtos/altose_hamburguer_doubletrouble.jpg"
            },
            { title: "Vegie Burger", price: 6.9, description: "Hambúrger vegetariana, alface e cebola caramelizada e molho de iogurte", imageUrl: "../../assets/produtos/altose_hamburguer_vegieburguer.jpg" },
          ],
        },
        {
          title: "Saladas",
          products: [
            { title: "Alto Sé", price: 6.90, description: "Mix de salada, frango grelhado, queijo fresco e croutons", imageUrl: "../../assets/produtos/altose_produto_default.jpg" },
            { title: "Deliciosa", price: 6.90, description: "Mix de saladas, delícias do mar, camarão, queijo e croutons", imageUrl: "../../assets/produtos/altose_produto_default.jpg" },
            { title: "Salada Natural", price: 6.90, description: "Mix de salada, frutos secos, queijo fresco, laranja e molho de iogurte", imageUrl: "../../assets/produtos/altose_produto_default.jpg" },
          ],
        },
        {
          title: "Pizzarotos",
          products: [
            { title: "Pizzaroto Alto Sé", price: 8.5, description: "Queijo, peperroni oregãos e molho de pizza caseiro", imageUrl: "../../assets/produtos/altose_produto_default.jpg" },
            { title: "Pizzaroto Lume", price: 9.5, description: "Carne de hamburger caseira 180gr, queijo chedder, cebola caramelizada, pimentos e molho de BBQ", imageUrl: "../../assets/produtos/altose_produto_default.jpg" },
          ],
        },
        {
          title: "Cachorros",
          products: [
            { title: "Cachorro Alto Sé", price: 7.5, description: "Salchicha, salchicha fresca, linguiça, bacon, queijo  e molho de francezinha", imageUrl: "../../assets/produtos/altose_cachorro_altose.jpg" },
            { title: "Cachorro Lume", price: 7.5, description: "Salshicha, cebola caramelizada , molho caseiro de chedder com bacon e cebola crocante", imageUrl: "../../assets/produtos/altose_produto_default.jpg" },
            { title: "Cachorro de Camarão ao Alho", price: 7.5, description: "Salada coleslaw com camarão ao alho", imageUrl: "../../assets/produtos/altose_cachorro_camarao.jpg" },
          ],
        },

      ];
    }
  };



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


  checkRoute() {
    if (this.router.url.includes('/lume')) {
      this.lume = !this.lume;
    }
  }

  public navigateToSection(section: string): void {
    console.log(section);
    this.router.navigate([], { fragment: section });
  }

}
