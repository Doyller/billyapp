import React from "react";
import topNav from "./topnav";

const computers = () => {
  return (
    (<h3 className="brand">Apple</h3>),
    (<div className="Apple"></div>),
    (
      <div>
        <img src="images/m2 macbook.jpeg" width="200px" height="200px" />
        <div>
          <a> Apple Macbook Air M2 - 1299.99 </a>
          <button title="See More"></button>
        </div>
      </div>
    ),
    (
      <div>
        <img src="images/m2 pro.jpeg" height="200px" width="200px" />
        <div>
          <a> Apple Macbook Pro M2 - $1499.99 </a>
        </div>
      </div>
    ),
    (
      <div>
        <img src="images/mac mini.jpeg" height="200px" width="200px" />
        <div>
          <a> Apple Mac Mini M2 - $799.99 </a>
        </div>
      </div>
    ),
    (<h3 className="brand">Laptop</h3>),
    (<div className="laptops"></div>),
    (
      <div>
        <img src="images/acer laptop.jpeg" width="200px" height="200px" />
        <div>
          <a> Acer Swift X- $999.99</a>
        </div>
      </div>
    ),
    (
      <div>
        <img src="images/asus vivobook.jpeg" height="200px" width="200px" />
        <div>
          <a> Asus Vivobook - $ 899.99 </a>
        </div>
      </div>
    ),
    (
      <div>
        <img src="images/Dell xps 13.jpeg" width="200px" height="200px" />
        <div>
          <a> Dell XPS 13 - $1099.99 </a>
        </div>
      </div>
    ),
    (<h3 className="brand">Gaming</h3>),
    (<div className="Gaming"></div>),
    (
      <div>
        <img
          src="images/alienware aurora r9.jpeg"
          width="200px"
          height="200px"
        />
        <div>
          <a>Alienware Aurora R9 - $1649.99</a>
        </div>
      </div>
    ),
    (
      <div>
        <img src="images/steam deck.jpeg" width="200px" height="200px" />
        <div>
          <a>Steam Deck Hand Held PC- 899.99</a>
        </div>
      </div>
    ),
    (
      <div>
        <img src="images/asus tuf.jpeg" width="200px" height="200px" />
        <div>
          <a>Asus Tuf Dash laptop - $999.99</a>
        </div>
      </div>
    )
  );
};
export default computers;
