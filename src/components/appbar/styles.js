import styled from "styled-components";

const AppBarStyles = styled.nav`
    position: relative;
    padding: 0.5rem 2rem 0.5rem 3rem;
    box-shadow: 0 0 2px 1px grey;
    background-color: ${(props) => props.bg || "transparent"};
`;

const AppBarItems = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const AppBarItem = styled.li``;

const AppBarItemGroup = styled.li`
    display: flex;
    gap: 0.75rem;
`;

export { AppBarStyles, AppBarItem, AppBarItems, AppBarItemGroup };
