import styled from "styled-components";
import { lightColor, themeColor } from "styles/variables";

const ProductPreviewStyles = styled.div`
    padding: 2rem;
    background-color: rgba(36, 31, 94, 0.8);
    border-radius: 5px;
    display: flex;
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
    }
`;

const ProductInformation = styled.div`
    padding: 1rem;
    width: 320px;
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
`;

export {
    ProductPreviewStyles,
    ProductImage,
    ProductInformation,
    ProductName,
    ProductPrice,
    ProductDescription,
};
