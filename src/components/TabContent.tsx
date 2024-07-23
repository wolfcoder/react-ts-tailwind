import React from "react";

function TabContent({ children }: any) {

    return (
        <>
            <div className="border-[#6CACE4] border-2 -mt-[2px] px-7 py-4">
                {children}
            </div>
        </>
    )
}

export default TabContent;