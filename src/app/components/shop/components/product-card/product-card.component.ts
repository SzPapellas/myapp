import {Component, Input, OnInit} from '@angular/core';
import {find} from 'lodash';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() product;

  nation: "eu";

  constructor() { }

  ngOnInit() {
  }

  getPrice(product) {
    return find(product, {});
  }

}
