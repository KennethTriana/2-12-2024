import React from "react";
import { Route, Routes } from 'react-router-dom';

import Home from '../pages/Home/Home';
import Usuarios from '../pages/Usuarios/Usuarios';
import MasInformacion from '../pages/Masinformacion/Masinformacion';
import Productos from "../pages/Cursos/Cursos";

const NavbarRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/usuarios" element={<Usuarios />} />
            <Route path="/masinformacion" element={<MasInformacion />} />
        </Routes>
    );
};

export default NavbarRoutes;