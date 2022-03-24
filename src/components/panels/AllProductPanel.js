import React from "react";

// styles
import {
    PanelStyles,
    PanelBody,
    PanelHeader,
    PanelContentSample,
    ProductView,
    ProductImage,
    ProductName,
    ProductPrice,
    ProductDescription,
    BuySection,
} from "./styles";

// ui
import { AddToCartBtn, BuyProductBtn } from "ui/buttons";

// react-icons
import * as IoIcons from "react-icons/io5";

// preview image
import ProductPreview from "assets/images/luigi.jpeg";

function AllProductPanel({ title, ...props }) {
    return (
        <>
            <PanelStyles>
                <PanelHeader>
                    <h2>{title || "Display Panel"}</h2>
                </PanelHeader>
                <PanelBody>
                    <PanelContentSample>
                        {/* sample product card */}
                        <ProductView>
                            <ProductName>Product Name</ProductName>
                            <ProductPrice>$100.99</ProductPrice>
                            <ProductImage>
                                <img
                                    src={ProductPreview}
                                    alt="placeholder"
                                    width="320"
                                    height="184"
                                />
                            </ProductImage>
                            <ProductDescription>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Error iusto quo dolores
                                laboriosam at, quibusdam tempora pariatur
                                aliquid tenetur eaque sit laudantium vel,
                                dolorum voluptas, doloremque nihil vitae minima
                                odit.
                            </ProductDescription>
                            <BuySection>
                                <BuyProductBtn>Buy</BuyProductBtn>
                                <AddToCartBtn>
                                    <IoIcons.IoCartOutline size={25} />
                                </AddToCartBtn>
                            </BuySection>
                        </ProductView>

                        <ProductView>
                            <ProductName>Product Name</ProductName>
                            <ProductPrice>$142.69</ProductPrice>
                            <ProductImage>
                                <img
                                    src={ProductPreview}
                                    alt="placeholder"
                                    width="320"
                                    height="184"
                                />
                            </ProductImage>
                            <ProductDescription>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Error iusto quo dolores
                                laboriosam at, quibusdam tempora pariatur
                                aliquid tenetur eaque sit laudantium vel,
                                dolorum voluptas, doloremque nihil vitae minima
                                odit.
                            </ProductDescription>
                            <BuySection>
                                <BuyProductBtn>Buy</BuyProductBtn>
                                <AddToCartBtn>
                                    <IoIcons.IoCartOutline size={25} />
                                </AddToCartBtn>
                            </BuySection>
                        </ProductView>
                        {/* end sample product card */}
                    </PanelContentSample>
                </PanelBody>
            </PanelStyles>
        </>
    );
}

export default AllProductPanel;
