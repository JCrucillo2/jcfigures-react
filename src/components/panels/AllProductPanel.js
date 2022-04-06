import React from "react";

import { useGetProducts } from "hooks/useGetProduct";

// styles
import { PanelStyles, PanelBody, PanelHeader, PanelControl } from "./styles";
import { ProductCard } from "components/products/ProductCard";

function AllProductPanel({ title, ...props }) {
    const productData = useGetProducts();

    return (
        <>
            <PanelStyles>
                <PanelHeader>
                    <h2>{title || "Display Panel"}</h2>
                </PanelHeader>
                <PanelBody>
                    <PanelControl>
                        {productData ? (
                            productData.map((product) => (
                                <ProductCard
                                    product={product}
                                    key={product.uid}
                                />
                            ))
                        ) : (
                            <p>no data loaded</p>
                        )}
                    </PanelControl>
                </PanelBody>
            </PanelStyles>
        </>
    );
}

export default AllProductPanel;
