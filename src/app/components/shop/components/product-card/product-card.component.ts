import {Component, Input, OnInit} from '@angular/core';
import {find} from 'lodash';
import {CartService} from '../../../../services/cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() product;

  quantity = this.cartService.getQuantity();

  nation: "eu";

  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  getPrice(product) {
    return find(product, {});
  }

  decreaseQuantity() {
    this.cartService.decreaseQuantity();
  }

  increaseQuantity() {
    this.cartService.increaseQuantity();
  }

}
