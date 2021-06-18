interface MenuRoutesItem {
  name: string
  to?: string
  items?: {
    name: string
    to?: string
    subItems?: {
      name: string
      to?: string
    }[]
  }[]
}

export const menuRoutes: MenuRoutesItem[] = [
  {
    name: 'Desafios',
    items: [
      {
        name: 'Todos',
        to: '/challenges'
      },
      {
        name: 'Níveis',
        subItems: [
          {
            name: 'Hard'
          },
          {
            name: 'Normal'
          },
          {
            name: 'Easy'
          }
        ]
      }
    ]
  },
  {
    name: 'Rankings',
    items: [
      {
        name: 'Geral',
        to: '/rankings'
      },
      {
        name: 'Desafio',
        to: '/rankings/challenge'
      },
      {
        name: 'Tecnologia',
        to: '/rankings/tech'
      }
    ]
  },
  {
    name: 'Sobre',
    to: '/about'
  }
]
