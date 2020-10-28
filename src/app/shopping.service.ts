import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  listCart = new Map<number, string>();
  myMethod$: Observable<any>;
  private myMethodSubject = new Subject<any>();

  setItems(listCart){
    this.listCart = listCart;
  }

  getItems(listCart){
    this.listCart = listCart;
    console.log("service appelé", this.listCart);
    return this.listCart;
  }

  myMethod(listCart) {
    console.log(listCart); 
    console.log("service appelé", this.listCart);
    this.myMethodSubject.next(listCart);
  }

  constructor() { 
    this.myMethod$ = this.myMethodSubject.asObservable();
  }
}
