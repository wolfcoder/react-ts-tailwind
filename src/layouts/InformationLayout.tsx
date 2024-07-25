import React from "react";
import TabContent from "../components/TabContent";
import { NavLink, Outlet } from "react-router-dom";
import routes from "../router";
import MainContent from "../components/MainContent";

const InformationLayout = () => {
    const tabs = routes.routes[1]?.children[0]?.children ?? [];

    const getNavLinkClass = (isActive: boolean) =>
        isActive ?
            'text-VINBlueMiddle border-b-VINBlueMiddle border-b-4 mr-14 cursor-pointer font-semibold text-sm' :
            'text-VINBlue border-b-none border-b-0 mr-14 cursor-pointer font-semibold text-sm';

    return (
        <TabContent>
            <nav className="flex -mb-px border-b pb-4">
                {tabs.map((tab: { id: string, path?: string, name?: string }) => (
                    <NavLink
                        key={tab.id}
                        to={tab.path ?? ''}
                        className={({ isActive }) => getNavLinkClass(isActive)}
                    >
                        {tab.name ?? ''}
                    </NavLink>
                ))}
            </nav>
            <MainContent>
                <Outlet />
            </MainContent>
        </TabContent>
    );
};

export default InformationLayout;