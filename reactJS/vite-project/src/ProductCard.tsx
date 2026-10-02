type Category = "shoes" | "electronics" | "clothing";

type Product = {
  name: string;
  category: Category;
  price: number;
  stock: number;
};
type ProductCardProps = {
  product: Product;
};

function ProductCard({ product }: ProductCardProps) {
  return (
    <div>
      <h3>{product.name}</h3>
      <p>Category: {product.category}</p>
      <p>Price: ₦{product.price}</p>
      <p>Stock: {product.stock}</p>
    </div>
  );
}

export default ProductCard;