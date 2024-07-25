import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import ThePageHeader from "../components/ThePageHeader";
import routes from "../router";

function KWLayout() {
    const tabs = [
        { id: 1, name: "Information", path: "/keyword-info/information" },
        { id: 2, name: "Clinical Case", path: "/keyword-info/clinical-case" },
        { id: 3, name: "Related Topics", path: "/keyword-info/related-topics" },
    ];
    // const tabs = routes.routes[1]?.children ?? [];

    return (
        <>
            <ThePageHeader />
            <div className="mx-6 ">
                <nav className="flex">
                    {tabs.map((tab) => (
                        <NavLink
                            key={tab.id}
                            to={tab.path}
                            className={({ isActive }) => (isActive ?
                                'bg-white text-VINBlueMiddle  border-[#6CACE4] border-b-0 px-4 md:px-7 mr-0.5 py-2 rounded-t-md cursor-pointer font-semibold border-2 text-sm' :
                                'bg-[#f7f7f7] hover:bg-[#B6ADA5] hover:border-[#B6ADA5] text-VINBlue border-b-[#6CACE4] border-[#d6d2cb] border-b-2 px-4 md:px-7 mr-0.5 py-2 rounded-t-md cursor-pointer font-semibold border-2 text-sm')}
                        >
                            {tab.name}
                        </NavLink>
                    ))}
                </nav >
                <Outlet />
            </div>

        </>
    );
}

export default KWLayout;