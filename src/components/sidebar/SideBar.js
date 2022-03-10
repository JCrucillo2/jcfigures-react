import React from "react";

// icons
import * as MdIcons from "react-icons/md";

// styles
import { SideBarStyles, SideBarHeader } from "./styles";

function SideBar(props) {
    return (
        <>
            <SideBarStyles>
                <SideBarHeader>
                    <MdIcons.MdDashboard size="28px" />
                    <h2>DashBoard</h2>
                </SideBarHeader>

                {/* to be added products */}
            </SideBarStyles>
        </>
    );
}

export default SideBar;
