import React from "react";

// ui
import { DeleteBtn, EditProductBtn } from "ui/buttons";

// styles
import {
    ProductPreviewStyles,
    ProductImage,
    ProductName,
    ProductPrice,
    ProductDescription,
    EditorSection,
} from "./styles";

function ProductPreview({
    children,
    productName,
    productPrice,
    productDescription,
    productImage,
    ...props
}) {
    return (
        <ProductPreviewStyles {...props}>
            <ProductName>{productName}</ProductName>
            <ProductPrice>${productPrice}</ProductPrice>
            <ProductImage>
                <img
                    src={productImage.previewImage}
                    alt={productName}
                    width="320"
                    heigt="184"
                />
            </ProductImage>
            <ProductDescription>{productDescription}</ProductDescription>
            <EditorSection>
                <EditProductBtn>Edit</EditProductBtn>
                <DeleteBtn>Delete</DeleteBtn>
            </EditorSection>
        </ProductPreviewStyles>
    );
}

export default ProductPreview;
