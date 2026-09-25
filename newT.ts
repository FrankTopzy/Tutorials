type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;
};

const products: Product[] = [
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

function getProductsByCategory(category: string) {
  return products.filter(product => product.category === category);
}

function getProductById(id: number) {
  return products.find(product => product.id === id);
}

function getTotalStockValue() {
  return products.reduce((sum, product) => sum + (product.price * product.stock), 0);
}

function addProducts(newProducts: Product[]) {
  if (!Array.isArray(newProducts)) {
    throw new Error("Input must be an array of products");
  }

  if (newProducts.some(product => !product.id || !product.name || !product.category || !product.price || !product.stock)) {
    throw new Error("All products must have id, name, category, price, and stock properties");
  }

  if (newProducts.some(product => products.some(existingProduct => existingProduct.id === product.id))) {
    throw new Error("Duplicate product id found");
  }
  products.push(...newProducts);
}

function removeProductById(id: number) {
  const index = products.findIndex(product => product.id === id);
  if (index !== -1) {
    products.splice(index, 1);
  }
}

function deleteProduct (id: number) {
  return products.filter(product => product.id !== id)
}

function updateProduct(id: number, updatedProduct: Partial<Product>) {
  const product = products.find(product => product.id === id);
  if (!product) {
    throw new Error("Product not found");
  }
  Object.assign(product, updatedProduct);
}

function searchProductsByName(name: string) {
  return products.filter(product => product.name.toLowerCase().includes(name.toLowerCase()));
}

function getLowStockProducts() {
  return products.filter(product => product.stock < 5);
}
