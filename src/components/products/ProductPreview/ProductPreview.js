import React from "react";

// ui
import { AddToCartBtn, BuyProductBtn } from "ui/buttons";

// react-icons
import * as IoIcons from "react-icons/io5";

// styles
import {
    ProductPreviewStyles,
    ProductImage,
    ProductName,
    ProductPrice,
    ProductDescription,
    BuySection,
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
                    alt="placeholder"
                    width="320"
                    heigt="184"
                />
            </ProductImage>
            <ProductDescription>{productDescription}</ProductDescription>
            <BuySection>
                <BuyProductBtn>Buy</BuyProductBtn>
                <AddToCartBtn>
                    <IoIcons.IoCartOutline size={25} />
                </AddToCartBtn>
            </BuySection>
        </ProductPreviewStyles>
    );
}

export default ProductPreview;
