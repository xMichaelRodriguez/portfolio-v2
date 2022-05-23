import { ChakraProvider } from '@chakra-ui/react';
import { LanguageProvider } from './context/LanguageProvider';
import { AppRouter } from './routers/AppRouter';
import theme from './theme/theme';
function PortfolioApp() {
  return (
    <ChakraProvider theme={theme}>
      <LanguageProvider>
        <AppRouter />
      </LanguageProvider>
    </ChakraProvider>
  );
}

export default PortfolioApp;
