import React from "react";
import Figure from "./figure";
import styled from "styled-components"

const StyledCard = styled.div`
`
export default function Card({ title, text, imageURL, date }) {
    console.log()
  return (
    <StyledCard className="card">
      <h2>{title}</h2>
      <p>{text}</p>
      <Figure imageURL={imageURL} caption={date} />
    </StyledCard>
  );
}
