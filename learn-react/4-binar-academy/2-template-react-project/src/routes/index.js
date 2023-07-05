import React from "react";
import { Routes, Route } from "react-router-dom";
import '../styles/index.css';

// pages
import App from "../pages/homepage/App"
import CustomerPage from "../pages/customerpages/index"

function Router() {
    return (
        <Routes>
            <Route path="/" Component={App} />
            <Route path="/customer" Component={CustomerPage} />
        </Routes>
    )
}

export default Router;