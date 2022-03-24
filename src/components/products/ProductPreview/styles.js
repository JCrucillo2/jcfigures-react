import styled from "styled-components";
import { lightColor, themeColor } from "styles/variables";

const ProductPreviewStyles = styled.div`
    padding: 2rem;
    background-color: rgba(36, 31, 94, 0.7);
    border-radius: 5px;
    width: 360px;
    /* display: flex; */
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
    ProductPreviewStyles,
    ProductImage,
    ProductName,
    ProductPrice,
    ProductDescription,
    BuySection,
};
