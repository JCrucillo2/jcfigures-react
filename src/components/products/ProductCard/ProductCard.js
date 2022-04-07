import React from "react";

// ui
import { DeleteBtn, EditProductBtn } from "ui/buttons";

import {
    ProductCardStyles,
    ProductView,
    ProductImage,
    ProductName,
    ProductPrice,
    ProductDescription,
    EditorSection,
} from "./styles";

function ProductCard({ children, product, ...props }) {
    const { productName, productPrice, imageUrl, productDescription } = {
        ...product,
    };

    return (
        <ProductCardStyles {...props}>
            <ProductView>
                <ProductName>{productName}</ProductName>
                <ProductPrice>${productPrice}</ProductPrice>
                <ProductImage>
                    <img
                        src={imageUrl}
                        alt={productName}
                        width="320"
                        height="184"
                    />
                </ProductImage>
                <ProductDescription>{productDescription}</ProductDescription>
                <EditorSection>
                    <EditProductBtn>Edit</EditProductBtn>
                    <DeleteBtn>Delete</DeleteBtn>
                </EditorSection>
            </ProductView>
        </ProductCardStyles>
    );
}

export default ProductCard;
