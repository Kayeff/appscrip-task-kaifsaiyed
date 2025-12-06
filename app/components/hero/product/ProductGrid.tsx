"use client";
import styles from "./Product.module.css";
import Container from "../../Container";
import FilterButtons from "../filterbuttons/FilterButtons";
import Product from "./Product";
import { useState } from "react";
import { DataObj } from "@/types/types";

export default function ProductGrid({ data }: { data: DataObj[] }) {
  const [filteredData, setFilteredData] = useState<DataObj[]>(data);
  const totalItems = data.length;

  return (
    <Container className={styles.productcontainer}>
      <FilterButtons totalItems={totalItems} />
      <ul className={styles.productlist}>
        {data.map((prod) => (
          <Product key={prod.id} prod={prod} />
        ))}
      </ul>
    </Container>
  );
}
