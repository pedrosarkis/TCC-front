import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Login from "../pages/login/switchPages/login/index";
import CreateAccount from "../pages/login/switchPages/createAccount/index";
import LostAccount from "../pages/login/switchPages/LostAccount/index";

function routes() {
    return (
        <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/login" exact component={Login} />
            <Route path="/lostaccount" exact component={LostAccount} />
            <Route path="/createaccount" exact component={CreateAccount} />
        </Switch>
    );
}

export default routes;
