import CategoryFilter from "./CategoryFilter";
import PropTypes from "prop-types";

import "./CategoriesFilter.css";

function CategoriesFilter({
  categories,
  selectedCategories,
  onSelectCategory,
}) {
  return (
    <div className="CategoriesFilter">
      {categories.map((category) => (
        <CategoryFilter
          key={category}
          name={category}
          selectedCategories={selectedCategories}
          onSelectCategory={onSelectCategory}
        />
      ))}
    </div>
  );
}

CategoriesFilter.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  selectedCategories: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onSelectCategory: PropTypes.func.isRequired

}


export default CategoriesFilter;