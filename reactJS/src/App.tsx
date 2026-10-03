
import { useEffect, useState } from 'react';
import Dashboard from './task4/Dashboard';

type Category = "shoes" | "electronics" | "clothing";

type Product = {
  id: number;
  name: string;
  category: Category;
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

function App() {
  const [productList, setProductList] = useState<Product[]>(products);

  const lowStockCount = productList.filter(
    product => product.stock <= 3
  ).length;

  const totalInventoryValue = productList.reduce(
    (sum, product) => sum + product.price * product.stock,
    0
  );

  function addStock(id: number) {
    setProductList(productList =>
      productList.map(product => 
        product.id === id ? {...product, stock: product.stock + 1} : product
      )
    )
  }

  const removeStock = (id: number) => {
    setProductList(productList =>
      productList.map(product => {
        return ( product.stock > 1 && product.id === id ? {...product, stock: product.stock - 1} : product)
      }
      )
    )
  }


  return (
    <>
      <Dashboard totalInventoryValue={totalInventoryValue} lowStockCount={lowStockCount} products={productList} onAddStock={addStock} onRemoveStock={removeStock} setProductList={setProductList}/>
    </>
  )
}

export default App
