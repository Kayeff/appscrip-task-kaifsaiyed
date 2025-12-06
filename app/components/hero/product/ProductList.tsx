import axios from "axios";
import ProductGrid from "./ProductGrid";
import { DataObj } from "@/types/types";

export default async function ProductList() {
  const { data } = await axios.get<DataObj[]>(
    "https://fakestoreapi.com/products"
  );

  return <ProductGrid data={data} />;
}
