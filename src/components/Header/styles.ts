import styled from 'styled-components'

export const HeaderContainer = styled.header`
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 10rem;
    gap: 51.25rem;
  }

  div {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0px;
    gap: 0.75rem;
  }
`

const BaseButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  gap: 0.25rem;
  border-radius: 6px;
  text-decoration: none;
`

export const LocationButton = styled(BaseButton)`
  background: ${(props) => props.theme['purple-light']};

  color: ${(props) => props.theme['purple-dark']};
  font-size: 0.875rem;
  line-height: 1.3;

  svg {
    color: ${(props) => props.theme.purple};
  }
`
export const CartButton = styled(BaseButton)`
  background: ${(props) => props.theme['yellow-light']};
  isolation: isolate;
  z-index: 0;

  color: ${(props) => props.theme['yellow-dark']};
  font-size: 0.875rem;
  line-height: 1.3;

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px;
    z-index: 1;

    background-color: ${(props) => props.theme['yellow-dark']};
    border-radius: 1000px;

    color: ${(props) => props.theme.white};
    font-weight: 700;
    font-size: 0.75rem;
    line-height: 1.3;
    text-align: center;
    letter-spacing: -0.06em;
  }
`
