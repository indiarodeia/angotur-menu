export class Restaurant {
    constructor(
        public title: string,
        public category: Category[],
        public id?: number,
    ) { };
}

export class Category {
    constructor(
        /*  public id: number, */
        public title: string,
        public products: Product[],
    ) { }
}

export class Product {
    constructor(
        public title: string,
        public price: number,
        public filename?: string,
        public description?: string,
        public id?: number,
    ) { }
}

export class Image {
    constructor(
        public src: string,
        public description?: string,
    ) { }
}

export class DailyMeal {
    constructor(
        public id: number,
        public title?: string,
        public price?: any,
        public description?: string,
        public filename?: string,
    ) { }
}
export interface ProductData {
    title: string;
    price?: number;
    filename?: string;
    description?: string;
    id?: number;
}