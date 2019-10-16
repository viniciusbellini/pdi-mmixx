import React from 'react';

import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import ListUsersComponent from './component/ListUsersComponent';
import UserComponent from './component/UserComponent';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={ListUsersComponent} />
            <Route path="/users" exact component={ListUsersComponent} />
            <Route path="/courses/:id" component={UserComponent} />
        </Switch>
    </BrowserRouter>
);

export default Routes;