import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useLocation } from "react-router-dom";

import Login from "../pages/login";
import Detector from "../pages/detector";
import About from "../pages/about/";
import Groups from "../pages/groups/";
import Page404 from "../pages/404/";
import Profile from "../pages/Profile/";
import ProfileNews from "../pages/Profile/news/index";
import Suggestions from "../pages/Suggestions/";

const authorization = localStorage.getItem("qwert");

function routes() {
    function HeaderView() {
        //verifica se é no detector para nao deixar baixar a pagina
        const location = useLocation();
        return `${location.pathname}`;
    }

    if (HeaderView() === "/detector") {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "visible";
    }

    return (
        <Switch>
            {authorization && (
                <>
                    <Route path="/" exact component={Login} /> {/* Desbugando hide refresh */}
                    <Route path="/login" exact component={Login} /> {/* Desbugando hide refresh */}
                    <Route path="/lostaccount" exact component={Login} /> {/* Desbugando hide refresh */}
                    <Route path="/createaccount" exact component={Login} /> {/* Desbugando hide refresh */}
                    <Route path="/detector" exact component={Detector} />
                    <Route path="/about" exact component={About} />
                    <Route path="/groups" exact component={Groups} />
                    <Route path="/profile" exact component={Profile} />
                    <Route
                        path="/profile/:id"
                        exact
                        render={(props) => (
                            <ProfileNews
                                {...props}
                                content={props.history.location.state.content}
                                date={props.history.location.state.date}
                                isFakeNews={props.history.location.state.isFakeNews}
                            />
                        )}
                    />
                    <Route path="/suggestions" exact component={Suggestions} />
                    {/* <Route component={Page404} /> */}
                </>
            )}
            {!authorization && (
                <>
                    <Redirect to="/login" />
                    <Route path="/login" exact component={Login} />
                </>
            )}
        </Switch>
    );
}

export default routes;
