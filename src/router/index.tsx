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
        // errorelement: <ErrorPage />
    },
    {
        path: "keyword-info",
        id: "keywordinfo",
        element: <KWLayout />,
        children: [{
            name: "Information",
            path: "information",
            id: "information",
            element: <InformationLayout />,
            children: [
                {
                    name: "VINcyclopedia", path: "/keyword-info/information/VINcyclopedia", element: (<h2>VINcyclopedia</h2>),
                    
                },
                { name: "Images", path: "/keyword-info/information/images", element: (<h2>Images</h2>) },
                { name: "Client Ed", path: "/keyword-info/information/client-ed", element: <h2>Client Ed</h2> },
                { name: "Videos", path: "/keyword-info/information/videos" },
                { name: "Medical FAQs", path: "/keyword-info/information/medical-faqs" },
                { name: "Rounds", path: "/keyword-info/information/rounds" },
                { name: "Proceedings", path: "/keyword-info/information/proceedings" },
                { name: "More", path: "/keyword-info/information/more" }
            ]
        },
        {
            name: "Clinical Case",
            path: "clinical-case",
            element: <ClinicalCasesLayout />
        },
        {
            name: "Related Topics",
            path: "related-topics",
            element: <RelatedTopicsLayout />
        }

    ]
    }
];

const router = createBrowserRouter(
    routes
);


export default router;