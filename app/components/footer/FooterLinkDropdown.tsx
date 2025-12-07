"use client";
import { ReactNode, useState } from "react";
import styles from "./Footer.module.css";

export default function FooterLinkDropdown({
  titleStyles,
  title,
  children,
}: {
  titleStyles: string;
  title: string;
  children: ReactNode;
}) {
  const [toggleDropdwn, setToggleDropdwn] = useState(false);

  return (
    <div className={titleStyles}>
      <div className={styles.dropdown}>
        <h3 className={styles.title}>{title}</h3>
        <button onClick={() => setToggleDropdwn((prev) => !prev)}>
          <img src="/svg/arrow-right.svg" alt="down-arrow" />
        </button>
      </div>
      {toggleDropdwn && <div>{children}</div>}
      <div className={styles.desktopDisplay}>{children}</div>
    </div>
  );
}
