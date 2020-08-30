import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Dashboard from './views/Dashboard';
import Article from './views/Article';


function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Dashboard} />
      <Route path="/article" exact component={Article} />
    </BrowserRouter>
  );
}

export default Routes;
