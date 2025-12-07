import Container from "../Container";
import styles from "./Hero.module.css";
import ProductList from "./product/ProductList";

export default function Hero() {
  return (
    <section className={styles.section}>
      {/* <!-- Hero --> */}
      <Container className={styles.herocontainer}>
        {/* <!-- breadcrumbs --> */}
        <div className={styles.breadcrumbs}>
          <p>Home</p>
          <span> | </span>
          <p>Shop</p>
        </div>

        {/* <!-- hero --> */}
        <div className={styles.display}>
          <h1>DISCOVER OUR PRODUCTS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
            scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
            dolor.
          </p>
        </div>
      </Container>

      <ProductList />
    </section>
  );
}
