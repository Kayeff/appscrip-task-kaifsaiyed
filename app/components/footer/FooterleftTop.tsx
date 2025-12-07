import styles from "./Footer.module.css";

export default function FooterleftTop() {
  return (
    <div className={styles.footerlefttop}>
      <div className={styles.footerheading}>
        <h3 className={styles.title}>be the first to know</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. this is simply dummy text.
        </p>
      </div>
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
  );
}
