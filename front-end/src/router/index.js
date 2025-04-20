import ReactDOM from "react-dom/client";
import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "../views/HomePage.js";
import AboutPage from '../views/AboutPage';

export default function App() {  // Đổi tên từ Router thành AppRouter
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                </Routes>
            </BrowserRouter>
        );

}

render(<App/>, window.document.getElementById('App'));
