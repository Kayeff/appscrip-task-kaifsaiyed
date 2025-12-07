import Image from "next/image";
import Container from "../common/Container";
import BlackTopbar from "./BlackTopbar";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <BlackTopbar />
      <Container className={styles.wrapper}>
        <div className={styles.headerContainer}>
          <div className={styles.left}>
            <a href="#">
              <Image
                height={24}
                width={24}
                alt="hamburger-menu"
                className={`svgButtons ${styles.hamburgerMenu}`}
                src="/svg/solar_hamburger-menu-linear.svg"
              />
            </a>
            <button>
              <Image
                height={24}
                width={24}
                className="svgButtons"
                id="logo"
                src="/svg/Logo.svg"
                alt="hamburger-menu"
              />
            </button>
          </div>

          {/* <!-- Center Heading --> */}
          <h1 className={styles.centerHeading}>logo</h1>

          {/* <!-- right --> */}
          <div className={styles.right}>
            <button>
              <Image
                height={24}
                width={24}
                className="svgButtons"
                src="/svg/search-normal.svg"
                alt="search"
              />
            </button>
            <button>
              <Image
                height={24}
                width={24}
                className="svgButtons"
                src="/svg/heart.svg"
                alt="heart"
              />
            </button>
            <button>
              <Image
                height={24}
                width={24}
                className="svgButtons"
                src="/svg/shopping-bag.svg"
                alt="shopping-bag"
              />
            </button>
            <button className={styles.hide}>
              <Image
                height={24}
                width={24}
                className="svgButtons"
                src="/svg/profile.svg"
                alt="profile"
              />
            </button>
            <button className={styles.hide}>
              <p className={styles.lang}>ENG</p>
              <Image
                height={24}
                width={24}
                src="/svg/arrow-left.svg"
                alt="lang-dropdown"
              />
            </button>
          </div>
        </div>
        <nav className={styles.nav}>
          <ul>
            {["shop", "skills", "stories", "about", "contact us"].map(
              (link) => (
                <li key={link}>
                  <a href="#">{link}</a>
                </li>
              )
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}
