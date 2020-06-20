import React, { Component } from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import './App.scss'
import 'materialize-css'
import { IndexPage } from "./pages/IndexPage";

function App () {
    // const routes = useRoutes(false)
    return (
        <Router >
            <Switch>
                <Route path="/" >
                    <IndexPage />
                </Route>
            </Switch>
        </Router>
    )
}

export default App