import { MapPin, ShoppingCart } from 'phosphor-react'

import { CartButton, HeaderContainer, LocationButton } from './styles'

import logoCoffeeDelivery from '../../assets/coffee-delivery-logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <nav>
        <img src={logoCoffeeDelivery} alt="" />
        <div>
          <LocationButton>
            <MapPin size={22} weight="fill" />
            Porto Alegre, RS
          </LocationButton>
          <CartButton href="#">
            <ShoppingCart size={22} weight="fill" />
          </CartButton>
        </div>
      </nav>
    </HeaderContainer>
  )
}
