import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'
import {
  CoffeeActions,
  CoffeeAddCart,
  CoffeeBuyContainer,
  CoffeeCardContainer,
  CoffeeCounter,
  CoffeeImage,
  CoffeeImageContainer,
  CoffeeInfo,
  CoffeeTag,
  CoffeeValue,
} from './styles'

interface CoffeeCardProps {
  image: string
  tags: string[]
  name: string
  description: string
  value: string
}

export function CoffeeCard({
  image,
  tags,
  name,
  description,
  value,
}: CoffeeCardProps) {
  return (
    <CoffeeCardContainer>
      <CoffeeImageContainer>
        <CoffeeImage src={image} alt="" />
      </CoffeeImageContainer>

      <CoffeeTag>
        {tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </CoffeeTag>

      <CoffeeInfo>
        <p>{name}</p>
        <p>{description}</p>
      </CoffeeInfo>

      <CoffeeBuyContainer>
        <CoffeeValue>
          <span>R$</span> {value}
        </CoffeeValue>

        <CoffeeActions>
          <CoffeeCounter>
            <button>
              <Minus size={14} weight="bold" />
            </button>
            <p>1</p>
            <button>
              <Plus size={14} weight="bold" />
            </button>
          </CoffeeCounter>

          <CoffeeAddCart>
            <ShoppingCartSimple size={22} weight="fill" />
          </CoffeeAddCart>
        </CoffeeActions>
      </CoffeeBuyContainer>
    </CoffeeCardContainer>
  )
}
