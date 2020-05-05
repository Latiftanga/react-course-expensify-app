import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AddExpensify from '../components/AddExpensify';
import EditExpensify from '../components/EditExpensify';
import Dashboard from '../components/Dashboard';
import Help from '../components/Help';
import Header from '../components/Header';
import NotFound from '../components/NotFound';


const AppRouter = () => (
    <Router>
        <div>
            <Header />
                <Switch>
                <Route path="/create">
                    <AddExpensify/>
                </Route>
                <Route path="/:id/edit">
                    <EditExpensify/>
                </Route>
                <Route path="/help">
                    <Help/>
                </Route>
                <Route path="/" exact>
                    <Dashboard/>
                </Route>
                <Route>
                    <NotFound/>
                </Route>
            </Switch>
        </div>
    </Router>
);
export default AppRouter;