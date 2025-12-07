import ErrorComponent from "../../common/Error";
import ProductGrid from "./ProductGrid";
import { DataObj } from "@/types/types";

export const revalidate = 0;
export const dynamic = "force-dynamic";

export default async function ProductList() {
  const response = await fetch("https://fakestoreapi.com/products", {
    cache: "no-store",
  });

  if (!response.ok) {
    return <ErrorComponent err={`${response.status}`} />;
  }

  const data: DataObj[] = await response.json();
  return <ProductGrid data={data} />;
}
