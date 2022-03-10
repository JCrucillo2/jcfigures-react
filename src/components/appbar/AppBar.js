import React from "react";

// icons
import * as IoIcons from "react-icons/io5";

// ui
import { IconButton } from "ui/buttons";

// styles
import {
    AppBarStyles,
    AppBarItems,
    AppBarItem,
    AppBarItemGroup,
} from "./styles";

function AppBar(props) {
    return (
        <>
            <AppBarStyles>
                <AppBarItems>
                    <AppBarItem>
                        <h1>JCFigures</h1>
                    </AppBarItem>
                    <AppBarItemGroup>
                        <IconButton>
                            <IoIcons.IoMailOutline
                                size="1.5rem"
                                color="orange"
                            />
                        </IconButton>
                        <IconButton>
                            <IoIcons.IoNotificationsOutline
                                size="1.5rem"
                                color="orange"
                            />
                        </IconButton>
                        <IconButton>
                            <img
                                src="https://avatars.dicebear.com/api/initials/JC.svg?r=50&size=30&backgroundColors[]=orange"
                                alt="jc"
                            />
                        </IconButton>
                        <IconButton>
                            <IoIcons.IoEllipsisVertical
                                size="1.25rem"
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
