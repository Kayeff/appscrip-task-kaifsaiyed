import Container from "../common/Container";
import Bottomline from "../common/Bottomline";
import styles from "./Footer.module.css";
import Footerrow from "./Footerrow";
import FooterleftTop from "./FooterleftTop";
import FooterrightTop from "./FooterrightTop";
import FooterleftBottom from "./FooterleftBottom";
import FooterrightBottom from "./FooterrightBottom";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container className={styles.footercontainer}>
        <Footerrow Left={<FooterleftTop />} Right={<FooterrightTop />} />
        <Bottomline style={styles.line} />
        <Footerrow Left={<FooterleftBottom />} Right={<FooterrightBottom />} />

        <div className={styles.copyright}>
          <p className={styles.text}>
            Copyright © 2023 mettamuse. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
