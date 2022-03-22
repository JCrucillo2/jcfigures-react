import styled from "styled-components";
import { alternateThemeColor } from "styles/variables";

const TextArea = styled.textarea`
    width: ${(props) => props.width || "100%"};
    background-color: rgba(255, 165, 0, 0.3);
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    outline: none;
    margin-bottom: 1rem;
    transition: all 0.2s ease-in-out;
    :focus {
        outline: none !important;
        border-color: ${alternateThemeColor};
        box-shadow: 0 0 10px ${alternateThemeColor};
    }
`;

export { TextArea };
