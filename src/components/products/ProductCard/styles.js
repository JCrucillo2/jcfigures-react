import styled from "styled-components";
import { themeColor, lightColor } from "styles/variables";

const ProductCardStyles = styled.div`
    margin-bottom: 2rem;
`;

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
    img {
        width: 300px;
        height: 300px;
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
    width: 296px;
    height: 98px;
    word-wrap: break-word;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const EditorSection = styled.div`
    display: flex;
    gap: 1rem;
`;

export {
    ProductCardStyles,
    ProductView,
    ProductImage,
    ProductName,
    ProductPrice,
    ProductDescription,
    EditorSection,
};
