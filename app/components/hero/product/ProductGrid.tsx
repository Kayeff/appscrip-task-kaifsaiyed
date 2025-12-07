"use client";
import styles from "./Product.module.css";
import Container from "../../Container";
import FilterButtons from "./filterbuttons/FilterButtons";
import Product from "./Product";
import { ProductGridT } from "@/types/types";
import FilterBox from "./filterbuttons/FilterBox";
import { useSelector } from "react-redux";
import { selectSideFilter } from "@/store/selectors/toggle-selector";
import { selectedLikedProducts } from "@/store/selectors/liked-product-selector";
import { selectedFilteredData } from "@/store/selectors/product-selector";

export default function ProductGrid({ data }: ProductGridT) {
  const showSideFilter = useSelector(selectSideFilter);
  const likedProducts = useSelector(selectedLikedProducts);
  const filteredProducts = useSelector(selectedFilteredData);

  return (
    <Container className={styles.productcontainer}>
      <FilterButtons data={data} />

      <div
        className={`${styles.showcase} ${
          showSideFilter ? styles.showFilter : styles.hideFilter
        }`}
      >
        {showSideFilter && <FilterBox data={data} />}
        <ul className={styles.productlist}>
          {filteredProducts.map((prod) => (
            <Product key={prod.id} prod={prod} />
          ))}
        </ul>
      </div>
    </Container>
  );
}
