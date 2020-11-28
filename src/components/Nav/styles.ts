import styled from "styled-components";

export const Content = styled.nav`
  width: 100%;
  height: 60px;
  display: flex;
  padding: 5px;
  align-items: center;
  justify-content: space-around;

  background: #e7e7e7;

  .logo img {
    width: 100%;
    height: auto;
    max-width: 120px;
    margin-bottom: -40px;
  }

  .nav-list {
    display: flex;
    justify-content: space-around;

    list-style-type: none;
  }

  .nav-list .nav-list-link {
    margin-left: 20px;
  }

  .nav-list .nav-list-link a {
    color: #777;
    cursor: pointer;
    font-size: 16px;
    transition: 0.5s;
    font-weight: 500;
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none;
  }

  .nav-list .nav-list-link a:hover {
    color: #333;
  }
`;
