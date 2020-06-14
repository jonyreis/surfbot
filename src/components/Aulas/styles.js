import styled from "styled-components";

export const AulasContainer = styled.section`
  background-color: #eff4f9;
  padding: 8px 4%;
  h2 {
    font-family: "Alice", sans-serif;
    font-size: 72px;
    font-weight: 400;
    line-height: 100px;
    padding-bottom: 16px;
    text-align: center;
  }
  .items-aulas {
    display: flex;
    justify-content: space-around;
  }
  .aula {
    background-color: #ffffff;
    color: #445566;
    font-family: "Nunito", sans-serif;
    width: 370px;
    padding: 40px 0;
    h3 {
      font-size: 24px;
      margin: 8px 0;
      text-align: center;
    }
    span {
      color: #1188ee;
      font-size: 14px;
      font-weight: bold;
      text-align: center;
    }
    a {
      display: block;
    }
  }

  .plano-aula {
    border-top: 2px solid #eff4f9;
    border-bottom: 2px solid #eff4f9;
    max-width: 230px;
    margin: 0 auto;
    padding: 30px 0;

    p {
      font-size: 14px;
      margin: 16px 0;
      span {
        display: inline-block;
        width: 8px;
        height: 8px;
        border: 2px solid #ee2211;
        border-radius: 50%;
        margin-right: 8px;
      }
    }
  }
  .valor {
    max-width: 230px;
    margin: 0 auto;
    span {
      display: inline-block;
      margin-top: 16px;
      margin-bottom: 32px;
    }
    a {
      background-color: #445566;
      color: #ffffff;
      font-family: "Nunito", sans-serif;
      font-size: 18px;
      font-weight: bold;
      display: flex;
      justify-content: space-between;
      letter-spacing: 0.8px;
      text-decoration: none;
      text-transform: uppercase;
      padding: 8px 16px;
      transition: background-color 200ms;
    }
    a:hover {
      background-color: #446677;
    }
  }
  .pranchas {
    display: flex;
    justify-content: center;
    margin-top: -57px;
  }
  .blockquote {
    color: #445566;
    display: block;
    font-size: 18px;
    font-weight: bold;
    padding: 65px 0;
    text-align: center;
    span {
      color: #ee2211;
    }
    a {
      color: #445566;
      border-bottom: 4px solid #ee2211;
      text-decoration: none;
      transition: 200ms;
    }
    a:hover {
      color: #ee2211;
    }
  }
`;
