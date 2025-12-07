import { ReactNode } from "react";
import styles from "./Footer.module.css";
import Bottomline from "../common/Bottomline";

type FooterRowT = {
  Left: ReactNode;
  Right: ReactNode;
};

export default function Footerrow({ Left, Right }: FooterRowT) {
  return (
    <div className={styles.footerrow}>
      {Left}
      <Bottomline style={styles.mobileline} />
      {Right}
    </div>
  );
}
