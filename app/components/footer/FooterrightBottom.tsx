import { metamuseaccepts } from "@/static/data";
import styles from "./Footer.module.css";
import FooterLinkDropdown from "./FooterLinkDropdown";
import Bottomline from "../common/Bottomline";
import Image from "next/image";

export default function FooterrightBottom() {
  return (
    <div className={styles.footerrightbottom}>
      <FooterLinkDropdown titleStyles={styles.quicklinks} title="follow us">
        <ul style={{ display: "flex", flexDirection: "row", gap: "4px" }}>
          <li>
            <a href="#">
              <Image
                src="/svg/instagram.svg"
                alt="instagram-logo"
                height={32}
                width={32}
              />
            </a>
          </li>
          <li>
            <a href="#">
              <Image
                src="/svg/linkedin.svg"
                alt="linkedin-logo"
                height={32}
                width={32}
              />
            </a>
          </li>
        </ul>
      </FooterLinkDropdown>

      <Bottomline style={styles.mobileline} />

      <div className={styles.footerheading}>
        <h3>{metamuseaccepts.title}</h3>
        <ul className={styles.paymentUL}>
          {metamuseaccepts.links.map((link) => (
            <li key={link}>
              <a href="#">
                <Image
                  height={35}
                  width={56}
                  className={styles.img}
                  src={link}
                  alt={`payment-${link}`}
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
