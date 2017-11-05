import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import theme from './theme';
import appReducer from './reducers/appReducer';

import Header from './components/header/Header';
import Dashboard from './components/dashboard/Dashboard';
import Kanban from './components/kanban/Kanban';

const store = createStore(appReducer);


const App = () => (
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <BrowserRouter>
        <main>
          <Header />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/kanban" component={Kanban} />
        </main>
      </BrowserRouter>
    </Provider>
  </ThemeProvider>
);

export default App;
