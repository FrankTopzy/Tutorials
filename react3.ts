import React, { useState } from "react";

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

const App = () => {
  const [products, setProducts] = useState<Productt[]>(productts);
  const [category, setCategory] = useState<Category | "all">("all");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const lowStockCount = products.filter(
    product => product.stock <= 3
  ).length;

  const totalInventoryValue = products.reduce(
    (sum, product) => sum + product.price * product.stock,
    0
  );

  const filteredProducts = products.filter(product => {
    const matchesCategory = category === "all" || product.category === category;
  
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.trim().toLowerCase());
  
    return matchesCategory && matchesSearch;
  });
  

  
  return (
    <div>
      <p>Total Inventory Value: ₦{totalInventoryValue}</p>
      <p>Low Stock Products: {lowStockCount}</p>

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value as Category | "all")}>
          <option value="all">All</option>
          <option value="shoes">shoes</option>
          <option value="electronics">electronics</option>
          <option value="clothing">clothing</option>
      </select>

      {filteredProducts.map(product => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>Category: {product.category}</p>
          <p>Price: ₦{product.price}</p>
          <p>Stock: {product.stock}</p>
        </div>
      ))}

      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search products"
      />

      {
        filteredSearch.map((product, index) => {
          return (
            <div key={product.id}>
              <h3>{product.name}</h3>
              <p>Category: {product.category}</p>
              <p>Price: ₦{product.price}</p>
              <p>Stock: {product.stock}</p>
            </div>
          )
        })
      }
    </div>
  );
};

export default App;