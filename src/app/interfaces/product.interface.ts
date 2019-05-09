export interface Product {
    id: number;
    name: string;
    price: {
        huf: Currency
        eur: Currency
    };
    stock: number;
    details: string;
    imgSrc: string;
}

export interface Currency {
    price: number;
    currency: string;
}
