import React, { useState } from "react";

function Audio() {
  const [showProductInfo, setShowProductInfo] = useState(-1);

  const toggleProductInfo = (index) => {
    setShowProductInfo(showProductInfo === index ? -1 : index);
  };

  const products = [
    {
      brand: "Sony",
      name: "Sony Wireless Headphones -> $249.99",
      description:
        "Equipped with truly wireless technology, enhanced call quality, IPX4 water resistance, and up to 24 hours of battery life with wireless charging.",
      image: "images/sonyHeadphones.jpeg",
    },
    {
      brand: "Sony",
      name: "Sony HTS100F 120-Watt 2.0 Channel Sound Bar-> $149.99",
      description:
        "Play your favorite music via USB or Bluetooth, and easily connect TV video with HDMI ARC2,",
      image: "images/sonySound.jpeg",
    },

    {
      brand: "Bose",
      name: "Bose Sport In-Ear Truly Wireless Headphones-> $159.99",
      description:
        "Equipped with Bluetooth technology, they pair with your smart device so you can stream your favourite playlists, take phone calls, and listen to videos and audio books.",
      image: "images/boseHeadphones.jpeg",
    },
    {
      brand: "Bose",
      name: "Bose SoundLink Flex Waterproof Bluetooth Wireless Speaker -> $169.99",
      description:
        "It has Bluetooth built in so you can connect it effortlessly to your mobile device and stream your playlists with the impressive power of Bose’s advanced audio technologies.",
      image: "images/boseSound.jpeg",
    },

    {
      brand: "Google",
      name: "Google Pixel Buds Pro In-Ear Noise Cancelling Truly Wireless Headphones-> $199.99",
      description:
        "Its custom-designed 11mm speaker drivers make music sound powerful yet nuanced, and a full 5-band EQ lets you customize the sound the way you like it.",
      image: "images/googleHeadphones.jpeg",
    },
    {
      brand: "Google",
      name: "Google Nest Audio -> $109.99",
      description:
        "It can play music, check the weather and traffic, tell you sports scores, make phone calls, control your compatible smart home equipment, and more.",
      image: "images/googleSound.jpeg",
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
export default Audio;
