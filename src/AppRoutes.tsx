import React from 'react'
import { Routes as RouterRoutes, Route } from 'react-router-dom';
import Homepage from './Pages/HomePage/Homepage';


const AppRoutes = () => {
    return (
        <>
            <RouterRoutes>
                <Route path="/" element={<Homepage />} />
            </RouterRoutes>

        </>
    )
}

export default AppRoutes;