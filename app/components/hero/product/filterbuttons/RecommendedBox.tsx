import Image from "next/image";
import styles from "./RecommendedBox.module.css";
import { recommendedData } from "@/static/data";
import { useDispatch, useSelector } from "react-redux";
import { productRecommended } from "@/store/selectors/product-selector";
import { filterRecommended } from "@/store/slices/product-slice";
import { closeRecommended } from "@/store/slices/toggle-slice";

export default function RecommendedBox() {
  const disptach = useDispatch();
  const recommendedValue = useSelector(productRecommended);

  function selectRecommendedValue(option: string) {
    disptach(filterRecommended(option));
    disptach(closeRecommended());
  }

  return (
    <div className={styles.box}>
      {recommendedData.map((opt) => (
        <div
          key={opt.value}
          onClick={() => selectRecommendedValue(opt.value)}
          className={
            opt.value === recommendedValue
              ? styles.optionSelected
              : styles.option
          }
        >
          {opt.value === recommendedValue && (
            <Image src="/svg/check.svg" height={15} width={15} alt="check" />
          )}
          <p>{opt.title}</p>
        </div>
      ))}
    </div>
  );
}
