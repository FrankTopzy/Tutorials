var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var products = [
    {
        id: 1,
        name: "Nike Air Force 1",
        category: "shoes",
        price: 120000,
        stock: 5
    },
    {
        id: 2,
        name: "Apple Watch",
        category: "electronics",
        price: 450000,
        stock: 3
    },
    {
        id: 3,
        name: "Hoodie",
        category: "clothing",
        price: 50000,
        stock: 10
    }
];
function getProductsByCategory(category) {
    return products.filter(function (product) { return product.category === category; });
}
function getProductById(id) {
    return products.find(function (product) { return product.id === id; });
}
function getTotalStockValue() {
    return products.reduce(function (sum, product) { return sum + (product.price * product.stock); }, 0);
}
function addProducts(newProducts) {
    if (!Array.isArray(newProducts)) {
        throw new Error("Input must be an array of products");
    }
    if (newProducts.some(function (product) { return !product.id || !product.name || !product.category || !product.price || !product.stock; })) {
        throw new Error("All products must have id, name, category, price, and stock properties");
    }
    if (newProducts.some(function (product) { return products.some(function (existingProduct) { return existingProduct.id === product.id; }); })) {
        throw new Error("Duplicate product id found");
    }
    var newProductsArr = __spreadArray(__spreadArray([], products, true), newProducts, true);
    return newProductsArr;
}
console.log(addProducts([{
        id: 40,
        name: "Hoodie",
        category: "clothing",
        price: 50000,
        stock: 10
    }]));
/*function removeProductById(id: number) {
  const index = products.findIndex(product => product.id === id);
  if (index !== -1) {
    products.splice(index, 1);
  }
}*/
function deleteProduct(id) {
    return products.filter(function (product) { return product.id !== id; });
}
function updateProduct(id, updatedProduct) {
    var product = products.find(function (product) { return product.id === id; });
    if (!product) {
        throw new Error("Product not found");
    }
    /*Object.assign(product, updatedProduct);*/
    return products.map(function (product) {
        return product.id === id ? __assign(__assign({}, product), updatedProduct) : product;
    });
}
console.log(updateProduct(40, {
    name: "Hoie",
    category: "clothing",
    price: 50000,
    stock: 10
}));
function searchProductsByName(name) {
    return products.filter(function (product) { return product.name.toLowerCase().includes(name.toLowerCase()); });
}
function getLowStockProducts() {
    return products.filter(function (product) { return product.stock <= 3; });
}
