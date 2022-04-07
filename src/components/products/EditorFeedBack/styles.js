import styled from "styled-components";
import { alternateThemeColor, themeColor } from "styles/variables";

const EditorFeedBackStyles = styled.div`
    width: 80%;
    margin: 4rem auto 0;
    text-align: center;
`;

const FeedBackMessage = styled.div`
    font-size: 1.75rem;
    font-weight: 600;
    color: ${alternateThemeColor};
    margin-top: 1rem;
`;

const FeedBack = styled.div``;

const FeedBackOption = styled.footer`
    margin-top: 1.5rem;
    button {
        width: fit-content;
        margin: 0.25rem;
        transition: all 0.2s ease-in-out;
        &:hover {
            background-color: ${alternateThemeColor};
            color: ${themeColor};
        }
    }
`;

export { EditorFeedBackStyles, FeedBackMessage, FeedBack, FeedBackOption };
