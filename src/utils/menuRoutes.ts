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
        name: 'Todos'
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
        name: 'Geral'
      },
      {
        name: 'Desafio'
      },
      {
        name: 'Tecnologia'
      }
    ]
  },
  {
    name: 'Sobre'
  }
]
