import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Dashboard from './views/Dashboard';
import Article from './views/Article';
import Login from './views/Login';
import EditArticle from './views/EditArticle';
import ViewArticles from './views/ViewArticles';


function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Dashboard} />
      <Route path="/article/:id" exact component={Article} />
      <Route path="/login" exact component={Login} />
      <Route path="/viewarticles" exact component={ViewArticles} />
      <Route path="/editarticle" exact component={EditArticle} />
    </BrowserRouter>
  );
}

export default Routes;
