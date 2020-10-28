import { Component, OnInit } from '@angular/core';
import { PIZZAS } from '../mock-pizza/mock-pizza.component';
import { ShoppingService } from '../shopping.service';
export class Pizza {
  id: number;
  name: string;
  picture: string;
  ingredients: Array<string>;
  created: Date;
  price: number;
}
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit {
  pizzas: Pizza[] = null;
  title = 'Nom de votre Pizzeria';
  event: any;
  key: any;
  list_cart= new Map<number, string>();

  
  selectPizza(pizza: Pizza) {
    console.log('Vous avez selectionné ' + pizza.name);
  }




  
  selected(event, key){
    this.list_cart.set(event, key); 
  }

  onSave(){
    this.service.setItems(this.list_cart);
    console.log(this.list_cart);
    return this.list_cart;
  }

  constructor(private service: ShoppingService){
    this.service.myMethod(this.list_cart);
  }

  ngOnInit() {
    this.pizzas = PIZZAS;
  }

}
