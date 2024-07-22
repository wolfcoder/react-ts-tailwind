import React from "react";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";

const routes = [
    {
        path: "/",
        element: <HomePage />,
        errorElement: <ErrorPage/>
    },
    {
        path: "/about",
        element: (
            <div> about</div>
        )
    }
];

const router = createBrowserRouter(
    routes
);
export default router;