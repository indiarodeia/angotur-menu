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
        public id?: number,
        public description?: string,
    ) { }
}

export class Image {
    constructor(
        public src: string,
        public description?: string,
    ) { }
}