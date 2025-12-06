import Image from "next/image";
import styles from "./Header.module.css";

export default function BlackTopbar() {
  return (
    <div className={styles.topbar}>
      <Image
        height={16}
        width={16}
        src="/svg/element-4.svg"
        alt="topbar-logo"
      />
      <p className="text">Lorem ipsum dolor</p>
    </div>
  );
}
