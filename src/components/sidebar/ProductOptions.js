import React from "react";
import { Link } from "react-router-dom";
import * as MdIcons from "react-icons/io";
import styled from "styled-components";

const ProductOptionStyles = styled.ul`
    a {
        font-size: 14px;
    }
`;

function ProductOptions(props) {
    return (
        <>
            <ProductOptionStyles>
                <li>
                    <Link to="/dashboard">
                        <MdIcons.IoMdArrowDropright />
                        View All Products
                    </Link>
                </li>
                <li>
                    <Link to="add">
                        <MdIcons.IoMdArrowDropright />
                        Add New Product
                    </Link>
                </li>
                <li>
                    <Link to="edit">
                        <MdIcons.IoMdArrowDropright />
                        Edit A Product
                    </Link>
                </li>
            </ProductOptionStyles>
        </>
    );
}

export default ProductOptions;
