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

  quantity = 0;

  nation: 'eu';

  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  getPrice(product) {
    return find(product, {});
  }

  decreaseQuantity() {
    if (this.quantity - 1 >= 0) {
      this.quantity -= 1;
    }
  }

  increaseQuantity() {
    if (this.quantity + 1 <= this.product.stock) {
      this.quantity += 1;
    }
  }

  addToCart() {
    if (this.quantity > 0) {
      this.cartService.addToCart({
        product: this.product,
        quantity: this.quantity
      });

      this.quantity = 0;
    }
  }

}
