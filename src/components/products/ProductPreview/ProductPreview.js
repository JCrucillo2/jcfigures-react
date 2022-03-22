import React from "react";
import { AddToCartBtn, BuyProductBtn } from "ui/buttons";

import * as IoIcons from "react-icons/io5";

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
    productImage,
    ...props
}) {
    return (
        <ProductPreviewStyles {...props}>
            <ProductName>{productName}</ProductName>
            <ProductPrice>${productPrice}</ProductPrice>
            <ProductImage>
                <img
                    src={productImage}
                    alt="placeholder"
                    width="320"
                    heigt="184"
                />
            </ProductImage>
            <ProductDescription>
                Zombie ipsum reversus ab viral inferno, nam rick grimes malum
                cerebro. De carne lumbering animata corpora quaeritis. Summus
                brains sit​​, morbo vel maleficia? De apocalypsi gorger omero
                undead survivor dictum mauris. Hi mindless mortuis soulless
                creaturas, imo evil stalking monstra adventus resi dentevil
                vultus comedat cerebella viventium.
            </ProductDescription>
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
