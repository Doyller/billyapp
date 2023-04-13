import React from "react";
import topNav from "./topnav";
import React, { useState } from "react";

function computers() {
  const [showProductInfo, setShowProductInfo] = useState(false);

  const toggleProductInfo = () => {
    setShowProductInfo(!showProductInfo);
  };

  const products = [
    {
      brand: "Apple",
      name: "Macbook Air M2 -> $1299.99",
      description:
        "The Macbook Air M2 boasts a 13.6' screen, 18 hours of battery life and a 8 core CPU and GPU. All paired with 8GB of unified memory and a 256GB SSD ",
      image: "images/m2 macbook.jpeg",
    },
    {
      brand: "Apple",
      name: "Macbook Pro M2 -> $1699.99",
      description:
        "The M2 Macbook Pro takes a leap in performance, with an 8 core CPU and 10 Core GPU, with a 13.3' screen and 20 hours of battery life. Containing 8GB of unified memory and 256GB SSD",
      image: "images/m2 pro.jpeg",
    },
    {
        brand: "Apple",
        name: "M2 Mac Mini -> $799.99",
        description:
          "The M2 Mac Mini is the ultimate tool for cost-effective power, 8GB of unified memory, 256GB SSD, all with an 8 Core CPU and 10 Core GPU ",
        image: "images/mac mini.jpeg",
      },
    {
      brand: "Laptops",
      name: "Acer Swift X-> $1499.99",
      description: "Powered by Intel Core i7-11390H and paired with an RTX 3050Ti, 16GB of RAM and a 512GB SSD, the Swift X is powerful and ultra-lightweight",
      image: "images/acer laptop.jpeg",
    },
    {
      brand: "Laptops",
      name: "Dell XPS 13 -> $999.99",
      description: "Powered by Intel i5-1230U and the Iris Xe graphics, along with 8GB of RAM and 512GB SSD, this is both powerful and lightweight",
      image: "",
    },
    {
        brand: "Laptops",
        name: "Dell XPS 13 -> $999.99",
        description: "Powered by Intel i5-1230U and the Iris Xe graphics, along with 8GB of RAM and 512GB SSD, this is both powerful and lightweight",
        image: "",
    },
    {
        brand: "Desktops",
        name: "Dell XPS 13 -> $999.99",
        description: "Powered by Intel i5-1230U and the Iris Xe graphics, along with 8GB of RAM and 512GB SSD, this is both powerful and lightweight",
        image: "",
    },
    {
        brand: "Desktops",
        name: "Dell XPS 13 -> $999.99",
        description: "Powered by Intel i5-1230U and the Iris Xe graphics, along with 8GB of RAM and 512GB SSD, this is both powerful and lightweight",
        image: "",
    },
    {
        brand: "Desktops",
        name: "Dell XPS 13 -> $999.99",
        description: "Powered by Intel i5-1230U and the Iris Xe graphics, along with 8GB of RAM and 512GB SSD, this is both powerful and lightweight",
        image: "",
    },
  ];

  const brands = [...new Set(products.map((product) => product.brand))];

  return (
    <div>
      <h1>Billy Bobs Computers</h1>
      <p>Check out our amazing products:</p>
      {brands.map((brand) => (
        <div key={brand}>
          <h2>{brand}</h2>
          {products
            .filter((product) => product.brand === brand)
            .map((product, index) => (
              <div key={index}>
                <h3>{product.name}</h3>
                <img src={product.image} alt={product.name} />
                <button onClick={toggleProductInfo}>More Info</button>         
                {showProductInfo && <p>{product.description}</p>}
              </div>
            ))}
        </div>
      ))}
    </div>
  );
}
export default computers;
