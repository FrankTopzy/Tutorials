import {useState,  type FormEvent} from 'react'
import ProductCard from './ProductCard';
import type { Category, Product } from '../type';


type DashboardStatsProps = {
  totalInventoryValue: number;
  lowStockCount: number;
  products: Product[];
  onAddStock: (id: number) => void
  onRemoveStock: (id: number) => void;
  setProductList: React.Dispatch<React.SetStateAction<Product[]>>
};


function Dashboard({ totalInventoryValue, lowStockCount, products, onAddStock, onRemoveStock, setProductList }: DashboardStatsProps) {
  const [category, setCategory] = useState<Category | "all">("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [newCategory, setNewCategory] = useState<Category>("shoes");
  const [error, setError] = useState<string | null>(null)


  const filteredProducts = products.filter(product => {
    const matchesCategory = category === "all" || product.category === category;
  
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.trim().toLowerCase());
  
    return matchesCategory && matchesSearch;
  });

  const addNewProduct = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name.trim()) {
      setError("Please enter a product name");
      return;
    }

    const numericPrice = Number(price);
    const numericStock = Number(stock);

    if (Number.isNaN(numericPrice) || numericPrice <= 0) {
      setError("Price must be a valid number greater than 0");
      return;
    }

    if (Number.isNaN(numericStock) || numericStock <= 0) {
      setError("Stock must be a valid number greater than 0");
      return;
    }

    const newId =
      Math.max(...products.map(product => product.id)) + 1;

    const newProduct: Product = {
      id: newId,
      name: name.trim(),
      category: newCategory,
      price: numericPrice,
      stock: numericStock
    };

    setProductList(currentProducts => [
      ...currentProducts,
      newProduct
    ]);

    setName("");
    setPrice("");
    setStock("");
    setNewCategory("shoes");
    setError(null);
  };
  
  return (
    <div>
      <p>Total Inventory Value: ₦{totalInventoryValue}</p>
      <p>Low Stock Products: {lowStockCount}</p>

      <div style={{
        display: 'flex',
        gap: '100px'
      }}>
        <div>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value as Category | "all")}>
              <option value="all">All</option>
              <option value="shoes">shoes</option>
              <option value="electronics">electronics</option>
              <option value="clothing">clothing</option>
          </select>

          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search products"
          />

          {
            filteredProducts.map((product) => {
              return (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddStock={onAddStock}
                  onRemoveStock={onRemoveStock}
                />
              )
            })
          }
        </div>

        <div>
          {error && <p>{error}</p>}
          <form action="" style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px'
          }} onSubmit={addNewProduct}>
            <input type="text" placeholder='Enter product name' value={name} onChange={(e) => setName(e.target.value)}/>
            <input type="text" placeholder='Enter product price' value={price} onChange={(e) => setPrice(e.target.value)}/>
            <input type="text" placeholder='Enter no. of stock' value={stock} onChange={(e) => setStock(e.target.value)}/>
            <select
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value as Category)}>
                <option value="shoes">shoes</option>
                <option value="electronics">electronics</option>
                <option value="clothing">clothing</option>
            </select>

            <button type='submit'>ADD</button>
          </form>
        </div>
      </div>

    </div>
  )
}

export default Dashboard