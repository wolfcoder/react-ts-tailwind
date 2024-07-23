import React from "react";
import TabContent from "../components/TabContent";
import { NavLink, Outlet } from "react-router-dom";

function InformationLayout() {

    const tabs = [
        { id: 1, name: "VINcyclopedia", path: "/keyword-info/information/VINcyclopedia" },
        { id: 2, name: "Images", path: "/keyword-info/information/images" },
        { id: 3, name: "Client Ed", path: "/keyword-info/information/client-ed" },
        { id: 4, name: "Videos", path: "/keyword-info/information/videos" },
        { id: 5, name: "Medical FAQs", path: "/keyword-info/information/medical-faqs" },
        { id: 6, name: "Rounds", path: "/keyword-info/information/rounds" },
        { id: 7, name: "Proceedings", path: "/keyword-info/information/proceedings" },
        { id: 8, name: "More", path: "/keyword-info/information/more" }
    ];


    return (
        <>
            <TabContent>
                <nav className="flex -mb-px border-b pb-6">
                    {tabs.map((tab) => (
                        <NavLink
                            key={tab.id}
                            to={tab.path}
                            className={({ isActive }) => (isActive ?
                                'text-VINBlueHover border-b-none border-b-0 mr-14  cursor-pointer font-semibold  text-sm' :
                                'text-VINBlue border-b-none border-b-0 mr-14 cursor-pointer font-semibold  text-sm')}
                        >
                            {tab.name}
                        </NavLink>
                    ))}
                </nav >
                <Outlet />
            </TabContent>
        </>
    )
}

export default InformationLayout;