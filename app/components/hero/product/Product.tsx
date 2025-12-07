import Image from "next/image";
import styles from "./Product.module.css";
import { ProductT } from "@/types/types";

export default function Product({ prod }: ProductT) {
  return (
    <li>
      <Image
        height={200}
        width={300}
        src={`${prod.image}`}
        alt={`${prod.title}-image`}
        className={styles.prodImage}
        loading="lazy"
      />
      <div className={styles.description}>
        <h3 className={styles.prodtitle}>{prod.title}</h3>
        <div>
          <p>${prod.price}</p>
          <Image height={24} width={24} src="/svg/heart.svg" alt="heart" />
        </div>
        <p>{prod.category}</p>
        <p>{prod.rating.count}</p>
      </div>
    </li>
  );
}
