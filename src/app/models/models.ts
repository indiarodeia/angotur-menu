export class Category {
    constructor(
        public title: string,
        public products: Product[],
        public description?: string,
    ) { }
}

export class Product {
    constructor(
        public title: string,
        public price: number,
        public description?: string,
        public isFood?: boolean,
    ) { }
}

export class Image {
    constructor(
        public src: string,
        public description?: string,
    ) { }
}