import styled from 'styled-components'

import colors from '../../themes/colors'

export const Container = styled.div`
  z-index: 5;
  position: fixed;

  width: 100vw;
  height: 8vh;
`

export const ContentWrapper = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 0 4vw;
  box-shadow: 0px 3px 3px -3px rgba(0, 0, 0, 0.5);
  align-items: center;
  justify-content: space-between;

  background: ${colors.white};

  .burguer {
    display: none;
  }

  .list-social {
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
      padding: 0 0 60px 0;
      max-width: 200px;
      transform: translateX(-50vw);
      transition: 0.8s ease-in-out;
      align-items: center;
      justify-content: center;

      background: ${colors.white};
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
    height: 80%;
    max-height: 60px;
  }
`

export const List = styled.div`
  width: auto;

  .list-services,
  .list-social {
    display: flex;

    list-style-type: none;
  }

  .list-services li {
    display: flex;
    align-items: center;
    justify-content: center;

    color: #333;
    font-weight: 600;
  }

  .list-services li,
  .list-social li {
    margin-left: 25px;
  }

  .list-services li a {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;

    .list-services,
    .list-social {
      width: 100%;
      margin: 0;
      display: block;
    }

    .list-services li,
    .list-social li {
      padding: 10px 0;
      margin-left: 0;
    }

    .list-services li {
      border-bottom: 1px solid #fff;
    }

    .list-services li:last-of-type {
      border-bottom: 0px solid #fff;
    }
  }
`

export const ListWrapper = styled.div`
  width: 100%;
  height: 100%;

  img {
    display: none;
  }

  .list-social {
    display: none;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;

    .list-services {
      padding: 20px;
    }

    .list-services li {
      width: 100%;
      text-align: left;
    }

    .list-social {
      display: block;
    }
  }
`
export const ListWrapperLogo = styled.div`
  display: none;

  @media (max-width: 768px) {
    width: 100%;
    height: 20vh;
    display: flex;
    align-items: center;
    justify-content: center;

    background: #fff;

    img {
      height: 80%;
      display: block;
      max-height: 60px;
    }
  }
`
