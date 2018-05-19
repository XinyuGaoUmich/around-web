import React from 'react';
import { Register} from "./Register";
import { Login } from "./Login";
import { Home }  from './Home';
import { Switch, Route } from 'react-router';

export class Main extends React.Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Login}/>
                    <Route path="/home" component={Home}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/register" component={Register}/>
                    <Route component={Login}/>
                </Switch>
            </div>
        )
    }
}