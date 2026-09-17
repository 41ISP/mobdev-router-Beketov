import { categories } from "../data/products";
import { useSearchParams } from "react-router-dom";

export default function CategoryFilter() {
const [searchParams, setSearchParams] = useSearchParams ()
const activeCategory = searchParams.get("q") || ""
  const handSelect = (id) => {
setSearchParams(id ? {category: id} : {}) 
  }
return (
    <div className="filter-row">
      {categories.map(cat => (
        <button
          key={cat.id || 'all'}
          type="button"
          className={'filter-chip' + (cat.id === activeCategory ? ' active' : '')}
          onClick={() => handSelect(cat.id)}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}
