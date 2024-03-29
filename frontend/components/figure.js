import React from "react";
export default function Figure({ imageURL, caption }) {
    console.log(imageURL, caption)
  return (
    <figure>
      <img src={imageURL} />
      <figcaption>Mind-blowing photo snapped on {caption}</figcaption>
    </figure>
  );
}
