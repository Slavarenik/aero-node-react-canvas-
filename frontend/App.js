import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.scss'
import 'materialize-css'
import { IndexPage } from "./pages/IndexPage";
import { GamePage } from "./pages/GamePage";
import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:4000');

socket.on('mess', response => console.log(response));

export const App = () => {
    return (
        <GamePage />
    )
}