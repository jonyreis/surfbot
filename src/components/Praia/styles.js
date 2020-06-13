import styled from "styled-components";

export const PraiaContainer = styled.section`
  display: grid;
  grid-template-columns: 540px 470px;
  gap: 130px;
  margin: 70px 4%;
`;

export const BoxLeft = styled.div`
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  #fotoMap {
    max-width: 480px;
    margin-top: -32px;
  }

  .como-chegar {
    margin-top: 20px;
    margin-left: 20px;
    display: flex;
    flex-direction: row;

    span {
      display: inline-block;
      width: 8px;
      height: 8px;
      border: 2px solid #ee2211;
      border-radius: 50%;
    }

    h4 {
      margin-left: 8px;
      font-size: 14px;
      text-transform: uppercase;
    }
  }

  .como-ir {
    display: block;
    margin-top: 10px;
    margin-left: 20px;
    p:before {
      content: " ";
      display: inline-block;
      width: 8px;
      height: 2px;
      background-color: #1188ee;
      margin-right: 6px;
      margin-bottom: 4px;
    }

    p {
      color: #aaaaaa;
      font-weight: bold;
      span {
        color: #000000;
      }
    }
  }
`;

export const BoxRight = styled.div`
  h2 {
    font-family: "Alice", sans-serif;
    font-size: 72px;
    font-weight: 400;
    margin-left: 0;
    span {
      color: #1188ee;
    }
  }

  .container-item {
    margin: 56px 0;
  }

  .item-praia {
    display: flex;
    align-items: center;
    padding: 26px 0;
    border-top: 2px solid #eff4f9;

    span {
      font-weight: bold;
      font-size: 24px;
      margin-left: 30px;
    }
  }

  .item-praia:last-child {
    border-bottom: 2px solid #eff4f9;
  }

  p {
    color: #17222d;
    font-size: 18px;
    line-height: 26px;
  }
`;
