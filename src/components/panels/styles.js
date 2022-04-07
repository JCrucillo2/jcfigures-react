import styled from "styled-components";
import { alternateThemeColor, themeColor } from "styles/variables";

const PanelStyles = styled.section`
    flex: 1;
    box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.3);
    background-color: white;
    border-radius: 3px;
    margin: 1.5rem;
`;

const PanelHeader = styled.header`
    h2 {
        background-color: ${themeColor};
        padding: 1rem 1.5rem;
        border-radius: 3px;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        color: ${alternateThemeColor};
        font-weight: bold;
        font-size: 1.5rem;
    }
`;

const PanelBody = styled.div`
    margin: ${(props) => props.margin || "2rem"};
`;

const PanelControl = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

const NoData = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 12rem;
    width: 100%;
`;

const NoDataMessage = styled.div`
    font-size: 1.75rem;
    font-weight: 600;
    color: ${alternateThemeColor};
    margin-top: 1rem;
    margin-left: 1rem;
`;

export {
    PanelStyles,
    PanelBody,
    PanelHeader,
    PanelControl,
    NoData,
    NoDataMessage,
};
