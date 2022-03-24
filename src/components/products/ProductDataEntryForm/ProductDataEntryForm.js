import React from "react";

import {
    ProductDataEntryFormStyles,
    ProductImage,
    ProductName,
    ProductPrice,
    ProductDescription,
    ProductSubmit,
} from "./styles";
import { ProductImageDropBox } from "../ProductImageDropBox";
import { Label } from "ui/forms/label";
import { Input } from "ui/forms/input";
import { Button } from "ui/buttons";
import { TextArea } from "ui/forms/textarea";

function ProductDataEntryForm({
    children,
    handleProductName,
    handleProductPrice,
    handleProductDescription,
    setProductImage,
    handleSubmit,
    ...props
}) {
    return (
        <ProductDataEntryFormStyles {...props} onSubmit={handleSubmit}>
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
                <TextArea
                    rows="8"
                    onChange={(e) =>
                        handleProductDescription(e.target.value.trim())
                    }
                    maxLength={300}
                />
            </ProductDescription>

            <ProductSubmit>
                <Button
                    type="submit"
                    bg="orange"
                    color="241f5e"
                    padding="0.75rem 0"
                >
                    Add Product
                </Button>
            </ProductSubmit>
        </ProductDataEntryFormStyles>
    );
}

export default ProductDataEntryForm;
