import React from "react";

// product imports
import { ProductDataEntryForm } from "../ProductDataEntryForm";
import { ProductPreview } from "../ProductPreview";

// styles
import { ProductEditorStyles } from "./styles";

function ProductEditor({
    children,
    productName,
    productPrice,
    productImage,
    productDescription,
    handleProductName,
    handleProductPrice,
    handleProductDescription,
    setProductImage,
    handleSubmit,
    ...props
}) {
    return (
        <ProductEditorStyles {...props}>
            <ProductDataEntryForm
                handleProductName={handleProductName}
                handleProductPrice={handleProductPrice}
                handleProductDescription={handleProductDescription}
                setProductImage={setProductImage}
                handleSubmit={handleSubmit}
            />
            <ProductPreview
                productName={productName}
                productPrice={productPrice}
                productDescription={productDescription}
                productImage={productImage}
            />
        </ProductEditorStyles>
    );
}

export default ProductEditor;
