import Bottomline from "../common/Bottomline";
import styles from "./Footer.module.css";
import { metamuselink, quicklinks } from "@/static/data";
import FooterLinkDropdown from "./FooterLinkDropdown";

export default function FooterleftBottom() {
  return (
    <div className={styles.footerleftbottom}>
      <FooterLinkDropdown
        title={metamuselink.title}
        titleStyles={styles.quicklinks}
      >
        <ul>
          {metamuselink.links.map((link) => (
            <li key={link.id}>{link.title}</li>
          ))}
        </ul>
      </FooterLinkDropdown>

      <Bottomline style={styles.mobileline} />

      <FooterLinkDropdown
        title={quicklinks.title}
        titleStyles={styles.quicklinks}
      >
        <ul>
          {quicklinks.links.map((link) => (
            <li key={link.id}>{link.title}</li>
          ))}
        </ul>
      </FooterLinkDropdown>
    </div>
  );
}
