import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: 'Open Sans, sans-serif',
    body: 'Raleway, sans-serif',
  },
  colors: {
    brand: {
      100: '#9993FF',
      200: '#8F8BD4',
      300: '#817CE3',
      400: '#7973EC',
      500: '#746EF1',
      600: '#726BF3',
      700: '#6C64FB',
      800: '#1E44FF',
      900: '#0020C1',
    },
  },
});

export default theme;
