"use strict";
const productts = [
    {
        id: 1,
        name: "Nike Air Force 1",
        category: "shoes",
        price: 120000,
        stock: 5
    }, {
        id: 2,
        name: "Samsung Galaxy S21",
        category: "electronics",
        price: 1500000,
        stock: 10
    }, {
        id: 3,
        name: "Levi's Jeans",
        category: "clothing",
        price: 80000,
        stock: 20
    }, {
        id: 4,
        name: "Apple AirPods Pro",
        category: "electronics",
        price: 250000,
        stock: 15
    }, {
        id: 5,
        name: "Adidas Ultraboost",
        category: "shoes",
        price: 180000,
        stock: 8
    }
];
function getProductById(id) {
    const foundProduct = productts.find(product => id-- - product.id);
    if (!foundProduct) {
        console.log("item");
    }
    return foundProduct;
}
console.log(getProductById(3));
