import React, { useState } from "react";

function TopDeals(props) {
  const [showProductInfo, setShowProductInfo] = useState(-1);

  const toggleProductInfo = (index) => {
    setShowProductInfo(showProductInfo === index ? -1 : index);
  };
/// this portion of code allows us to set up an array of products and information, it makes it easier to call this information later
  const products = [
    {
      brand: "Apple",
      name: "iPhone 13 -> $849.99",
      description:
        "Save $200! With the A15 Bionic chip, a 6.1' Super Retina XDR display and a dual-cam. The iPhone 13 has great performance.",
      image: "images/iphone13.jpeg",
    },
    {
      brand: "Apple",
      name: "iPad 9th generation -> $399.99",
      description:
        "Save $50! Versatility at it's finest. With an A13 Bionic chip, a 10.2' screen and 10 hour battery life, the iPad makes personal or professional use simple.",
      image: "images/9thgenipad.jpeg",
    },
    {
      brand: "Microsoft",
      name: "Surface Laptop 4 -> $899.95",
      description:
        "Save $400! With a 13.5' Touchscreen, 512GB SSD, 8GB of RAM and an Intel i5-1135G7, the surface makes being productive quick and easy.",
      image: "images/surfacelaptop4.jpeg",
    },
    {
      brand: "Asus",
      name: "27' Asus Tuf monitor -> $199.99",
      description:
        "Gone when gone, save $50. Featuring a 165Hz refresh rate and a 1ms response time, this monitor makes gaming look spectacular",
      image: "images/monitor.jpeg",
    },
    {
      brand: "Ring",
      name: "Ring video doorbell -> $49.99",
      description:
        "Save $50! With the ring video doorbell, see who's at the door. Directly from your phone (requires ring app)",
      image: "images/ringdoorbell.jpeg",
    },
    {
      brand: "Beats",
      name: "Studio 3 headphones -> $299.99",
      description:
        "Save $140! With Pure Active Noise Cancelling technology, these headphone block unwanted sounds, along with the Apple W1 chip and 40 hour battery life, these headphones ensure long and great sounding audio quality.",
      image: "images/studio2.jpeg",
    },
  ];

  const brands = [...new Set(products.map((product) => product.brand))];
  const addToCart = (product) => {
    props.addToCart(product);
  };
  /// The code below allows us to toggle our buttons for more information and for adding products to the cart
  /// It also allows us to lay out information easier as we callback our array and it will lay it out according to our code. It enables cleaner and more precise code 
  return (
    <div>
      <h1>Top Deals</h1>
      <p>Check out today's amazing deals</p>
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

export default TopDeals;
