import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AllRestoran from '../pages/AllRestoran';
import Detail from '../pages/Detail';
import Home from '../pages/Home';

const Router = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/all-restoran' element={<AllRestoran />} />
                <Route path='/detail/:id' element={<Detail />} />
            </Routes>
        </div>
    );
};

export default Router;