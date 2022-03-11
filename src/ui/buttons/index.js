import styled from "styled-components";

const {
    lightColor,
    buttonHover,
    alternateThemeColor,
} = require("styles/variables");

const Button = styled.button`
    background-color: ${(props) => props.bg || "transparent"};
    border: ${(props) => props.border || "none"};
    border-radius: ${(props) => props.radius || "5px"};
    margin: ${(props) => props.margin || "0"};
    padding: ${(props) => props.padding || "0.25rem 1.5rem"};
    color: ${(props) => props.color || "grey"};
    font-size: ${(props) => props.fs || "1rem"};
    font-weight: ${(props) => props.fw || "700"};
    cursor: pointer;
`;

const IconButton = styled(Button)`
    padding: 0;
    margin: 0;
`;

const LogInButton = styled(Button)`
    display: block;
    width: 100%;
    text-transform: uppercase;
    letter-spacing: 0ch.5px;
    transition: all 0.2s ease;
    &:hover {
        background: ${alternateThemeColor};
        color: ${lightColor};
    }
`;

const ButtonAdd = styled(Button)`
    background-color: orange;
    color: ${alternateThemeColor};
    padding: 0.5rem 1rem;
    display: flex;
    justify-content: flex-end;
    transition: all 0.2s ease;
    span {
        margin-left: 1rem;
    }
    &:hover {
        background-color: ${alternateThemeColor};
        color: ${lightColor};
    }
`;

export { Button, IconButton, LogInButton, ButtonAdd };
