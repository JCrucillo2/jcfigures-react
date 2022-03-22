import React from "react";

import {
    ProductPreviewStyles,
    ProductImage,
    ProductInformation,
    ProductName,
    ProductPrice,
    ProductDescription,
} from "./styles";
import PlaceHolderImage from "assets/images/luigi.jpeg";

function ProductPreview({ children, ...props }) {
    return (
        <ProductPreviewStyles {...props}>
            <ProductImage>
                <img src={PlaceHolderImage} alt="placeholder" />
            </ProductImage>
            <ProductInformation>
                <ProductName>Luigi Figure</ProductName>
                <ProductPrice>$0.00</ProductPrice>
                <ProductDescription>
                    Zombie ipsum reversus ab viral inferno, nam rick grimes
                    malum cerebro. De carne lumbering animata corpora quaeritis.
                    Summus brains sit​​, morbo vel maleficia? De apocalypsi
                    gorger omero undead survivor dictum mauris. Hi mindless
                    mortuis soulless creaturas, imo evil stalking monstra
                    adventus resi dentevil vultus comedat cerebella viventium.
                </ProductDescription>
            </ProductInformation>
        </ProductPreviewStyles>
    );
}

export default ProductPreview;
