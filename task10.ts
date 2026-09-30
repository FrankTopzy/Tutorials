type Category = "shoes" | "electronics" | "clothing";

type Productt = {
  id: number;
  name: string;
  category: Category;
  price: number;
  stock: number;
};

const productts: Productt[] = [
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
]

function getProductById(id: number): Productt | undefined {
  const foundProduct = productts.find(product => id === product.id);

  if (!foundProduct) {
    console.log("item");
  }

  return foundProduct;
}

console.log(getProductById(3));

function getProductsByCategory(category: Category): Productt[] {
  const foundProducts = productts.filter(product => product.category === category);

  if(foundProducts.length === 0) {
    console.log("No product match");
    
  }

  return foundProducts;
}

console.log(getProductsByCategory('shoes'));

function getTotalInventoryValue(): number {
  const totalSum = productts.reduce((sum, product) =>  sum + (product.price * product.stock), 0)

  return totalSum;
}

function getLowStockProducts(): Productt[] {
  return productts.filter(product => product.stock <= 3)
}

function productSearch(name: string): Productt[] {
  return productts.filter(product => product.name.toLowerCase().trim().includes(name.toLowerCase()));
}