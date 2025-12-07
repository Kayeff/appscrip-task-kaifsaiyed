import Image from "next/image";
import styles from "./RecommendedBox.module.css";
import { recommendedData } from "@/static/data";

export default function RecommendedBox({}) {
  return (
    <div className={styles.box}>
      {recommendedData.map((opt) => (
        <div
          key={opt.value}
          className={styles.option}
          // onClick={() => handleOptionClick(opt)}
        >
          {opt.value && (
            <Image src="/svg/check.svg" height={15} width={15} alt="check" />
          )}
          <p>{opt.title}</p>
        </div>
      ))}
    </div>
  );
}
