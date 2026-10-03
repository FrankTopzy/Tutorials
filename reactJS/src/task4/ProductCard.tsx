type Category = "shoes" | "electronics" | "clothing";

type Product = {
  id: number;
  name: string;
  category: Category;
  price: number;
  stock: number;
};
type ProductCardProps = {
  product: Product;
  onAddStock: (id: number) => void;
  onRemoveStock: (id: number) => void;
};

function ProductCard({ product, onAddStock, onRemoveStock }: ProductCardProps) {
  return (
    <div>
      <h3>{product.name}</h3>
      <p>Category: {product.category}</p>
      <p>Price: ₦{product.price}</p>
      <p>Stock: {product.stock}</p>

      <button onClick={() => onAddStock(product.id)}>Increase Stock</button>
      <button onClick={() => onRemoveStock(product.id)}>Decrease Stock</button>
    </div>
  );
}

export default ProductCard;