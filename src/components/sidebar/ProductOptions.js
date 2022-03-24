import React from "react";

// react-router
import { Link } from "react-router-dom";

// react-icons
import * as MdIcons from "react-icons/io";

// styles
import styled from "styled-components";
import { alternateThemeColor, themeColor } from "styles/variables";

const ProductOptionStyles = styled.ul`
    li {
        margin-bottom: 0.25rem;
        a {
            font-size: 14px;
            color: ${alternateThemeColor};
            text-decoration: none;
            display: inline-block;
            padding: 0.5rem;
            transition: all 0.2s ease-in-out;
            &:hover {
                background-color: ${alternateThemeColor};
                color: ${themeColor};
                border-radius: 5px;
            }
        }
    }

    h3 {
        font-weight: 700;
    }
`;

function ProductOptions(props) {
    return (
        <>
            <ProductOptionStyles>
                <h3>Products</h3>
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
