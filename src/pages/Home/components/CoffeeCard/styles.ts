import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px;
  height: 19.375rem;
  width: 19.75rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0 1.25rem 1.25rem;

  @media screen and (min-width: 1376px) and (max-width: 1439px) {
    width: 18.75rem;
  }
  @media screen and (min-width: 1312px) and (max-width: 1375px) {
    width: 17.75rem;
  }
  @media screen and (min-width: 1248px) and (max-width: 1311px) {
    width: 16.75rem;
  }
  @media screen and (min-width: 1232px) and (max-width: 1247px) {
    width: 16.5rem;
  }
  @media screen and (min-width: 1025px) and (max-width: 1246px) {
    width: 16rem;
  }
`

export const CoffeeImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const CoffeeImage = styled.img`
  height: 7.5rem;
  width: 7.5rem;
  margin-top: -20px;
`
export const CoffeeTag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 0.25rem;

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.25rem 0.5rem;
    height: 1.25rem;

    border-radius: 100px;
    background: ${(props) => props.theme['yellow-light']};

    color: ${(props) => props.theme['yellow-dark']};
    font-style: normal;
    font-weight: 700;
    font-size: 0.625rem;
    line-height: 1.3;
    text-transform: uppercase;
  }
`

export const CoffeeInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  p:first-of-type {
    color: ${(props) => props.theme['base-subtitle']};
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 1.3;

    display: flex;
    align-items: flex-end;
    justify-content: center;
  }

  p {
    color: ${(props) => props.theme['base-label']};
    font-style: normal;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.3;
    text-align: center;
  }
`

export const CoffeeBuyContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  gap: 1.8125rem;
`

export const CoffeeValue = styled.p`
  color: ${(props) => props.theme['base-text']};
  font-family: 'Baloo 2';
  font-weight: 800;
  font-style: normal;
  font-size: 1.5rem;
  line-height: 1.3;

  span {
    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
  }
`

export const CoffeeActions = styled.div`
  display: flex;
  align-items: center;
  padding: 0px;
  gap: 0.5rem;
`

export const CoffeeCounter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  gap: 0.25rem;

  width: 4.5rem;
  height: 2.375rem;

  background: ${(props) => props.theme['base-button']};
  border-radius: 6px;

  button {
    color: ${(props) => props.theme.purple};
    background: transparent;
    border: 0;
  }

  p {
    color: ${(props) => props.theme['base-title']};
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.3;
    text-align: center;
  }
`

export const CoffeeAddCart = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  gap: 0.5rem;
  height: 2.375rem;
  width: 2.375rem;

  background: ${(props) => props.theme['purple-dark']};
  border-radius: 6px;
  border: 0;
  color: ${(props) => props.theme['base-card']};
`
