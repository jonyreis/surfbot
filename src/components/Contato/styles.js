import styled from "styled-components";

export const ContatoContainer = styled.section`
  padding: 60px 4%;
  h2 {
    font-family: "Alice", sans-serif;
    font-size: 72px;
    font-weight: 400;
    line-height: 1;
    text-align: center;
  }
  .flex-items {
    display: flex;
    justify-content: space-between;
    margin: 60px 0 30px 0;
    flex: 1;
    color: #445566;

    .form {
      display: flex;
      flex-direction: column;
      flex: 1;
      label {
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 10px;
      }
      input {
        background-color: #eff4f9;
        border: none;
        height: 50px;
        margin-bottom: 20px;
      }
      textarea {
        background-color: #eff4f9;
        border: none;
        height: 160px;
        margin-bottom: 20px;
      }
      a {
        background-color: #445566;
        color: #ffffff;
        font-family: "Nunito", sans-serif;
        font-size: 18px;
        font-weight: bold;
        display: flex;
        justify-content: space-between;
        max-width: 270px;
        letter-spacing: 0.8px;
        text-decoration: none;
        text-transform: uppercase;
        padding: 8px 16px;
        transition: 300ms ease-out;
      }
      a:hover {
        background-color: #446677;
      }
    }

    .divisoria {
      content: "";
      width: 2px;
      height: 440px;
      background-color: #eff4f9;
      margin: 0 100px;
    }

    .info-contato {
      display: flex;
      flex-direction: column;
      flex: 1;
      font-size: 18px;
      font-family: Arial, Helvetica, sans-serif;
      div {
        margin: 15px 0;
      }

      span {
        font-weight: 700;
        margin: 8px 0;
      }

      h3 {
        font-weight: bold;
        text-transform: uppercase;
        margin-top: 15px;
      }
    }
    .info-contato div + div {
      border-top: 2px solid #eff4f9;
      padding-top: 15px;
    }

    .horario span::before {
      content: "";
      display: inline-block;
      width: 6px;
      height: 6px;
      border: 2px solid #34e218;
      border-radius: 50%;
      margin-left: -14px;
      margin-right: 4px;
    }
  }
`;
