import styled from "styled-components";
import {
    buttonHover,
    darkColor,
    fontHeading,
    lightColor,
    themeColor,
} from "styles/variables";

const NotFoundArea = styled.div`
    background: orange;
    height: 100vh;
    img {
        width: 250px;
        text-align: center;
    }
`;

const NotFoundContent = styled.section`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    gap: 2rem;
    h1 {
        font-size: 3rem;
        font-family: ${fontHeading};
        color: ${lightColor};
        margin-bottom: 2rem;
    }
`;

const NotFoundSave = styled.div`
    p {
        text-align: center;
        font-size: 6rem;
    }
    a {
        display: block;
        text-align: center;
        background-color: ${buttonHover};
        color: ${lightColor};
        border-radius: 5px;
        padding: 1rem;
        text-decoration: none;
        font-size: 1.75rem;
        transition: all 0.2s ease;
        &:hover {
            background-color: ${darkColor};
            color: ${themeColor};
        }
    }
`;

export { NotFoundArea, NotFoundContent, NotFoundSave };
