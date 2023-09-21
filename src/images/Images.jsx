import React from "react";
const imgName = (name) => {
  return new URL(`${name}`, import.meta.url).href;
};

export const Images = {
  img: [
    imgName("1.jpeg"),
    imgName("2.jpeg"),
    imgName("3.jpeg"),
    imgName("sarv1.jpg"),
    imgName("sarv2.jpg"),
    imgName("sarv3.jpg"),
    imgName("sarv4.jpg"),
    imgName("image-confetti.jpg"),
    imgName("image-currency.jpg"),
    imgName("image-restaurant.jpg"),
    imgName("why_choose.jpg"),
    imgName("background-crew-tablet.jpg"),

  ],
  other:[
    imgName("Searchicon.png")
  ]
};
