"use client";
import Image from "next/image";
import styles from "./Filterbuttons.module.css";
import { useState } from "react";
import RecommendedBox from "./RecommendedBox";

export default function FilterButtons({ totalItems }: { totalItems: number }) {
  const [toggleFilter, setToggleFilter] = useState(false);
  const [toggleRecommended, setToggleRecommended] = useState(false);
  const [option, setOption] = useState("recommended");

  function handleOptionClick(opt: string) {
    setOption(opt);
    setToggleRecommended(false);
  }

  return (
    <div className={styles.filterbuttons}>
      <div className={styles.filter}>
        <p className={styles.totalitems}>{totalItems} items</p>
        <div>
          <button onClick={() => setToggleFilter((prev) => !prev)}>
            {`${toggleFilter ? "Hide" : "Show"} Filter`}
          </button>
        </div>
      </div>
      <div className={styles.recommended}>
        <button onClick={() => setToggleRecommended((prev) => !prev)}>
          <p>{option}</p>
          <Image
            height={10}
            width={10}
            src="/svg/arrow-left.svg"
            alt="arrow-down"
          />
        </button>
        {toggleRecommended && (
          <RecommendedBox
            option={option}
            handleOptionClick={handleOptionClick}
          />
        )}
      </div>
    </div>
  );
}
