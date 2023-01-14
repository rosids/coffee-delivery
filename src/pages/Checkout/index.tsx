import { MapPinLine } from 'phosphor-react'
import { DeliveryAddressForm } from './components/DeliveryAddressForm'
import {
  CheckoutContainer,
  DeliveryAddress,
  DeliveryAddressIcon,
  DeliveryAddressInfo,
  DeliveryAddressInfoContainer,
  PaymentDetailsContainer,
} from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <PaymentDetailsContainer>
        <h2>Complete seu pedido</h2>
        <DeliveryAddress>
          <DeliveryAddressInfoContainer>
            <DeliveryAddressIcon>
              <MapPinLine size={22} weight="light" />
            </DeliveryAddressIcon>
            <DeliveryAddressInfo>
              <h3>Endereço de Entrega</h3>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </DeliveryAddressInfo>
          </DeliveryAddressInfoContainer>

          <DeliveryAddressForm />
        </DeliveryAddress>
      </PaymentDetailsContainer>
    </CheckoutContainer>
  )
}
