import { Component, OnInit } from '@angular/core';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.scss']
})
export class ShoppingcartComponent implements OnInit {
  listCart: Map<number, string>;

  constructor(private shop: ShoppingService) { 
    this.shop.myMethod$.subscribe((listCart) => {
      this.listCart = listCart; // And he have data here too!
  }
  
  );
  console.log(this.listCart);
  }
  
  
  ngOnInit() {
    console.log(this.listCart);
  }

}
