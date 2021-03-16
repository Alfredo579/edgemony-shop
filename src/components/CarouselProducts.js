import Card from "./Card";
import CategoriesFilter from "./CategoriesFilter";
import Search from "./Search";
import "./CarouselProduct.css";
import "./Hero.css";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import PropTypes from "prop-types"
function CarouselProducts({ products, openProductModal, categories }) {
  const isTabletOrLaptop = useMediaQuery({
    query: "(max-device-width: 380px)",
  });

  const [searchTerm, setSearchTerm] = useState();
  const [selectedCategories, setSelectedCategories] = useState([]);

  const termRegexp = new RegExp(searchTerm, "i");
  const filteredProducts = products.filter(
    (product) =>
      product.title.search(termRegexp) !== -1 &&
      (selectedCategories.length === 0 ||
        selectedCategories.includes(product.category))
  );



  return (
    <section
      className={
        isTabletOrLaptop ? "CarouselProducts" : "CarouselProducts flex-wrap"
      }
    >
      <div className="ProductList-filters">
        <Search onSearch={setSearchTerm} />
        <CategoriesFilter
          categories={categories}
          selectedCategories={selectedCategories}
          onSelectCategory={setSelectedCategories}
        />
      </div>

      {filteredProducts.map((pr, id) => {
        return (
          <Card
            product={pr}
            key={id}
            openProductModal={() => openProductModal(pr)}
          />
        );
      })}
    </section>
  );
}

CarouselProducts.propTypes = {
  products: PropTypes.array.isRequired,
  openProductModal: PropTypes.func,
  categories: PropTypes.arrayOf(PropTypes.string)
}

export default CarouselProducts;
