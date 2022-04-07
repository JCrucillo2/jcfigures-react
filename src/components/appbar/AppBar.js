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
                                size="24px"
                                color="#241f5e"
                            />
                        </IconButton>
                        <IconButton>
                            <IoIcons.IoNotificationsOutline
                                size="24px"
                                color="#241f5e"
                            />
                        </IconButton>
                        <IconButton>
                            <img
                                src="https://avatars.dicebear.com/api/initials/JC.svg?r=50&size=40&backgroundColors[]=orange"
                                alt="jc"
                            />
                        </IconButton>
                        <IconButton>
                            <IoIcons.IoEllipsisVertical
                                size="20px"
                                color="#241f5e"
                            />
                        </IconButton>
                    </AppBarItemGroup>
                </AppBarItems>
            </AppBarStyles>
        </>
    );
}

export default AppBar;
