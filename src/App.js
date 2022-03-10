import { DashBoardPage, PageNotFound, LoginPage } from "./pages";
import { AddProductPanel, AllProductsPanel } from "components/panels";
import React from "react";

// react router
import { Routes, Route } from "react-router-dom";

// pages

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="dashboard" element={<DashBoardPage />}>
                    <Route
                        index
                        element={<AllProductsPanel title="All Products" />}
                    />
                    <Route
                        path="add"
                        element={<AddProductPanel title="Add New Product" />}
                    />
                </Route>
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </>
    );
}

export default App;