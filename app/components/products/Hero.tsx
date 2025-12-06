import React from "react";

export default function Hero() {
  return (
    <section>
      {/* <!-- Hero --> */}
      <div id="hero-container" className="container">
        {/* <!-- breadcrumbs --> */}
        <div id="breadcrumbs">
          <p>Home</p>
          <span> | </span>
          <p>Shop</p>
        </div>

        {/* <!-- hero --> */}
        <div id="hero">
          <h1>DISCOVER OUR PRODUCTS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
            scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
            dolor.
          </p>
        </div>
      </div>

      <div id="product-container" className="container">
        <div>
          <div id="button-grid">
            <button>Filter</button>
            <button>
              <span>Recommended</span>
              <span>
                <img src="./public/svg/arrow-left.svg" alt="" />
              </span>
            </button>
          </div>
        </div>
        <ul id="product-list">
          <li>
            <img src="./public/product-images/prod1.png" alt="" />
            <div className="description">
              <div>
                <p className="prod-title">Product name</p>
                <img src="./public/svg/heart.svg" alt="" />
              </div>
              <p>
                <span style="text-decoration: underline">Sign in</span> or
                Create an account to see pricing
              </p>
            </div>
          </li>
          <li>
            <img src="./public/product-images/prod2.png" alt="" />
            <div className="description">
              <div>
                <p className="prod-title">Product name</p>
                <img src="./public/svg/heart.svg" alt="" />
              </div>
              <p>
                <span style="text-decoration: underline">Sign in</span> or
                Create an account to see pricing
              </p>
            </div>
          </li>
          <li>
            <img src="./public/product-images/prod3.png" alt="" />
            <div className="description">
              <div>
                <p className="prod-title">Product name</p>
                <img src="./public/svg/heart.svg" alt="" />
              </div>
              <p>
                <span style="text-decoration: underline">Sign in</span> or
                Create an account to see pricing
              </p>
            </div>
          </li>
          <li>
            <img src="./public/product-images/prod4.png" alt="" />
            <div className="description">
              <div>
                <p className="prod-title">Product name</p>
                <img src="./public/svg/heart.svg" alt="" />
              </div>
              <p>
                <span style="text-decoration: underline">Sign in</span> or
                Create an account to see pricing
              </p>
            </div>
          </li>
          <li>
            <img src="./public/product-images/prod5.png" alt="" />
            <div className="description">
              <div>
                <p className="prod-title">Product name</p>
                <img src="./public/svg/heart.svg" alt="" />
              </div>
              <p>
                <span style="text-decoration: underline">Sign in</span> or
                Create an account to see pricing
              </p>
            </div>
          </li>
          <li>
            <img src="./public/product-images/prod6.png" alt="" />
            <div className="description">
              <div>
                <p className="prod-title">Product name</p>
                <img src="./public/svg/heart.svg" alt="" />
              </div>
              <p>
                <span style="text-decoration: underline">Sign in</span> or
                Create an account to see pricing
              </p>
            </div>
          </li>
          <li>
            <img src="./public/product-images/prod7.png" alt="" />
            <div className="description">
              <div>
                <p className="prod-title">Product name</p>
                <img src="./public/svg/heart.svg" alt="" />
              </div>
              <p>
                <span style="text-decoration: underline">Sign in</span> or
                Create an account to see pricing
              </p>
            </div>
          </li>
          <li>
            <img src="./public/product-images/prod8.png" alt="" />
            <div className="description">
              <div>
                <p className="prod-title">Product name</p>
                <img src="./public/svg/heart.svg" alt="" />
              </div>
              <p>
                <span style="text-decoration: underline">Sign in</span> or
                Create an account to see pricing
              </p>
            </div>
          </li>
          <li>
            <img src="./public/product-images/prod9.png" alt="" />
            <div className="description">
              <div>
                <p className="prod-title">Product name</p>
                <img src="./public/svg/heart.svg" alt="" />
              </div>
              <p>
                <span style="text-decoration: underline">Sign in</span> or
                Create an account to see pricing
              </p>
            </div>
          </li>
          <li>
            <img src="./public/product-images/prod10.png" alt="" />
            <div className="description">
              <div>
                <p className="prod-title">Product name</p>
                <img src="./public/svg/heart.svg" alt="" />
              </div>
              <p>
                <span style="text-decoration: underline">Sign in</span> or
                Create an account to see pricing
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
