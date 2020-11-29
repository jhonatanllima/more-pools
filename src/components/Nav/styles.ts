import styled from 'styled-components'

import colors from '../../themes/colors'

export const Content = styled.nav`
  width: 100%;
  height: 50px;
  display: flex;
  padding: 5px;
  align-items: center;
  justify-content: space-around;

  background: ${colors.darkWhite};

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
    color: ${colors.textGrey};
    font-size: 16px;
    transition: 0.5s;
    cursor: pointer;
    font-weight: 500;
    text-decoration: none;
  }

  .nav-list .nav-list-link a:hover {
    color: #333;
  }
`
