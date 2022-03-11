import styled from "styled-components";
import { alternateThemeColor, fontHeading, themeColor } from "styles/variables";

const AppBarStyles = styled.nav`
    position: relative;
    box-shadow: 0 0 2px 1px grey;
    background-color: ${(props) => props.bg || "transparent"};
`;

const AppBarItems = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const AppBarItem = styled.li`
    h1 {
        font-family: ${fontHeading};
        font-size: 2rem;
        color: ${alternateThemeColor};
        width: 289px;
        text-align: center;
        background-color: ${themeColor};
        padding: 0.625rem;
    }
`;

const AppBarItemGroup = styled.li`
    display: flex;
    gap: 0.75rem;
    margin-right: 1.5rem;
`;

export { AppBarStyles, AppBarItem, AppBarItems, AppBarItemGroup };
