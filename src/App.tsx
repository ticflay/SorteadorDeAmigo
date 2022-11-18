import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Formulario from './components/Form';
import Home from './pages/Home';

export default function App() {
    return(
        <BrowserRouter>
            <RecoilRoot>
                <Routes>
                    <Route path='/' element={<Home />} />
                </Routes>
            </RecoilRoot>
        </BrowserRouter>
    )
}