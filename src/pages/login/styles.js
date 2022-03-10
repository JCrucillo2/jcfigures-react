import styled from "styled-components";
import LoginImage from "assets/darkstar-alternate.jpg";
import { darkColor, themeColor } from "styles/variables";

const SplitScreen = styled.div`
    display: flex;
    flex-direction: column;
    .Toastify__toast {
        background-color: ${themeColor};
        color: ${darkColor};
    }
    .Toastify__progress-bar--error {
        background-color: blue;
    }
    @media screen and (min-width: 900px) {
        flex-direction: row;
        height: 100vh;
    }
`;

const SectionCopy = styled.div`
    color: white;
    text-align: center;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: black;
    text-align: center;
    h2 {
        font-size: 1.5rem;
        font-weight: 700;
    }
    p {
        margin: 1.5rem 0;
        font-size: 0.875rem;
    }
`;

const MainHeading = styled.h1`
    font-size: 2.4rem;
    font-weight: 700;
    @media screen and (min-width: 900px) {
        font-size: 4.8rem;
    }
`;

const Left = styled.div`
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)),
        url(${LoginImage});
    background-size: cover;
    @media screen and (min-width: 900px) {
        display: flex;
        width: 50%;
        height: auto;
    }
`;

const Right = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 2rem;
    @media screen and (min-width: 900px) {
        display: flex;
        width: 50%;
        height: auto;
    }
`;

const SectionFirst = styled.section`
    color: white;
    text-align: center;
    p {
        font-weight: 400;
    }
`;

const Form = styled.form`
    width: 328px;
`;

const InputContainer = styled.div``;

const InputBox = styled.input`
    display: block;
    width: 100%;
    box-sizing: border-box;
    border-radius: 8px;
    border: 1px solid #c4c4c4;
    padding: 1rem;
    margin-bottom: 1.25rem;
    font-size: 0.875rem;
`;

const InputLabel = styled.label`
    display: block;
    margin-bottom: 0.5rem;
    font-size: 0.75rem;
`;

const CheckBoxZone = styled.div`
    display: flex;
    margin-bottom: 1rem;
    p {
        padding-left: 0.5rem;
    }
`;

export {
    SplitScreen,
    Left,
    Right,
    MainHeading,
    SectionFirst,
    Form,
    SectionCopy,
    InputContainer,
    InputLabel,
    InputBox,
    CheckBoxZone,
};
