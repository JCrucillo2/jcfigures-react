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

function ProductDataEntryForm({ children, ...props }) {
    return (
        <ProductDataEntryFormStyles {...props}>
            <ProductImage>
                <p>Product Image</p>
                <ProductImageDropBox />
            </ProductImage>

            <ProductName>
                <Label>Product Name</Label>
                <Input />
            </ProductName>

            <ProductPrice>
                <Label>Product Price</Label>
                <Input />
            </ProductPrice>

            <ProductDescription>
                <Label>Product Description</Label>
                <TextArea rows="8" />
            </ProductDescription>
        </ProductDataEntryFormStyles>
    );
}

export default ProductDataEntryForm;
