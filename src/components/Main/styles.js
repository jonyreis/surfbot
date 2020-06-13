import styled from "styled-components";

import BgIntro from "../../assets/bg-intro.png";

export const ContainerMain = styled.main`
  background: url(${BgIntro}) center center;
  background-size: cover;
  background-repeat: no-repeat;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 400px;
  padding: 0 4%;
  padding-top: 200px;
  object-fit: fill;

  h1 {
    font-family: "Alice", sans-serif;
    font-size: 72px;
    font-weight: 400;
  }

  form {
    display: flex;
  }

  form input {
    border: #fff;
    border-radius: 8px 0 0 8px;
    height: 40px;
    width: 290px;
    padding: 8px;
  }

  form button {
    background-color: #ee2211;
    border: #ee2211;
    border-radius: 0 8px 8px 0;
    color: #fff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-family: "Nunito", sans-serif;
    font-size: 18px;
    font-weight: 700;
    width: 170px;
    cursor: pointer;
  }
`;
