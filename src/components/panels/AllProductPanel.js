import React from "react";

// hook get
import { useGetProducts } from "hooks/useGetProduct";

// react icon
import * as FaIcons from "react-icons/fa";

// styles
import {
    PanelStyles,
    PanelBody,
    PanelHeader,
    PanelControl,
    NoData,
    NoDataMessage,
} from "./styles";
import { ProductCard } from "components/products/ProductCard";

// variable color
import { alternateThemeColor } from "styles/variables";

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
                            <NoData>
                                <FaIcons.FaRegSadTear
                                    color={alternateThemeColor}
                                    size="12rem"
                                />
                                <NoDataMessage>
                                    No product available.
                                </NoDataMessage>
                            </NoData>
                        )}
                    </PanelControl>
                </PanelBody>
            </PanelStyles>
        </>
    );
}

export default AllProductPanel;
