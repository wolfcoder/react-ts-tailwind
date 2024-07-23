import React, { Children } from "react";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import KWLayout from "../layouts/KWLayout";
import InformationLayout from "../layouts/InformationLayout";
import ClinicalCasesLayout from "../layouts/ClinicalCasesLayout";
import RelatedTopicsLayout from "../layouts/RelatedTopicsLayout";

const routes = [
    {
        path: "/",
        element: <HomePage />,
        // errorElement: <ErrorPage />
    },
    {
        path: "keyword-info",
        id: "keywordinfo",
        element: <KWLayout />,
        children: [{
            path: "information",
            id: "information",
            element: <InformationLayout />,
            children: [
                {path: "VINcyclopedia", element: (<h2>VINcyclopedia</h2>)},
                { path: "images", element: (<h2>Images</h2>) },
                { path: "videos", element: (<h2>Videos</h2>) }
            ]
        },
        {
            path: "clinical-case",
            element: <ClinicalCasesLayout/>
        },
        {
            path: "related-topics",
            element: <RelatedTopicsLayout/>
        }]
    }
];

const router = createBrowserRouter(
    routes
);
export default router;