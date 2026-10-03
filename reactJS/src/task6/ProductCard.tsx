import { useTheme } from "../task7/useTheme";

function ProductCard() {
  const { mode, setMode } = useTheme();


  
  return (
    <div>
      Current theme: {mode}

      <button
        onClick={() =>
          setMode(mode === "dark" ? "light" : "dark")
        }
      >
        Toggle Theme
      </button>
    </div>
  )
}

export default ProductCard
