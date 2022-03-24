import styled from "styled-components";
import { alternateThemeColor, themeColor } from "styles/variables";

const ProductDataEntryFormStyles = styled.form`
    width: 380px;
`;

const ProductImage = styled.div``;

const ProductName = styled.div``;

const ProductPrice = styled.div``;

const ProductDescription = styled.div`
    textarea {
        resize: none;
        font-size: 14px;
    }
`;

const ProductSubmit = styled.div`
    button {
        transition: all 0.2s ease-in-out;
        &:hover {
            background-color: ${alternateThemeColor};
            color: ${themeColor};
        }
    }
`;

export {
    ProductDataEntryFormStyles,
    ProductImage,
    ProductName,
    ProductPrice,
    ProductDescription,
    ProductSubmit,
};
