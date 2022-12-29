import React from "react";
import NavBar from "./components/navBar";
import Users from "./layouts/users";
import { Route, Switch, Redirect } from "react-router-dom";
import Main from "./layouts/main";
import Login from "./layouts/login";

const App = () => {
    return (
        <>
            <NavBar />
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/users/:userId?" component={Users} />
                <Route exact path="/" component={Main} />
                <Redirect to="/" />
            </Switch>
        </>
    );
};

export default App;
