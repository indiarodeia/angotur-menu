import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestaurantService } from '../restaurant.service';
import { Category, DishOfTheDay } from '../models/models';

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
  public dishoftheday!: DishOfTheDay;


  constructor(
    public router: Router,
    private restaurantService: RestaurantService,
  ) { }

  ngOnInit(): void {
    this.setRestaurantId();
    this.getRestaurantData();
    this.changeBackgroundImage();
    this.getRestaurantMenu(1);
    this.getRestaurantDailyMeals();

    console.log(this.lume + 'lume');
  };

  getRestaurantData() {
    this.restaurantService.getRestaurantData().subscribe((data) => {
      console.warn('this is my Restaurant data: ', this.categories);
    })
  }
  getRestaurantMenu(restaurantId: any) {
    this.restaurantService.getRestaurantMenu(restaurantId).subscribe((data) => {
      this.categories = <Category[]>data;
      console.warn('this is my menu: ' + data);
    }
    )
  }

  getRestaurantDailyMeals() {
    this.restaurantService.getRestaurantDailyMeals().subscribe((data) => {
      console.warn('this is my DAILY MEALS: ' + data);
    })
  }

  changeBackgroundImage() {
    if (this.lume) {
      this.backgroundfilename = "url(../../assets/bg-lume.jpg)";
    } else {
      this.backgroundfilename = "url(../../assets/bg-altose.jpeg)";
    }
  }


  setRestaurantId() {
    if (this.router.url.includes('/lume')) {
      this.lume = !this.lume;
      this.restaurantService.restaurantId = 2;
      console.log('Restaurant ID is: ' + this.restaurantService.restaurantId);
    } else {
      this.restaurantService.restaurantId = 1;
      console.log('Restaurant ID is: ' + this.restaurantService.restaurantId);

    }
  }

  /*  if (this.lume) {
     this.categories = [
       {
         title: "Entradas",
         products: [
           { title: "Sopa do dia", price: 2.5, filename: "../../assets/produtos/lume_entradas_sopa.jpg" },
           { title: "Queijo Coalho assado", price: 5.5, filename: "../../assets/produtos/lume_produto_default.jpg" },
           {
             title: "Croquete de alheira e molho de mostarda (4 uni.)", price: 6.9, filename: "../../assets/produtos/lume_entradas_croquetesalheira.jpg"
           },
           { title: "Pão com chouriço na grelha", price: 3.9, filename: "../../assets/produtos/lume_produto_default.jpg" },
           { title: "Tábua de queijos e enchidos", price: 12, filename: "../../assets/produtos/lume_entradas_tabuaqueijo.jpg" },
           { title: "Couvert especial", price: 4, filename: "../../assets/produtos/lume_produto_default.jpg" },
           { title: "Palitos de Queijo", price: 4.50, filename: "../../assets/produtos/lume_produto_default.jpg" },
           { title: "Aros de Cebola", price: 4.50, filename: "../../assets/produtos/lume_produto_default.jpg" },
           { title: "Hashbrowns", price: 4.50, filename: "../../assets/produtos/lume_produto_default.jpg" },
         ],
       },

       {
         title: "Carne",
         products: [
           { title: "Tira Açoriana", price: 15, filename: "../../assets/produtos/lume_produto_default.jpg" },
           { title: "Lombelo", price: 17, filename: "../../assets/produtos/lume_produto_default.jpg" },
           {
             title: "T-bone / Tomahack", price: 45, description: "3 acompanhamentos incluídos", filename: "../../assets/produtos/lume_carne_tbone.jpg"
           },
           { title: "Tiras de maminha", price: 16, filename: "../../assets/produtos/lume_carne_maminha.jpg" },
           {
             title: "Medalhão de Picanha", price: 19, filename: "../../assets/produtos/lume_carne_picanha.jpg"
           },
           { title: "Piano ao molho Bourbon", price: 17, filename: "../../assets/produtos/lume_produto_default.jpg" },
           { title: "Frango de Churrasco", price: 12, filename: "../../assets/produtos/lume_produto_default.jpg" },
         ],
       },
       {
         title: "Peixe",
         products: [
           { title: "Polvo na brasa", price: 18, filename: "../../assets/produtos/lume_peixe_polvo.jpg" },
           { title: "Bacalhau na brasa", price: 19, filename: "../../assets/produtos/lume_produto_default.jpg" },
           { title: "Atum na brasa", price: 18, filename: "../../assets/produtos/lume_produto_default.jpg" },
         ]
       },
       {
         title: "Acompanhamentos",
         products: [
           { title: "Arroz", price: 2.5, filename: "../../assets/produtos/lume_produto_default.jpg" },
           { title: "Feijão", price: 3.5, filename: "../../assets/produtos/lume_produto_default.jpg" },
           { title: "Maionese de Batata", price: 3.9, filename: "../../assets/produtos/lume_produto_default.jpg" },
           { title: "Salada coleslaw", price: 2.5, filename: "../../assets/produtos/lume_produto_default.jpg" },
           { title: "Banana Frita (1un)", price: 2, filename: "../../assets/produtos/lume_produto_default.jpg" },
           { title: "Legumes Assados", price: 3.5, filename: "../../assets/produtos/lume_acompanhamentos_legumes.jpg" },
           { title: "Polenta Frita", price: 3, filename: "../../assets/produtos/lume_acompanhamentos_polenta.jpg" },
           { title: "Batata Frita", price: 3.5, filename: "../../assets/produtos/lume_acompanhamentos_batatafrita.jpg" },
           { title: "Batata a murro", price: 3, filename: "../../assets/produtos/lume_produto_default.jpg" },
           { title: "Batata doce assada", price: 3, filename: "../../assets/produtos/lume_produto_default.jpg" },
           { title: "Ovo Estrelado", price: 1.9, filename: "../../assets/produtos/lume_produto_default.jpg" },
         ]
       },

       {
         title: "Sobremesas",
         products: [
           { title: "Ananás da terra caramelizado na brasa com licores da ilha", price: 6.5, filename: "../../assets/produtos/lume_produto_default.jpg" },
           { title: "Pudim de queijo caramelizado com gelado", price: 6.5, filename: "../../assets/produtos/lume_produto_default.jpg" },
           { title: "Mousse de chocolate com flor de sal", price: 5, filename: "../../assets/produtos/lume_produto_default.jpg" },
           { title: "Bolo brigadeiro com bola de gelado", price: 4, filename: "../../assets/produtos/lume_produto_default.jpg" },
         ]
       },

     ];

   } else {
     this.categories = [
       {
         title: "Entradas e acompanhamentos",
         products: [
           { title: "Batata Pré frita", price: 1.90, filename: "../../assets/produtos/altose_produto_default.jpg" },
           { title: "Batata Caseira", price: 2.50, filename: "../../assets/produtos/altose_produto_default.jpg" },
           { title: "Batata Doce", price: 2.80, filename: "../../assets/produtos/altose_produto_default.jpg" },
           { title: "Dirty Frize", price: 5.50, filename: "../../assets/produtos/altose_produto_default.jpg" },
           { title: "Mac and Cheese", price: 5.50, filename: "../../assets/produtos/altose_produto_default.jpg" },
           { title: "Pão de Alho", price: 2.90, filename: "../../assets/produtos/altose_produto_default.jpg" },
           { title: "Palitos de Queijo", price: 4.50, filename: "../../assets/produtos/altose_produto_default.jpg" },
           { title: "Aros de Cebola", price: 4.50, filename: "../../assets/produtos/altose_produto_default.jpg" },
           { title: "Hashbrowns", price: 4.50, filename: "../../assets/produtos/altose_produto_default.jpg" },
         ],
       },
       {
         title: "Hambúrguers",
         products: [
           { title: "Alto Sé", price: 6.90, description: "Hambúrguer de 180gr, 2x bacon, 2x cheddar, alface, cebola caramelizada, ovo e molho especial da casa", filename: "../../assets/produtos/altose_produto_default.jpg" },
           {
             title: "Mesmo Especial", price: 5.50, description: "Hambúrguer de 180gr, bacon, queijo, ovo, alface e molho especial de maionese", filename: "../../assets/produtos/altose_hamburguer_mesmoespecial.jpg"
           },
           { title: "Hamburguer Ango", price: 6.9, description: "Peito 100% de Frango panado, queijo chedder, pickels, coleslaw e molho especial da casa", filename: "../../assets/produtos/altose_hamburguer_hamburguerango.jpg" },
           { title: "Hamburguesinha", price: 7.5, description: "Hambúrguer de 180gr, 2x bacon, queijo, cebola, ovo e molho de francesinha", filename: "../../assets/produtos/altose_hamburguer_hamburguesinha.jpg" },
           {
             title: "Pizza Burguer", price: 7.5, description: "3x Hambúrguer, 3x bacon, 3x cheddar, ovo, molho especial de maionese, bolo lêvedo temperado com queijo parmesão, pepperoni e orégãos", filename: "../../assets/produtos/altose_hamburguer_pizzaburguer.jpg"
           },
           { title: "Chedder Sublime", price: 7.5, description: "Hambúrguer de 180gr, molho chedder caseiro, bacon e cebola crocante", filename: "../../assets/produtos/altose_hamburguer_cheddersublime.jpg" },
           {
             title: "Double Trouble", price: 7.5, description: "Hambúrguer de 180gr, porco fumado desfiado, queijo chedder e coleslaw", filename: "../../assets/produtos/altose_hamburguer_doubletrouble.jpg"
           },
           { title: "Vegie Burger", price: 6.9, description: "Hambúrger vegetariana, alface e cebola caramelizada e molho de iogurte", filename: "../../assets/produtos/altose_hamburguer_vegieburguer.jpg" },
         ],
       },
       {
         title: "Saladas",
         products: [
           { title: "Alto Sé", price: 6.90, description: "Mix de salada, frango grelhado, queijo fresco e croutons", filename: "../../assets/produtos/altose_produto_default.jpg" },
           { title: "Deliciosa", price: 6.90, description: "Mix de saladas, delícias do mar, camarão, queijo e croutons", filename: "../../assets/produtos/altose_produto_default.jpg" },
           { title: "Salada Natural", price: 6.90, description: "Mix de salada, frutos secos, queijo fresco, laranja e molho de iogurte", filename: "../../assets/produtos/altose_produto_default.jpg" },
         ],
       },
       {
         title: "Pizzarotos",
         products: [
           { title: "Pizzaroto Alto Sé", price: 8.5, description: "Queijo, peperroni oregãos e molho de pizza caseiro", filename: "../../assets/produtos/altose_produto_default.jpg" },
           { title: "Pizzaroto Lume", price: 9.5, description: "Carne de hamburger caseira 180gr, queijo chedder, cebola caramelizada, pimentos e molho de BBQ", filename: "../../assets/produtos/altose_produto_default.jpg" },
         ],
       },
       {
         title: "Cachorros",
         products: [
           { title: "Cachorro Alto Sé", price: 7.5, description: "Salchicha, salchicha fresca, linguiça, bacon, queijo  e molho de francezinha", filename: "../../assets/produtos/altose_cachorro_altose.jpg" },
           { title: "Cachorro Lume", price: 7.5, description: "Salshicha, cebola caramelizada , molho caseiro de chedder com bacon e cebola crocante", filename: "../../assets/produtos/altose_produto_default.jpg" },
           { title: "Cachorro de Camarão ao Alho", price: 7.5, description: "Salada coleslaw com camarão ao alho", filename: "../../assets/produtos/altose_cachorro_camarao.jpg" },
         ],
       },

     ];
   } */
}
