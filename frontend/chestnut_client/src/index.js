import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import './normalize.css';
import theme from './theme';

import Header from './components/header/Header';
import Dashboard from './components/dashboard/Dashboard';
import Kanban from './components/kanban/Kanban';

import registerServiceWorker from './registerServiceWorker';

const App = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <main>
        <Header />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/kanban" component={Kanban} />
      </main>
    </BrowserRouter>
  </ThemeProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
