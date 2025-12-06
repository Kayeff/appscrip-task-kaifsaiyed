import Image from "next/image";
import styles from "./RecommendedBox.module.css";

export default function RecommendedBox({
  option,
  handleOptionClick,
}: {
  option: string;
  handleOptionClick: (opt: string) => void;
}) {
  return (
    <div className={styles.box}>
      {[
        "Recommended",
        "Ratings",
        "Count",
        "Price: High to low",
        "Price: Low to High",
      ].map((opt) => (
        <div
          key={opt}
          className={styles.option}
          onClick={() => handleOptionClick(opt)}
        >
          {opt.toLowerCase() === option.toLowerCase() && (
            <Image src="/svg/check.svg" height={15} width={15} alt="check" />
          )}
          <p>{opt}</p>
        </div>
      ))}
    </div>
  );
}
