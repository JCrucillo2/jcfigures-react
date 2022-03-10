import styled from "styled-components";
import { lightColor, themeColor } from "styles/variables";

const SideBarStyles = styled.aside`
    width: 289px;
    box-shadow: 2px 0 4px -2px grey;
    padding: 3rem;
    background-color: ${themeColor};
`;

const SideBarHeader = styled.header`
    color: ${lightColor};
    display: flex;
    align-items: center;
    gap: 1.5rem;
    h2 {
        font-size: 1.125rem;
    }
    svg {
        color: ${lightColor};
        vertical-align: middle;
    }
`;

export { SideBarStyles, SideBarHeader };
