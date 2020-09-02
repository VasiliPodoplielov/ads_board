import React from 'react';
import {Route, Switch} from 'react-router';
import HomePage from './pages/HomePage/HomePage';
import AdsEditPage from './pages/AdsEditPage/AdsEditPage';
import Layout from './hoc/Layout/Layout';
import AdsViewPage from "./pages/AdsViewPage/AdsViewPage";

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
      <Route path='/edit/:adId' exact>
        <Layout>
          <AdsEditPage />
        </Layout>
      </Route>
      <Route path='/:adId' exact>
        <Layout>
          <AdsViewPage />
        </Layout>
      </Route>
    </Switch>
)
