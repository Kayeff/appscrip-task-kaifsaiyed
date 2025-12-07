"use client";
import Image from "next/image";
import styles from "./Filterbuttons.module.css";
import RecommendedBox from "./RecommendedBox";
import { useDispatch, useSelector } from "react-redux";
import { productRecommended } from "@/store/selectors/product-selector";
import { populateData } from "@/store/slices/product-slice";
import { DataObj } from "@/types/types";
import { useEffect } from "react";
import {
  closeRecommended,
  closeSideFilter,
  openRecommended,
  openSideFilter,
} from "@/store/slices/toggle-slice";
import {
  selectRecommended,
  selectSideFilter,
} from "@/store/selectors/toggle-selector";

export default function FilterButtons({ data }: { data: DataObj[] }) {
  const disptach = useDispatch();
  const showRecommendedFilter = useSelector(selectRecommended);
  const showSideFilter = useSelector(selectSideFilter);
  const recommendedValue = useSelector(productRecommended);

  function populate() {
    disptach(populateData(data));
  }

  useEffect(() => {
    populate();
  }, []);

  function handleSideFilter() {
    showSideFilter ? disptach(closeSideFilter()) : disptach(openSideFilter());
  }

  function handleRecommendedFilter() {
    showRecommendedFilter
      ? disptach(closeRecommended())
      : disptach(openRecommended());
  }

  return (
    <div className={styles.filterbuttons}>
      <div className={styles.filter}>
        <p className={styles.totalitems}>{data.length} items</p>
        <div>
          <button onClick={handleSideFilter}>
            {`${showSideFilter ? "Hide" : "Show"} Filter`}
          </button>
        </div>
      </div>
      <div className={styles.recommended}>
        <button onClick={handleRecommendedFilter}>
          <p>{recommendedValue}</p>
          <Image
            height={10}
            width={10}
            src="/svg/arrow-left.svg"
            alt="arrow-down"
          />
        </button>
        {showRecommendedFilter && <RecommendedBox />}
      </div>
    </div>
  );
}
