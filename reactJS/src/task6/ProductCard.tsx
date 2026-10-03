import { useContext } from "react"
import { ThemeContext, useTheme } from "../Context"

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
