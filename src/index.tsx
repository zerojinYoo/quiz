import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles';
import { QuestionProvider } from './contexts/QuestionContext';
import theme from './styles/theme';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <QuestionProvider>
        <App />
      </QuestionProvider>
    </ThemeProvider>
  </React.StrictMode>
);
