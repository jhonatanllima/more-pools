import styled from 'styled-components'

import colors from '../../themes/colors'

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  @media (max-width: 1024px) {
    overflow-y: auto;
  }
`

export const Card = styled.div`
  width: 170px;
  height: 270px;
  margin: 8px 8px;
  border-radius: 4px;

  box-shadow: 1px 1px 7px -1px rgba(102, 102, 102, 1);

  @media (max-width: 1024px) {
    width: 240px;
    height: 310px;
  }

  :hover {
    cursor: pointer;
  }
`
export const TopContent = styled.div`
  width: 100%;
  height: 75%;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${colors.backGrey};

  img {
    width: 100%;
    height: 100%;

    object-fit: cover;
  }
`

export const FooterContent = styled.div`
  width: 100%;
  height: 25%;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  h4 {
    font-size: 15px;
    font-weight: lighter;

    @media (max-width: 1024px) {
      font-size: 18px;
    }
  }

  div {
    width: 100%;
    height: auto;
    padding: 0px 12%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    h3 {
      margin-top: 5px;

      font-size: 10px;
      text-decoration: line-through;
    }

    h2 {
      font-size: 15px;

      color: ${colors.primaryColor};
    }

    @media (max-width: 1024px) {
      padding: 0px 10%;

      h3 {
        font-size: 15px;
      }

      h2 {
        font-size: 25px;
      }
    }
  }
`
