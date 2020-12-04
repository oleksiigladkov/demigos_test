import * as React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Layout from './Views/Layout/Layout';
import Index from './Views/Pages/Index';
import Rules from './Views/Pages/Rules';
// import RulesInModal from './Views/Pages/RulesInModal';
import NotFound from './Views/Pages/NotFound';
import ServerError from './Views/Pages/ServerError';

export const history = createBrowserHistory();

const Routing = () => (
    <Router history={history}>
        <Switch>
            <Route exact path="/" render={() => <Layout><Index /></Layout>} />
            <Route exact path="/index" render={() => <Layout><Index /></Layout>} />
            <Route exact path="/rules" render={() => <Layout><Rules /></Layout>} />
            {/* <Route exact path="/rulesInModal" render={() => <Layout><RulesInModal /></Layout>} /> */}
            <Route exact path="/404" render={() => <Layout><NotFound /></Layout>} />
            <Route exact path="/500" render={() => <Layout><ServerError /></Layout>} />
            <Route exact path="/defaultRules.json" />
            <Route path="*" render={() => <Layout><NotFound /></Layout>} />
        </Switch>
    </Router>
)

export default Routing