import React from 'react';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import Dashboard from './views/Dashboard';
import ArticleView from './views/ArticleView';
import Login from './views/Login';
import EditArticle from './views/EditArticle';
import ViewArticles from './views/ViewArticles';


import { isAuthenticated } from "./services/auth";

const PrivateRoute = ({ component: Component, ...rest } : any) => {
  return (
    <Route
      {...rest}
      render={props => isAuthenticated() ? (
        <Component {...props} />
      ) : (
          <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
        )} />
  );
};

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Dashboard} />
      <Route path="/article/:id" component={ArticleView} />
      <Route path="/login" component={Login} />
      <PrivateRoute path="/viewarticles" component={ViewArticles} />
      <PrivateRoute path="/editarticle/:id" exact component={EditArticle} />
      <PrivateRoute path="/editarticle" exact  component={EditArticle} />
    </BrowserRouter>
  );
}

export default Routes;
