"use client";
import styles from "./Product.module.css";
import Container from "../../Container";
import FilterButtons from "./filterbuttons/FilterButtons";
import Product from "./Product";
import { ProductGridT } from "@/types/types";

export default function ProductGrid({ data }: ProductGridT) {
  return (
    <Container className={styles.productcontainer}>
      <FilterButtons
      // option={option}
      // totalItems={totalItems}
      // onClick={handleOptionClick}
      />
      <ul className={styles.productlist}>
        {data.map((prod) => (
          <Product key={prod.id} prod={prod} />
        ))}
      </ul>
    </Container>
  );
}
