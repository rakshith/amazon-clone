import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
      />

      {/* Product id */}
      <div class="home__row">
        <Product
          id={322121}
          title="The lean Startup"
          price={11.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/51p1eDvDzrL.jpg"
        />
        <Product
          id={322121}
          title="The lean Startup"
          price={11.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/51p1eDvDzrL.jpg"
        />
      </div>

      <div class="home__row">
        <Product
          id={322121}
          title="The lean Startup"
          price={11.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/51p1eDvDzrL.jpg"
        />
        <Product
          id={322121}
          title="The lean Startup"
          price={11.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/51p1eDvDzrL.jpg"
        />

        <Product
          id={322121}
          title="The lean Startup"
          price={11.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/51p1eDvDzrL.jpg"
        />
      </div>

      <div class="home__row">
        <Product
          id={322121}
          title="The lean Startup"
          price={11.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/51p1eDvDzrL.jpg"
        />
      </div>
      {/* Product */}
    </div>
  );
}

export default Home;
