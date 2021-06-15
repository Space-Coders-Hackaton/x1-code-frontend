import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    purple: {
      300: '#C77DFF',
      500: '#7B2CBF',
      700: '#3C096C'
    },
    pink: {
      300: '#FA85B0',
      500: '#F85692',
      700: '#DC0957'
    },
    gray: {
      500: '#8C8A97',
      600: '#7A7786',
      700: '#5F5C6B',
      800: '#4E4B59',
      900: '#33303E',
      950: '#1C1C1F'
    },
    white: '#F4EDE8',
    black: '#121214'
  },
  fonts: {
    heading: 'Montserrat',
    body: 'Nunito'
  },
  styles: {
    global: {
      body: {
        bg: 'black',
        color: 'white'
      }
    }
  },
  components: {
    Heading: {
      variants: {
        48: {
          fontWeight: 700,
          fontSize: '48px',
          lineHeight: '130%'
        },
        32: {
          fontWeight: 700,
          fontSize: '32px',
          lineHeight: '130%'
        },
        28: {
          fontWeight: 700,
          fontSize: '28px',
          lineHeight: '130%'
        },
        24: {
          fontWeight: 700,
          fontSize: '24px',
          lineHeight: '130%'
        },
        20: {
          fontWeight: 700,
          fontSize: '20px',
          lineHeight: '150%'
        },
        18: {
          fontWeight: 600,
          fontSize: '18px',
          lineHeight: '118%'
        }
      }
    },
    Text: {
      variants: {
        24: {
          fontWeight: 700,
          fontSize: '24px',
          lineHeight: '130%'
        },
        20: {
          fontWeight: 700,
          fontSize: '20px',
          lineHeight: '150%'
        },
        18: {
          fontWeight: 400,
          fontSize: '18px',
          lineHeight: '160%'
        },
        16: {
          fontWeight: 400,
          fontSize: '16px',
          lineHeight: '150%'
        },
        14: {
          fontWeight: 400,
          fontSize: '14px',
          lineHeight: '150%'
        }
      }
    }
  }
})
