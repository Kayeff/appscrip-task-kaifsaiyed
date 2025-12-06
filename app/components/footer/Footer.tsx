import Container from "../Container";
import Bottomline from "./Bottomline";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        {/* <!-- be the first to know --> */}
        <div className={styles.footerrow}>
          <h3 className={styles.title}>be the first to know</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. this is simply dummy text.
          </p>
          <div className={styles.newsletter}>
            <input
              type="text"
              className={styles.email}
              placeholder="Enter your email.."
            />
            <button disabled className={styles.subscribebtn}>
              Subscribe
            </button>
          </div>
        </div>
        <Bottomline />

        {/* <!-- Call us --> */}
        <div className={styles.footerrow}>
          <h3 className={styles.title}>call us</h3>
          <p>
            <span>+44 221 133 5360</span>
            <img src="/svg/star.svg" alt="star" />
            <span>customercare@mettamuse.com</span>
          </p>
        </div>
        <Bottomline />

        {/* <!-- currency --> */}
        <div className={styles.footerrow}>
          <h3 className={styles.title}>currency</h3>
          <p>
            <img
              width="20px"
              height="20px"
              src="/svg/america-flag.svg"
              alt="america-flag"
            />
            <img src="/svg/star.svg" alt="star" />
            <span>USD</span>
          </p>
        </div>
        <Bottomline />

        <ul className={styles.footerlink}>
          <li>
            <h3 className={styles.metamuseh3}>mettā muse</h3>
            <img src="/svg/arrow-right.svg" alt="arrow-down" />
          </li>
          <div className="line"></div>
          <li>
            <h3 className={styles.title}>quick links</h3>
            <img src="/svg/arrow-right.svg" alt="arrow-down" />
          </li>
          <div className="line"></div>
          <li>
            <h3 className={styles.title}>follow us</h3>
            <img src="/svg/arrow-right.svg" alt="arrow-down" />
          </li>
        </ul>
        <Bottomline />

        <div className={`${styles.footerrow} ${styles.musseaccepts}`}>
          <h3 className={styles.title}>mettā muse Accepts</h3>
          <ul>
            <li>
              <img className={styles.img} src="/images/gapy.jpg" alt="" />
            </li>
            <li>
              <img className={styles.img} src="/images/mastercard.jpg" alt="" />
            </li>
            <li>
              <img className={styles.img} src="/images/paypal.jpg" alt="" />
            </li>
            <li>
              <img className={styles.img} src="/images/amex.jpg" alt="" />
            </li>
            <li>
              <img className={styles.img} src="/images/applepay.jpg" alt="" />
            </li>
            <li>
              <img className={styles.img} src="/images/opay.jpg" alt="" />
            </li>
          </ul>
        </div>
      </Container>

      <div className={styles.copyright}>
        <p className={styles.text}>
          Copyright © 2023 mettamuse. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
