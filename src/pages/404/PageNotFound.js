import React, { useState } from "react";

// react router
import { Link } from "react-router-dom";

// firebase
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "libs/firebase";

function PageNotFound() {
    const [isUser, setIsUser] = useState(false);

    onAuthStateChanged(auth, (user) => {
        if (user) {
            setIsUser(true);
        } else {
            setIsUser(false);
        }
    });

    return (
        <>
            <aside>
                <header>
                    <h1>404 | Page Not Found</h1>
                    {isUser ? (
                        <Link to="/dashboard">Back to Safety</Link>
                    ) : (
                        <Link to="/">Back to Safety</Link>
                    )}
                </header>
            </aside>
        </>
    );
}

export default PageNotFound;
