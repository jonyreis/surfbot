import styled from "styled-components";

export const TopHeader = styled.div`
  background-color: #1188ee;
  color: #fff;
  height: 30px;
  width: 100%;
  font-size: 14px;
  font-weight: bold;
  padding: 0 4%;
  display: flex;
  align-items: center;
`;

export const ContainerHeader = styled.header`
  nav {
    background-color: #17222d;
    padding: 0 4%;
    color: #fff;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    padding: 8px 4%;
  }

  ul {
    display: flex;
    align-items: flex-start;
    margin-top: 4px;
    list-style: none;
  }

  li {
    padding: 4px;
  }

  li + li {
    margin-left: 8px;
  }

  li a {
    color: #fff;
    font-size: 18px;
    font-weight: 500;
    padding-bottom: 4px;
    text-decoration: none;
    transition: 150ms;
  }

  li a:hover {
    border-bottom: 4px solid #ee2211;
    text-decoration: none;
  }
`;
