import styled from "styled-components";
import {
    alternateThemeColor,
    darkColor,
    lightColor,
    themeColor,
} from "styles/variables";

const SideBarStyles = styled.aside`
    width: 289px;
    box-shadow: 2px 0 4px -2px grey;
    padding: 2rem;
    background-color: ${themeColor};
`;

const SideBarDiv = styled.div`
    color: ${alternateThemeColor};
    display: flex;
    align-items: center;
    gap: 1rem;
    border-bottom: ${(props) => props.bb || "none"};
    padding: 1rem 0.5rem;
    transition: 0.1s;
    cursor: pointer;
    h2 {
        font-size: 1.125rem;
        font-weight: 300;
        text-transform: uppercase;
        font-weight: bold;
    }
    svg {
        color: ${alternateThemeColor};
        vertical-align: middle;
    }
    &:hover {
        border-left: 0.3125rem solid ${alternateThemeColor};
    }
`;

export { SideBarStyles, SideBarDiv };
