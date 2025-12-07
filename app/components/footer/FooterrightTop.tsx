import Image from "next/image";
import styles from "./Footer.module.css";
import Bottomline from "../common/Bottomline";

export default function FooterrightTop() {
  return (
    <div className={styles.footerrighttop}>
      <div className={styles.footerheading}>
        <h3 className={styles.title}>call us</h3>
        <p>
          <span>+44 221 133 5360</span>
          <span>customercare@mettamuse.com</span>
        </p>
      </div>

      <Bottomline style={styles.mobileline} />

      <div className={styles.footerheading}>
        <h3 className={styles.title}>currency</h3>
        <p
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Image
            width={20}
            height={20}
            src="/svg/america-flag.svg"
            alt="america-flag"
          />

          <span>USD</span>
        </p>
        <p>
          Transactions will be completed in Euros and a currency reference is
          available on hover.
        </p>
      </div>
    </div>
  );
}
