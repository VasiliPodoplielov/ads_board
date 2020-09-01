import React from 'react';
import {Route, Switch} from 'react-router';
import HomePage from './pages/HomePage/HomePage';
import AdsEditPage from './pages/AdsEditPage/AdsEditPage';
import Layout from './hoc/Layout/Layout';

export const routes = (
    <Switch>
      <Route path='/' exact>
        <Layout>
        <HomePage />
        </Layout>
      </Route>
      <Route path='/edit' exact>
      <Layout>
        <AdsEditPage />
      </Layout>
      </Route>
      <Route path='/:id'>
        <Layout>
          Здесь будет компонент обьявления
        </Layout>
      </Route>
    </Switch>
)
