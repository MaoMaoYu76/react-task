import React from "react";
import HOME from "./home";
import LIST from "./list";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";

function APP(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<HOME />} />
                <Route path="/list" element={<LIST />} />
                <Route path="*" element={<HOME />} />
            </Routes>
        </BrowserRouter>
    );}

export default APP



