import { metamuseaccepts } from "@/static/data";
import styles from "./Footer.module.css";
import FooterLinkDropdown from "./FooterLinkDropdown";
import Bottomline from "../common/Bottomline";

export default function FooterrightBottom() {
  return (
    <div className={styles.footerrightbottom}>
      <FooterLinkDropdown titleStyles={styles.quicklinks} title="follow us">
        <p>
          <span>+44 221 133 5360</span>
          <span>customercare@mettamuse.com</span>
        </p>
      </FooterLinkDropdown>

      <Bottomline style={styles.mobileline} />

      <div className={styles.footerheading}>
        <h3>{metamuseaccepts.title}</h3>
        <ul className={styles.paymentUL}>
          {metamuseaccepts.links.map((link) => (
            <li key={link}>
              <img className={styles.img} src={link} alt={`payment-${link}`} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
