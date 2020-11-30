import styled from 'styled-components'

import colors from '../../themes/colors'

export const Container = styled.div`
  width: 100vw;
  height: 8vh;
`

export const ContentWrapper = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 0 4vw;
  align-items: center;
  justify-content: space-between;

  background: ${colors.darkWhite};

  .burguer {
    display: none;
  }

  @media (max-width: 768px) {
    .burguer {
      right: 5%;
      position: absolute;

      display: block;

      font-size: 1.5rem;
    }

    .list {
      top: 0;
      left: 0;
      position: absolute;

      width: 50vw;
      height: 100vh;
      display: flex;
      padding: 24px 24px 24px 0;
      transform: translateX(-50vw);
      transition: 0.5s ease-in-out;
      align-items: flex-start;
      justify-content: start;

      background: ${colors.darkWhite};
    }
  }
`

export const Logo = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  padding: 5px;
  align-items: center;
  justify-content: center;

  img {
    height: 100%;
    max-height: 60px;
  }
`

export const List = styled.div`
  width: auto;

  ul {
    display: flex;

    list-style-type: none;
  }

  ul li {
    margin-left: 25px;
  }

  ul li a {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    ul {
      width: 100%;
      margin: 0;
      display: block;
    }

    ul li {
      padding: 10px 0;
      border-bottom: 1px solid #fff;
    }

    ul li:last-of-type {
      border-bottom: 0px solid #fff;
    }
  }
`
