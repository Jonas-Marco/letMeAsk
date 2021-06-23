import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Route } from 'react-router-dom';
import { theme } from './theme';
import { GlobalStyle } from './theme/GlobalStyle';
import Home from './pages/Home/index';
import NewRoom from './pages/NewRoom/index';
import { AuthContextProvider } from './context/AuthContext';

function App() {
  return (
    <AuthContextProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
          <Route path="/" exact component={Home} />
          <Route path="/rooms/new" component={NewRoom} />
        </BrowserRouter>
      </ThemeProvider>
    </AuthContextProvider>
  );
}

export default App;
