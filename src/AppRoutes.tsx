import React from 'react'
import { Routes as RouterRoutes, Route } from 'react-router-dom';
import Homepage from './Pages/HomePage/Homepage';
import Onbarding from './Pages/Onbarding/Onbarding';


const AppRoutes = () => {
    return (
        <>
            <RouterRoutes>
                <Route path="/" element={<Homepage />} />
  
                <Route path="/sign-in" element={<Onbarding />} />
            </RouterRoutes>

        </>
    )
}

export default AppRoutes;