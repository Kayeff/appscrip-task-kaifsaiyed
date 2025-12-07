"use client";
import axios from "axios";
import ProductGrid from "./ProductGrid";
import { DataObj } from "@/types/types";
import { useEffect, useState } from "react";

export default function ProductList() {
  const [data, setData] = useState<DataObj[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const { data } = await axios.get("https://fakestoreapi.com/products");
        setData(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return <ProductGrid data={data} isLoading={loading} error={error} />;
}

// Server side rendering problem because when deployed to Vercel the api endpoint of the fakestoreapi wasnt cooperating with the proxy of Next JS. I had two options change to another free api provider or switch to client side component so i switched to client side component as the data model was already made by me. Changing it would be a tedious task and i thought i should give the task as soon as posible.

// But it was working swiftly on my machine just not on the vercel cloud.
// export default async function ProductList() {
//   const response = await fetch("https://fakestoreapi.com/products");

//   if (!response.ok) {
//     return <ErrorComponent err={`${response.status}`} />;
//   }

//   const data: DataObj[] = await response.json();
//   return <ProductGrid data={data} />;
// }
