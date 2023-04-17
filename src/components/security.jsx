import React, { useState } from "react";

function Security() {
  const [showProductInfo, setShowProductInfo] = useState(-1);

  const toggleProductInfo = (index) => {
    setShowProductInfo(showProductInfo === index ? -1 : index);
  };

  const products = [
    {
      brand: "Blink",
      name: "Outdoor Wire-Free 1080p IP Security Camera System -> $190.99",
      description:
        "Including 3 cameras, each weather-resistant wire-free camera captures 1080p Full HD footage, has infrared night vision, sends motion detection alerts, and more. ",
      image: "images/blinkOutdoor.jpeg",
    },
    {
      brand: "Blink",
      name: "Blink Sync Module 2 for Blink Indoor/Outdoor/XT2/XT Cameras-> $44.99",
      description:
        "Connects up to 10 of your Blink Indoor, Blink Outdoor, XT2, XT, and Blink Mini cameras",
      image: "images/blinkSync.jpeg",
    },

    {
      brand: "Google",
      name: "Google Nest Video Doorbell-> $199.99",
      description:
        "Boasting a 1.3-megapixel colour sensor camera with 6x digital zoom, this doorbell features motion sensors that clearly identify people, vehicle, and animals ensuring you won’t miss any important detail.",
      image: "images/googleDoor.jpeg",
    },
    {
      brand: "Google",
      name: "Google Nest Smart Lock With Video Doorbell -> $558.99",
      description:
        "Powered by Intel i5-1230U and the Iris Xe graphics, along with 8GB of RAM and 512GB SSD, this is both powerful and lightweight",
      image: "images/googleLock.jpeg",
    },
  ];

  const brands = [...new Set(products.map((product) => product.brand))];

  return (
    <div>
      <h1>Billy Bobs Home Security</h1>
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
                {showProductInfo === index && <p>{product.description}</p>}
              </div>
            ))}
        </div>
      ))}
    </div>
  );
}
export default Security;
