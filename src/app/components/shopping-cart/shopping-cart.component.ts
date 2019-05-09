import { Component, OnInit } from '@angular/core';
import {CartService} from '../../services/cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  cart = null;

  constructor(
      private cartService: CartService
  ) { }

  ngOnInit() {
    this.cart = this.cartService.getCart();
  }

}
