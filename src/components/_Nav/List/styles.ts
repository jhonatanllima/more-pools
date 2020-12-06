import styled from 'styled-components'

import colors from '../../../themes/colors'

export const Container = styled.div`
  width: 100%;
  height: 100%;

  @media (max-width: 768px) {
    top: 0;
    left: 0;
    position: absolute;

    width: 50vw;
    height: 100vh;
    display: flex;
    max-width: 220px;
    /* transform: translateX(-55vw); */
    transition: 0.8s ease-in-out;
    box-shadow: 9px -1px 15px -2px rgba(0, 0, 0, 0.65);
    align-items: center;
    justify-content: center;

    background: ${colors.white};
  }
`
export const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
`

export const ListOption = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  list-style-type: none;

  .logoOption {
    display: none;
  }

  .socialOption {
    display: none;
  }

  @media (max-width: 768px) {
    display: flex;
    padding: 20px;
    align-items: center;
    flex-direction: column;
    justify-content: start;

    .logoOption,
    .socialOption {
      display: block;
    }
  }
`

export const ListItem = styled.li`
  margin: 0 0 0 25px;

  .itemLink {
    display: inline-flex;
    align-items: center;
    justify-content: center;

    color: #333;
    cursor: pointer;
    font-style: italic;
    font-weight: 600;
    text-decoration: none;

    .icon {
      display: none;
    }

    .faswimmingpool {
      color: ${colors.primaryColor};
    }

    .fawater {
      color: ${colors.blue};
    }

    .fashopfy {
      color: ${colors.green};
    }

    .faregimages {
      color: ${colors.orange};
    }

    .facebook {
      color: ${colors.facebook};
    }

    .instagram {
      color: ${colors.instagram};
    }

    .whatsapp {
      color: ${colors.whatsApp};
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    margin: 0;
    padding: 14px 0;

    .itemLink .icon {
      margin: 0 10px 0 0;
      display: block;
    }
  }
`

export const Logo = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    height: 100%;
    max-height: 60px;
  }
`

export const Divider = styled.hr`
  display: none;

  @media (max-width: 768px) {
    width: 100%;
    height: 4px;
    margin: 12px 0;
    display: block;
    border-top: 1px solid #286090;
    border-left: 0;
    border-right: 0;
    border-bottom: 1px solid #286090;
  }
`

export const MenuHamburguer = styled.div`
  display: none;

  @media (max-width: 768px) {
    top: 0;
    right: 0;
    position: fixed;

    width: 8vh;
    height: 8vh;
    display: flex;
    align-items: center;
    justify-content: center;

    background: yellow;
  }
`
