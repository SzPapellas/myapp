import { Injectable } from '@angular/core';
import {BehaviorSubject, combineLatest} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class CartService {

    quantity: BehaviorSubject<number> = new BehaviorSubject(0);

    constructor() { }

    getQuantity() {
        return this.quantity;
    }

    setQuantity(value) {
        this.quantity.next(value);
    }

    decreaseQuantity() {
        this.quantity.pipe(map(value => value + 1)).subscribe();
    }

    increaseQuantity() {
        this.quantity.pipe(map(i => (i + 1))).subscribe(i => console.log(i));
    }
}
