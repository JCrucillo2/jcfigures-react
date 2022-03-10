import React, { useState } from "react";

// react router
import { Link } from "react-router-dom";

// firebase
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "libs/firebase";

// styles
import { NotFoundArea, NotFoundContent, NotFoundSave } from "./styles";

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
            <NotFoundArea>
                <NotFoundContent>
                    <img
                        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a5453dbf-3c70-4fd0-a468-159c2e8279ab/dcn3lfw-a71b55ce-467a-409f-9f6a-b4731314b1af.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2E1NDUzZGJmLTNjNzAtNGZkMC1hNDY4LTE1OWMyZTgyNzlhYlwvZGNuM2xmdy1hNzFiNTVjZS00NjdhLTQwOWYtOWY2YS1iNDczMTMxNGIxYWYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.5nHBwrj2FAcGRfkcVo-lFaZj2C7qGtEBqXyjjcB2F4s"
                        alt="cry it out"
                    />
                    <NotFoundSave>
                        <p>404</p>
                        <h1>Are you lost?</h1>
                        {isUser ? (
                            <Link to="/dashboard">Let's Go Back</Link>
                        ) : (
                            <Link to="/">Let's Go Back</Link>
                        )}
                    </NotFoundSave>
                </NotFoundContent>
            </NotFoundArea>
        </>
    );
}

export default PageNotFound;
