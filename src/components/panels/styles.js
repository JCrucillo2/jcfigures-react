import styled from "styled-components";
import { alternateThemeColor, themeColor, lightColor } from "styles/variables";

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

const PanelContentSample = styled.div`
    display: flex;
    gap: 2rem;
`;

// static styles for now
const ProductView = styled.div`
    padding: 2rem;
    background-color: rgba(36, 31, 94, 0.7);
    border-radius: 5px;
    max-width: 360px;
`;

const ProductImage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    img {
        width: 100%;
        height: auto;
        border-radius: 5px;
        margin-bottom: 1rem;
    }
`;

const ProductName = styled.h2`
    font-size: 2.25rem;
    font-weight: 700;
    line-height: 2.5rem;
    letter-spacing: -0.5px;
    color: ${themeColor};
`;

const ProductPrice = styled.p`
    font-size: 2rem;
    font-weight: 100;
    letter-spacing: -1px;
    color: ${lightColor};
    margin-top: -0.3rem;
    margin-bottom: 0.25rem;
`;

const ProductDescription = styled.p`
    font-size: 13px;
    color: ${themeColor};
    margin-bottom: 1rem;
    word-wrap: break-word;
`;

const BuySection = styled.div`
    display: flex;
    gap: 1rem;
`;

export {
    PanelStyles,
    PanelBody,
    PanelHeader,
    PanelContentSample,
    ProductView,
    ProductImage,
    ProductName,
    ProductPrice,
    ProductDescription,
    BuySection,
};
