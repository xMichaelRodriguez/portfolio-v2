import { ColorModeScript } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom';
import PortfolioApp from './PortfolioApp';

ReactDOM.render(
  <React.StrictMode>
    <ColorModeScript />
    <PortfolioApp />
  </React.StrictMode>,
  document.getElementById('root')
);
