import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import theme from './theme';
import rootReducer from './reducers/rootReducer';

import Header from './components/header/Header';
import Dashboard from './components/dashboard/Dashboard';
import Kanban from './components/kanban/Kanban';
import Profile from './components/profile/Profile';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, logger),
);

const App = () => (
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <BrowserRouter>
        <main>
          <Header />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/kanban" component={Kanban} />
          <Route path="/profile" component={Profile} />
        </main>
      </BrowserRouter>
    </Provider>
  </ThemeProvider>
);

export default App;
