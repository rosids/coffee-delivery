import { CoffeeListContainer, CoffeeListTitle } from './styles'
import { CoffeeCard } from '../CoffeeCard'

import { coffeeList } from './coffeeList'

export function CoffeeList() {
  return (
    <>
      <CoffeeListTitle>Nossos cafés</CoffeeListTitle>
      <CoffeeListContainer>
        {coffeeList.map((coffee) => (
          <CoffeeCard
            key={coffee.id}
            image={coffee.image}
            tags={coffee.tags}
            name={coffee.name}
            description={coffee.description}
            value={coffee.value}
          />
        ))}
      </CoffeeListContainer>
    </>
  )
}
