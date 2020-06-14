import styled from "styled-components";

import backgroundBlockquote from "../../assets/bg-onda.png";

export const BlockquoteContainer = styled.blockquote`
  background: url(${backgroundBlockquote}) center center;
  background-size: cover;
  background-repeat: no-repeat;
  color: #fff;
  width: 100%;
  height: 480px;
  object-fit: fill;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    font-family: "Alice", serif;
    font-size: 72px;
    font-weight: 400;
    max-width: 640px;
  }
  span {
    font-family: "Nunito" sans-serif;
    font-size: 18px;
    font-weight: bold;
  }
`;
