import React from "react";

// ui
import { ButtonAdd } from "ui/buttons";

// react icons
import * as BsIcons from "react-icons/bs";

// styles
import { PanelStyles, PanelBody, PanelHeader } from "./styles";

function AllProductPanel({ title, ...props }) {
    return (
        <>
            <PanelStyles>
                <PanelHeader>
                    <h2>{title || "Display Panel"}</h2>
                </PanelHeader>
                <PanelBody>
                    <ButtonAdd>
                        <BsIcons.BsPlusCircle size="25px" />
                        <span>Add Product</span>
                    </ButtonAdd>
                </PanelBody>
            </PanelStyles>
        </>
    );
}

export default AllProductPanel;
