import React from "react";
import ReactDOM from "react-dom";
import HEADER from "./header";
import MyComponent from "./component";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { db } from "./firebase";

ReactDOM.render(
    <>
        <BrowserRouter>
        <HEADER />
            <Routes>
                <Route path="/" exact element={<HEADER />} />
                <Route path="component" element={<MyComponent />} />
            </Routes>
        </BrowserRouter>
    </>
    , document.getElementById("root"));


