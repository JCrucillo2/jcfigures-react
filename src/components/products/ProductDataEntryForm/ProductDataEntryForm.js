import React from "react";

import {
    ProductDataEntryFormStyles,
    ProductImage,
    ProductName,
    ProductPrice,
    ProductDescription,
} from "./styles";
import { ProductImageDropBox } from "../ProductImageDropBox";
import { Label } from "ui/forms/label";
import { Input } from "ui/forms/input";
import { TextArea } from "ui/forms/textarea";

function ProductDataEntryForm({
    children,
    handleProductName,
    handleProductPrice,
    setProductImage,
    ...props
}) {
    return (
        <ProductDataEntryFormStyles {...props}>
            <ProductImage>
                <p>Product Image</p>
                <ProductImageDropBox setProductImage={setProductImage} />
            </ProductImage>

            <ProductName>
                <Label>Product Name</Label>
                <Input
                    onChange={(e) => handleProductName(e.target.value.trim())}
                    maxLength={30}
                />
            </ProductName>

            <ProductPrice>
                <Label>Product Price</Label>
                <Input
                    onChange={(e) => handleProductPrice(e.target.value.trim())}
                    maxLength={8}
                />
            </ProductPrice>

            <ProductDescription>
                <Label>Product Description</Label>
                <TextArea rows="8" />
            </ProductDescription>
        </ProductDataEntryFormStyles>
    );
}

export default ProductDataEntryForm;
