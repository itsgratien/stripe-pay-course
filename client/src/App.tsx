import React from 'react';
import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { PageNotFound } from './components/PageNotFound';
import { RouteConfig } from './utils';

const App = () => {
  const route = [
    {
      component: <Home />,
      path: RouteConfig.Home,
    },
  ];
  return (
    <div className='App'>
      <BrowserRouter>
        <Switch>
          {route.map((item, i) => (
            <Route key={i} path={item.path} exact>
              {item.component}
            </Route>
          ))}
          <Route path='*'>
            <PageNotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
