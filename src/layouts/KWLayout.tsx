import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import ThePageHeader from "../components/ThePageHeader";

function KWLayout() {
    const tabs = [
        { id: 1, name: "Information", path: "/keyword-info/information/VINcyclopedia" },
        { id: 2, name: "Clinical Case", path: "/keyword-info/clinical-case" },
        { id: 3, name: "Related Topics", path: "/keyword-info/related-topics" },
    ];

    return (
        <>
            <ThePageHeader />
            <div className="mx-6 ">
                <nav className="flex -mb-px z-0">
                    {tabs.map((tab) => (
                        <NavLink
                            key={tab.id}
                            to={tab.path}
                            className={({ isActive }) => (isActive ?
                                'bg-white text-VINLink  border-[#6CACE4] border-b-0 px-4 md:px-7 mr-0.5 py-2 rounded-t-md cursor-pointer font-semibold border-2 text-sm' :
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