import { DashBoardPage, PageNotFound, LoginPage } from "./pages";
import React from "react";

// react router
import { Routes, Route } from "react-router-dom";

// pages

function App() {
    return (
        <>
            <Routes>
                <Route index element={<LoginPage />} />
                <Route path="dashboard" element={<DashBoardPage />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </>
    );
}

export default App;
