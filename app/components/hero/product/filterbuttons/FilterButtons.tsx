"use client";
import Image from "next/image";
import styles from "./Filterbuttons.module.css";
import { useState } from "react";
import RecommendedBox from "./RecommendedBox";

export default function FilterButtons({}: {}) {
  const [toggleFilter, setToggleFilter] = useState(false);
  const [toggleRecommendedBox, setToggleRecommendedBox] = useState(false);

  return (
    <div className={styles.filterbuttons}>
      <div className={styles.filter}>
        <p className={styles.totalitems}>{} items</p>
        <div>
          <button onClick={() => setToggleFilter((prev) => !prev)}>
            {`${toggleFilter ? "Hide" : "Show"} Filter`}
          </button>
        </div>
      </div>
      <div className={styles.recommended}>
        <button onClick={() => setToggleRecommendedBox((prev) => !prev)}>
          <p>{}</p>
          <Image
            height={10}
            width={10}
            src="/svg/arrow-left.svg"
            alt="arrow-down"
          />
        </button>
        {toggleRecommendedBox && (
          <RecommendedBox
            // option={option}
            // handleOptionClick={handleOptionClick}
          />
        )}
      </div>
    </div>
  );
}
