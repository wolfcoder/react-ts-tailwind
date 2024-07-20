import React from "react";
import { isRouteErrorResponse, useRouteError, Link } from "react-router-dom";


export default function ErrorPage() {
    const error = useRouteError();

    const renderErrorMsg = () => {
        if (isRouteErrorResponse(error)) {
            switch (error.status) {
                case 401:
                    return window.location.replace(
                        `${process.env.REACT_APP_BASE_VIN_DOC_URL}/vinmembers/login/login?ReturnURl=/members/keywordinfo/`
                    );
                case 403:
                    return (
                        <p>
                            Looks like you currently don't have permission to access the
                            keyword info tool. Error returned:{" "}
                            {error.statusText || error.message}
                        </p>
                    );
                case 404:
                    return (
                        <p>
                            Unable to find a page that matches this url. Error returned:{" "}
                            {error.statusText || error.message}
                        </p>
                    );
                case 503:
                    return (
                        <p>
                            Looks like the server is down. Error returned:{" "}
                            {error.statusText || error.message}
                        </p>
                    );
                default:
                    return (
                        <p>Response error returned: {error.statusText || error.message}</p>
                    );
            }
        } else {
            return <p>Error returned: {error.statusText || error.message}</p>;
        }
    };
    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an error has occurred.</p>
            <div>
                To start over click here: <div><Link to="/">Back to the start page to enter a term</Link></div>
            </div>
            <div>
                <br></br>
                <h3>Error messages:</h3>
                {/* {renderErrorMsg()} */}
                <p>
                    {error.status ? `status: ${error.status}; ` : ""}{" "}
                    {error.statusText ? `${error.statusText}; ` : ""}{" "}
                    {error.message ? `msg: ${error.message}; ` : ""}
                </p>
            </div>
        </div>
    );
}
