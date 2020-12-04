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
      max-width: 220px;
      transform: translateX(-55vw);
      transition: 0.8s ease-in-out;
      box-shadow: 9px -1px 15px -2px rgba(0, 0, 0, 0.65);
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
  }

  .list-services li,
  .list-social li {
    margin-left: 25px;
  }

  .list-services li .icon,
  .list-services li a {
    color: #333;
    cursor: pointer;
    font-weight: 600;
    text-decoration: none;
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
      padding: 14px 0;
      margin-left: 0;
    }

    .list-services li {
      border-bottom: 1px solid #fff;
      justify-content: start;
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

  .list-services li .icon {
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
      padding: 25px;
    }

    .list-services li {
      width: 100%;
    }

    .list-services li .icon {
      width: 25px;
      height: 25;
      display: block;
      margin-right: 10px;
    }

    .list-services li .faswimmingpool {
      color: ${colors.primaryColor};
    }

    .list-services li .fashopfy {
      color: ${colors.whatsApp};
    }

    .list-services li .tiwaves {
      color: ${colors.blue};
    }

    .list-services li .faregimages {
      color: ${colors.orange};
    }

    .list-social {
      display: flex;
      padding: 0 14px;
      align-items: center;
      /* flex-direction: column; */
      margin-bottom: 25px;
      justify-content: space-around;
    }

    .list-social li {
      width: auto;
      height: auto;
      padding: 6px;
    }

    .list-social li .socialButton {
      width: 40px !important;
      height: 40px !important;
      border: 0;
      display: flex;
      box-shadow: 5px 5px 8px -2px rgba(0, 0, 0, 0.6);
      align-items: center;
      border-radius: 30%;
      justify-content: center;
    }

    .list-social li .facebook {
      background: ${colors.facebook};
    }

    .list-social li .instagram {
      background: ${colors.instagram};
    }

    .list-social li .whatsapp {
      background: ${colors.whatsApp};
    }

    .list-social li .socialButton .socialIcon {
      color: #fff;
      font-size: 20px;
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
export const Divider = styled.hr`
  display: none;

  @media (max-width: 768px) {
    width: 85%;
    height: 4px;
    display: block;
    border-top: 1px solid #286090;
    border-left: 0;
    border-right: 0;
    border-bottom: 1px solid #286090;
  }
`
