import { AppBar } from "components/appbar";
import { SideBar } from "components/sidebar";
import React, { useState } from "react";

// firebase
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "libs/firebase";

// react router
import { Outlet, useNavigate } from "react-router-dom";

// styles
import { DashBoardPageStyles } from "./styles";

function DashBoardPage(props) {
    const [isUser, setIsUser] = useState(false);
    const navigator = useNavigate();

    onAuthStateChanged(auth, (user) => {
        if (user) {
            setIsUser(true);
        } else {
            setIsUser(false);
            navigator("/");
        }
    });

    if (isUser) {
        return (
            <>
                <AppBar />
                <DashBoardPageStyles>
                    <SideBar />
                </DashBoardPageStyles>
            </>
        );
    } else {
        return null;
    }
}

export default DashBoardPage;
