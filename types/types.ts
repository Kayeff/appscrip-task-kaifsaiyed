import { ReactNode } from "react";

export type DataObj = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

export type ContainerT = {
  className?: string;
  children: ReactNode;
};

export type ProductGridT = { data: DataObj[] };
export type ProductT = { prod: DataObj };
