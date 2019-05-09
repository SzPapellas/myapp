import { Injectable } from '@angular/core';
import {BehaviorSubject, combineLatest, Observable, of} from 'rxjs';
import {find, map, switchMap} from 'rxjs/operators';
import {Cart, CartItem} from '../interfaces/cart-item.interface';

@Injectable({
    providedIn: 'root'
})
export class CartService {
    cart: BehaviorSubject<Cart> = new BehaviorSubject({
        items: [],
        sum: 0
    });

    constructor() {}

    getCart() {
        return this.cart;
    }

    addToCart(item) {
        this.cart.pipe(map(cart => {
            cart.items.push(item);
            cart.sum += item.quantity;
        })).subscribe();
    }
}
