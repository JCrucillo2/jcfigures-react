import React from "react";

// styles
import { PanelStyles, PanelBody, PanelHeader } from "./styles";

function AllProductPanel({ title, ...props }) {
    return (
        <>
            <PanelStyles>
                <PanelHeader>
                    <h2>{title || "Display Panel"}</h2>
                </PanelHeader>
                <PanelBody></PanelBody>
            </PanelStyles>
        </>
    );
}

export default AllProductPanel;
