import Container from "../common/Container";
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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea velit reiciendis quasi. Hic, at suscipit. Est assumenda blanditiis fugiat illo, pariatur maxime debitis ut quis vero, ea cumque dolor doloremque distinctio dolorem facere amet dolores provident magnam. Obcaecati, aperiam asperiores!
          </p>
        </div>
      </Container>

      <ProductList />
    </section>
  );
}
