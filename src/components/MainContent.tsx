import React from "react";

function MainContent({ children }: any) {

    return (
        <>
            <div className="py-4">
                {children}
            </div>
        </>
    )
}

export default MainContent;