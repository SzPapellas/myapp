import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-shop',
    templateUrl: './shop.component.html',
    styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

    products = [
        {
            id: 1,
            name: 'Item1',
            price: {
                huf: {
                    price: 10000,
                    currency: 'HUF'
                },
                eur: {
                    price: 10000,
                    currency: 'HUF'
                }
            },
            details: `Call park out she wife face mean. Invitation excellence imprudence understood`,
            imgSrc: ''
        },
        {
            id: 2,
            name: 'Item2',
            price: {
                huf: {
                    price: 10000,
                    currency: 'HUF'
                },
                eur: {
                    price: 10000,
                    currency: 'HUF'
                }
            },
            details: `Call park out she wife face mean. Invitation excellence imprudence understood it any age hunted.`,
            imgSrc: ''
        },
        {
            id: 3,
            name: 'Item3',
            price: {
                huf: {
                    price: 10000,
                    currency: 'HUF'
                },
                eur: {
                    price: 10000,
                    currency: 'HUF'
                }
            },
            details: `Far merits season better tended any age hunted.`,
            imgSrc: ''
        },
        {
            id: 4,
            name: 'Item4',
            price: {
                huf: {
                    price: 10000,
                    currency: 'HUF'
                },
                eur: {
                    price: 10000,
                    currency: 'HUF'
                }
            },
            details: `Meet shew or said like he.`,
            imgSrc: ''
        },
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
