import React, { useState } from "react";

import { useNumberFormat } from "hooks/useNumberFormat";
import { useAddNewProduct } from "hooks/useAddNewProduct";
import { AddProductStyles } from "./styles";
import { ProductEditor } from "components/products/ProductEditor";
import ProductPreview from "assets/images/luigi.jpeg";

function AddProduct({ children, ...props }) {
    const [isWriting, setIsWriting] = useState(false);
    const [productName, setProductName] = useState("Product Name");
    const [productPrice, setProductPrice] = useState("100.00");
    const [productImage, setProductImage] = useState({
        previewImage: ProductPreview,
        file: null,
    });
    const [productDescription, setProductDescription] = useState(
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste quo non voluptatum eaque. Ducimus reiciendis eligendi delectus saepe repellat vero impedit voluptates! Atque vel dolor sit veniam porro eos ipsa!"
    );
    const [loading, productLoader] = useAddNewProduct();
    const formatter = useNumberFormat();

    function handleProductName(name) {
        setProductName(name);
    }

    function handleProductPrice(price) {
        setProductPrice(formatter(price));
    }

    function handleProductDescription(description) {
        setProductDescription(description);
    }

    function handleSubmit(e) {
        e.preventDefault();

        const productData = {
            productName,
            productPrice,
            productDescription,
        };

        setIsWriting(true);
        productLoader(productData, productImage.file);
    }

    if (isWriting) {
        return <h1>Editor Feedback Component</h1>;
    } else {
        return (
            <AddProductStyles {...props}>
                <ProductEditor
                    productName={productName}
                    productPrice={productPrice}
                    productImage={productImage}
                    productDescription={productDescription}
                    handleProductName={handleProductName}
                    handleProductPrice={handleProductPrice}
                    handleProductDescription={handleProductDescription}
                    setProductImage={setProductImage}
                    handleSubmit={handleSubmit}
                />
            </AddProductStyles>
        );
    }
}

export default AddProduct;
