import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {App, Animals} from "./app";
import Default from "./layout/Default";

const Router = () => {
    return (
        
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Default><App name = "Tim" age={70}/></Default>} />
            <Route path='/animals' element={<Default><Animals/></Default>} />
        </Routes>
        </BrowserRouter>

    )

}
export default Router;