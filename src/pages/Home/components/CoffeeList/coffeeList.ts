import expresso from '../../../../assets/expresso.svg'
import americano from '../../../../assets/americano.svg'
import expressoCremoso from '../../../../assets/expresso-cremoso.svg'
import cafeGelado from '../../../../assets/cafe-gelado.svg'
import cafeComLeite from '../../../../assets/cafe-com-leite.svg'
import latte from '../../../../assets/latte.svg'
import cappuccino from '../../../../assets/cappuccino.svg'
import macchiato from '../../../../assets/macchiato.svg'
import mochaccino from '../../../../assets/mochaccino.svg'
import chocolateQuente from '../../../../assets/chocolate-quente.svg'
import cubano from '../../../../assets/cubano.svg'
import havaiano from '../../../../assets/havaiano.svg'
import arabe from '../../../../assets/arabe.svg'
import irlandes from '../../../../assets/irlandes.svg'

export const coffeeList = [
  {
    id: 1,
    image: expresso,
    tags: ['tradicional'],
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    value: '9,90',
  },
  {
    id: 2,
    image: americano,
    tags: ['tradicional'],
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    value: '9,90',
  },
  {
    id: 3,
    image: expressoCremoso,
    tags: ['tradicional'],
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    value: '9,90',
  },
  {
    id: 4,
    image: cafeGelado,
    tags: ['tradicional', 'gelado'],
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    value: '9,90',
  },
  {
    id: 5,
    image: cafeComLeite,
    tags: ['tradicional', 'com leite'],
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    value: '9,90',
  },
  {
    id: 6,
    image: latte,
    tags: ['tradicional', 'com leite'],
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    value: '9,90',
  },
  {
    id: 7,
    image: cappuccino,
    tags: ['tradicional', 'com leite'],
    name: 'Cappuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    value: '9,90',
  },
  {
    id: 8,
    image: macchiato,
    tags: ['tradicional', 'com leite'],
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    value: '9,90',
  },
  {
    id: 9,
    image: mochaccino,
    tags: ['tradicional', 'com leite'],
    name: 'Mochaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    value: '9,90',
  },
  {
    id: 10,
    image: chocolateQuente,
    tags: ['especial', 'com leite'],
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    value: '9,90',
  },
  {
    id: 11,
    image: cubano,
    tags: ['especial', 'com leite', 'gelado  '],
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    value: '9,90',
  },
  {
    id: 12,
    image: havaiano,
    tags: ['especial'],
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    value: '9,90',
  },
  {
    id: 13,
    image: arabe,
    tags: ['especial'],
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    value: '9,90',
  },
  {
    id: 14,
    image: irlandes,
    tags: ['especial', 'alcoólico'],
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    value: '9,90',
  },
]
