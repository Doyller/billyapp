import React, { useState } from "react";

function Phones(props) {
  const [showProductInfo, setShowProductInfo] = useState(-1);

  const toggleProductInfo = (index) => {
    setShowProductInfo(showProductInfo === index ? -1 : index);
  };

  const products = [
    {
      brand: "Apple",
      name: "iPhone 14 -> $1099.99",
      description:
        "The iPhone 14 offers a 6.1' Super Retina XDR display with 20 hours of battery life, the A15 Bionic chip makes this phone lightning fast and the dual-camera system insures amazing photos.",
      image: "images/iphone14.jpeg",
    },
    {
      brand: "Apple",
      name: "iPhone 14 Plus -> 1199.99",
      description:
        "A 6.7' Super Retina XDR display, 26 Hour battery life and the A15 Bionic chip, paired with Apple's dual-cam system all help make this phone impressive and user-friendly",
      image: "images/iPhone14plus.jpeg",
    },
    {
      brand: "Apple",
      name: "iPhone 14 Pro Max -> $1499.99",
      description:
        "With a 6.7' Super Retina XDR display with Always-On and ProMotion makes for a more responsive feel. 29 Hour battery life and a triple-camera setup makes this phone feel professional and productive.",
      image: "images/14promax.jpeg",
    },
    {
      brand: "Samsung ",
      name: "S23 -> $1099.99",
      description:
        "With a 6.1' display, triple-camera layout and an 8 core CPU, the S23 is fast, user-friendly and takes great pictures!",
      image: "images/s23.jpeg",
    },
    {
      brand: "Samsung",
      name: "S23 Plus -> $1399.99 ",
      description:
        "Featuring a 6.6' display, 4700mAh battery, 256GB storage and a triple camera system. This 8-Core CPU powered phone, is bigger and better then ever.",
      image: "images/s23+.jpeg",
    },
    {
      brand: "Samsung",
      name: "S23 Ultra -> $1849.99",
      description:
        "With 12GB of RAM, 256GB of storage, a 5000mAh battery and a 4-cam system, all paired with a 6.8' QHD display, the ultra binds fun and functionality.",
      image: "images/s23ultra.jpeg",
    },
    {
      brand: "Google",
      name: "Pixel 6a -> $599.99",
      description:
        "With a 6.1' OLED Display, 128GB storage and a battery that can last up to 72 hours, the Pixel 6a is a perfect mix of a performance and cost-effective product ",
      image: "images/6a.jpeg",
    },
    {
      brand: "Google",
      name: "Pixel 7 -> $799.99",
      description:
        "With the Google Tensor G2 CPU, usage is fast and efficient. With a 6.3' display and 128GB storage, along with a battery life up to 72 hours, the Pixel 7 shows the power of google.",
      image: "images/pixel 7.png",
    },
    {
      brand: "Google",
      name: "Pixel 7 Pro -> $1179.99",
      description:
        "Designed with a 6.7' QHD display, 120HZ refresh rate, Tensor G2 CPU and triple-cam layout. The Pixel 7 Pro has stunning camera quality, a battery life that can reach 72 hours and is optimal for crisp productivity.",
      image: "images/7 pr0.jpeg",
    },
  ];

  const brands = [...new Set(products.map((product) => product.brand))];
  const addToCart = (product) => {
    props.addToCart(product);
  };
  return (
    <div>
      <h1>Billy Bobs Cellphones</h1>
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
                <button onClick={() => toggleProductInfo(index)}>
                  More Info
                </button>
                <button onClick={() => addToCart(product)}>Add to Cart</button>
                {showProductInfo === index && <p>{product.description}</p>}
              </div>
            ))}
        </div>
      ))}
    </div>
  );
}
export default Phones;
