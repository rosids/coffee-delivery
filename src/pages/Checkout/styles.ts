import styled from 'styled-components'

export const CheckoutContainer = styled.main`
  display: flex;
  justify-content: space-between;
  margin-top: 3.75rem;

  h2 {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 130%;
    display: flex;
    align-items: center;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const PaymentDetailsContainer = styled.section`
  width: 40rem;
`

export const DeliveryAddress = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin-top: 1rem;
  padding: 2.5rem;
  width: 100%;

  background: ${(props) => props.theme['base-card']};
  border-radius: 6px;
`

export const DeliveryAddressInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 0.5rem;
`

export const DeliveryAddressIcon = styled.div`
  width: 1.375rem;
  height: 1.375rem;
  color: ${(props) => props.theme['yellow-dark']};
`

export const DeliveryAddressInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 0.125rem;

  h3,
  p {
    font-weight: 400;
    font-style: normal;
    line-height: 130%;

    display: flex;
    align-items: center;
  }

  h3 {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1rem;
  }

  p {
    color: ${(props) => props.theme['base-text']};
    font-size: 0.875rem;
  }
`
