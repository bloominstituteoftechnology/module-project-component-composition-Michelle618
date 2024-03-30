import React from "react";
import styled from "styled-components"

const StyledFigure = styled.figure`
max-width: 300px;
figcaption {
    font-style: italic;
}
`




export default function Figure({ imageURL, caption }) {
    console.log(imageURL, caption)
  return (
    <figure>
      <img src={imageURL} />
      <figcaption>Mind-blowing photo snapped on {caption}</figcaption>
    </figure>
  );
}
