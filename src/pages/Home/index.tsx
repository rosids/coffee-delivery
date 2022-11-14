import {
  HomeContainer,
  Icon,
  ImageContainer,
  IntroContainer,
  IntroText,
  Item,
  Items,
  Title,
} from './styles'
import CoffeeDeliveryHome from '../../assets/coffee-delivery-home.svg'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { CoffeeList } from './components/CoffeeList'

export function Home() {
  return (
    <HomeContainer>
      <IntroContainer>
        <IntroText>
          <Title>
            <h2>Encontre o café perfeito para qualquer hora do dia</h2>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </Title>

          <Items>
            <Item>
              <Icon statusColor="yellow-dark">
                <ShoppingCart size={32} weight="fill" />
              </Icon>
              <p>Compra simples e segura</p>
            </Item>
            <Item>
              <Icon statusColor="base">
                <Package size={32} weight="fill" />
              </Icon>
              <p>Embalagem mantém o café intacto</p>
            </Item>
            <Item>
              <Icon statusColor="yellow">
                <Timer size={32} weight="fill" />
              </Icon>
              <p>Compra simples e segura</p>
            </Item>
            <Item>
              <Icon statusColor="purple">
                <Coffee size={32} weight="fill" />
              </Icon>
              <p>Compra simples e segura</p>
            </Item>
          </Items>
        </IntroText>

        <ImageContainer>
          <img src={CoffeeDeliveryHome} alt="" />
        </ImageContainer>
      </IntroContainer>

      <CoffeeList />
    </HomeContainer>
  )
}
