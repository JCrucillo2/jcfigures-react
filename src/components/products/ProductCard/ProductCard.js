import React from "react";

// ui
import { AddToCartBtn, BuyProductBtn } from "ui/buttons";

// react-icons
import * as IoIcons from "react-icons/io5";

import {
    ProductCardStyles,
    ProductView,
    ProductImage,
    ProductName,
    ProductPrice,
    ProductDescription,
    BuySection,
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
                        alt="placeholder"
                        width="320"
                        height="184"
                    />
                </ProductImage>
                <ProductDescription>{productDescription}</ProductDescription>
                <BuySection>
                    <BuyProductBtn>Buy</BuyProductBtn>
                    <AddToCartBtn>
                        <IoIcons.IoCartOutline size={25} />
                    </AddToCartBtn>
                </BuySection>
            </ProductView>
        </ProductCardStyles>
    );
}

export default ProductCard;
