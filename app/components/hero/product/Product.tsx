"use client";
import Image from "next/image";
import styles from "./Product.module.css";
import { ProductT } from "@/types/types";
import { useDispatch, useSelector } from "react-redux";
import {
  likeProduct,
  unlikeProduct,
} from "@/store/slices/liked_products-slice";
import { selectedLikedProducts } from "@/store/selectors/liked-product-selector";

export default function Product({ prod }: ProductT) {
  const dispatch = useDispatch();
  const likedProducts = useSelector(selectedLikedProducts);
  const isLiked = likedProducts.find((id) => id === prod.id);

  function toggleLike() {
    isLiked ? dispatch(unlikeProduct(prod.id)) : dispatch(likeProduct(prod.id));
  }

  return (
    <li>
      <div className={styles.imageContainer}>
        <Image
          height={200}
          width={300}
          src={`${prod.image}`}
          alt={`${prod.title}-image`}
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
          <button onClick={toggleLike}>
            {isLiked ? (
              <Image height={24} width={24} src="/svg/liked.svg" alt="heart" />
            ) : (
              <Image height={24} width={24} src="/svg/heart.svg" alt="heart" />
            )}
          </button>
        </div>
        <p className={styles.prodcategory}>{prod.category}</p>
        <p>${prod.price}</p>
      </div>
    </li>
  );
}
