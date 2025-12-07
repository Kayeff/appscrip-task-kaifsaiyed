import { ReactNode, useState } from "react";
import styles from "./FilterBox.module.css";
import Image from "next/image";

export default function FilterDropdown({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  const [toggleDropdwn, setToggleDropdwn] = useState(false);

  return (
    <div>
      <div
        onClick={() => setToggleDropdwn((prev) => !prev)}
        className={styles.dropdown}
      >
        <h3 className={styles.title}>{title}</h3>
        <button>
          <Image
            height={15}
            width={15}
            src="/svg/arrow-left.svg"
            alt="arrow-down"
          />
        </button>
      </div>
      {toggleDropdwn && children}
    </div>
  );
}
