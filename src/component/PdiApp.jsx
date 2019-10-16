import React, {Component} from 'react';
import ListUsersComponent from './ListUsersComponent';
import UserComponent from './UserComponent';
import { Route, Switch } from 'react-router';

class PdiApp extends Component {
    render() {
        return(
            // <Router>
                <>
                    <h1>Pdi MMIXX Application</h1>
                    <Switch>
                        <Route path="/" exact component={ListUsersComponent} />
                        <Route path="/users" exact component={ListUsersComponent} />
                        <Route path="/courses/:id" component={UserComponent} />
                    </Switch>
                </>
            // </Router>
        )
    }
}
export default PdiApp