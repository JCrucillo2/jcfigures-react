import React from "react";

// firebase
import { auth } from "libs/firebase";
import { signOut } from "firebase/auth";

// icons
import * as MdIcons from "react-icons/md";
import * as GiIcons from "react-icons/gi";
import * as BiIcons from "react-icons/bi";
import * as RiIcons from "react-icons/ri";
import * as BsIcons from "react-icons/bs";
import * as CgIcons from "react-icons/cg";

// styles
import { SideBarStyles, SideBarDiv } from "./styles";

// ui
import { LogInButton } from "ui/buttons";

function SideBar(props) {
    function onLogoutRequest(e) {
        signOut(auth);
    }

    return (
        <>
            <SideBarStyles>
                <SideBarDiv bb="1px solid rgba(255,255,255,0.5)">
                    <MdIcons.MdDashboard size="28px" />
                    <h2>Dashboard</h2>
                </SideBarDiv>

                <SideBarDiv>
                    <MdIcons.MdPeopleAlt size="28px" />
                    <h2>Sellers</h2>
                </SideBarDiv>

                <SideBarDiv bb="1px solid rgba(255,255,255,0.5)">
                    <GiIcons.GiCharacter size="28px" />
                    <h2>Users</h2>
                </SideBarDiv>

                <SideBarDiv>
                    <BiIcons.BiCategory size="28px" />
                    <h2>Categories</h2>
                </SideBarDiv>

                <SideBarDiv>
                    <RiIcons.RiProductHuntLine size="28px" />
                    <h2>Products</h2>
                </SideBarDiv>

                <SideBarDiv>
                    <BsIcons.BsCart4 size="28px" />
                    <h2>Orders</h2>
                </SideBarDiv>

                <SideBarDiv>
                    <MdIcons.MdOutlineStarHalf size="28px" />
                    <h2>Reviews</h2>
                </SideBarDiv>

                <SideBarDiv bb="1px solid rgba(255,255,255,0.5)">
                    <MdIcons.MdOutlineGames size="28px" />
                    <h2>Game Publisher</h2>
                </SideBarDiv>

                <SideBarDiv>
                    <CgIcons.CgProfile size="28px" />
                    <h2>Profile</h2>
                </SideBarDiv>

                <SideBarDiv>
                    <MdIcons.MdOutlineInbox size="28px" />
                    <h2>Inbox</h2>
                </SideBarDiv>

                <SideBarDiv bb="1px solid rgba(255,255,255,0.5)">
                    <MdIcons.MdMoney size="28px" />
                    <h2>Funds</h2>
                </SideBarDiv>

                <SideBarDiv bb="1px solid rgba(255,255,255,0.5)">
                    <MdIcons.MdOutlineSupportAgent size="28px" />
                    <h2>Support</h2>
                </SideBarDiv>

                <LogInButton
                    bg="#ffffff"
                    color="#241f5e"
                    padding="0.25rem 0"
                    margin="1rem 0 0 0"
                    onClick={onLogoutRequest}
                >
                    Sign Out
                </LogInButton>

                {/* to be added products */}
            </SideBarStyles>
        </>
    );
}

export default SideBar;
