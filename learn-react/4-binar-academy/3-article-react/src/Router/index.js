import React from "react";
import {Routes, Route} from "react-router-dom"

// pages
import Homepage from "../Pages/Homepage"
import ArticleListPage from "../Pages/ArticleListPage";

function Router() {
    return (
        <Routes>
            <Route path="/" Component={Homepage} />
            <Route path="/posts" Component={ArticleListPage} />
        </Routes>
    )
}

export default Router;