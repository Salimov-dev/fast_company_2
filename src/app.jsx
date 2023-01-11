import React from "react";
import NavBar from "./components/UI/navBar";
import Users from "./layouts/users";
import { Route, Switch, Redirect } from "react-router-dom";
import Main from "./layouts/main";
import Login from "./layouts/login";
import UserEditPage from "./components/page/userEditPage/userEditPage";

const App = () => {
    return (
        <>
            <NavBar />
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/users/:userId?/edit" component={UserEditPage} />
                <Route path="/users/:userId?" component={Users} />
                <Route path="/users/:type?" component={Users} />
                <Route exact path="/" component={Main} />
                <Redirect to="/" />
            </Switch>
        </>
    );
};

export default App;
