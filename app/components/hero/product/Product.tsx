"use client";
import Image from "next/image";
import styles from "./Product.module.css";
import { ProductT } from "@/types/types";
import { useDispatch, useSelector } from "react-redux";
import { selectedLikedProducts } from "@/store/selectors/product-selector";
import {
  applyFilters,
  likeProduct,
  unlikeProduct,
} from "@/store/slices/product-slice";

export default function Product({ prod }: ProductT) {
  const dispatch = useDispatch();
  const likedProducts = useSelector(selectedLikedProducts);
  const isSelected = likedProducts.includes(prod.id);

  function handleClick() {
    isSelected
      ? dispatch(unlikeProduct(prod.id))
      : dispatch(likeProduct(prod.id));

    dispatch(applyFilters());
  }

  return (
    <li>
      <div className={styles.imageContainer}>
        <Image
          height={200}
          width={300}
          src={`${prod.image}`}
          alt={`${prod.title}`}
          className={styles.prodImage}
          loading="lazy"
        />
        <p className={styles.rating}>
          {prod.rating.rate} {`(${prod.rating.count})`}
        </p>
      </div>
      <div className={styles.description}>
        <div>
          <h3 className={styles.prodtitle}>{prod.title}</h3>
          <button onClick={handleClick}>
            {isSelected ? (
              <Image
                height={24}
                width={24}
                src="/svg/liked.svg"
                alt="heart-like"
              />
            ) : (
              <Image height={24} width={24} src="/svg/heart.svg" alt="like" />
            )}
          </button>
        </div>
        <p className={styles.prodcategory}>{prod.category}</p>
        <p>${prod.price}</p>
      </div>
    </li>
  );
}
