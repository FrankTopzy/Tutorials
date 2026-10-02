import {useState} from 'react'
import ProductCard from './ProductCard';

type Category = "shoes" | "electronics" | "clothing";

type Product = {
  id: number;
  name: string;
  category: Category;
  price: number;
  stock: number;
};

type DashboardStatsProps = {
  totalInventoryValue: number;
  lowStockCount: number;
  products: Product[];
  onAddStock: (id: number) => void
};


function Dashboard({ totalInventoryValue, lowStockCount, products, onAddStock }: DashboardStatsProps) {
  const [category, setCategory] = useState<Category | "all">("all");
  const [searchTerm, setSearchTerm] = useState("");


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
            />
          )
        })
      }
    </div>
  )
}

export default Dashboard