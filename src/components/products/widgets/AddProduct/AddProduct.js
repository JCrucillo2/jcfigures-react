// react
import React, { useState } from "react";

// hooks
import { useNumberFormat } from "hooks/useNumberFormat";
import { useAddNewProduct } from "hooks/useAddNewProduct";

// styles
import { AddProductStyles } from "./styles";

// product imports
import { ProductEditor } from "components/products/ProductEditor";
import { EditorFeedBack } from "components/products/EditorFeedBack";

// placeholder img
import ProductPreview from "assets/images/luigi.jpeg";

const defaults = {
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste quo non voluptatum eaque. Ducimus reiciendis eligendi delectus saepe repellat vero impedit voluptates! Atque vel dolor sit veniam porro eos ipsa!`,
    name: "Product Name",
    price: 150.99,
};

function AddProduct({ children, ...props }) {
    const [isWriting, setIsWriting] = useState(false);
    const [productName, setProductName] = useState(defaults.name);
    const [productPrice, setProductPrice] = useState(defaults.price);
    const [productImage, setProductImage] = useState({
        previewImage: ProductPreview,
        file: null,
    });
    const [productDescription, setProductDescription] = useState(
        defaults.description
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
        setProductImage({ previewImage: ProductPreview, file: null });
        setProductName(defaults.name);
        setProductPrice(defaults.price);
        setProductDescription(defaults.description);
    }

    if (isWriting) {
        return (
            <EditorFeedBack status={loading} writeCompleted={setIsWriting} />
        );
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
