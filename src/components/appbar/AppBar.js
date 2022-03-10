import React from "react";

// firebase
import { signOut } from "firebase/auth";
import { auth } from "libs/firebase";

// icons
import * as IoIcons from "react-icons/io5";

// ui
import { IconButton } from "ui/buttons";
import { LogInButton } from "ui/buttons";

// styles
import {
    AppBarStyles,
    AppBarItems,
    AppBarItem,
    AppBarItemGroup,
} from "./styles";

function AppBar(props) {
    function onLogoutRequest(e) {
        signOut(auth);
    }

    return (
        <>
            <AppBarStyles>
                <AppBarItems>
                    <AppBarItem>
                        <h1>JCFigures</h1>
                    </AppBarItem>
                    <AppBarItemGroup>
                        <LogInButton
                            bg="orange"
                            color="#212121"
                            padding="0.25rem 0"
                            onClick={onLogoutRequest}
                        >
                            Sign Out
                        </LogInButton>
                        <IconButton>
                            <IoIcons.IoMailOutline size="24px" color="orange" />
                        </IconButton>
                        <IconButton>
                            <IoIcons.IoNotificationsOutline
                                size="24px"
                                color="orange"
                            />
                        </IconButton>
                        <IconButton>
                            <img
                                src="https://avatars.dicebear.com/api/initials/JC.svg?r=50&size=80&backgroundColors[]=orange"
                                alt="jc"
                            />
                        </IconButton>
                        <IconButton>
                            <IoIcons.IoEllipsisVertical
                                size="20px"
                                color="orange"
                            />
                        </IconButton>
                    </AppBarItemGroup>
                </AppBarItems>
            </AppBarStyles>
        </>
    );
}

export default AppBar;
