import React from "react";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
/** Local Modules */
import useViews from "../views";

const useRouter = () => {
    /** Views */
    const {useLayouts} = useViews();
    const {Admin, Auth} = useLayouts();

    return (
        <BrowserRouter>
            <Routes>
                <Route path="admin/*" element={<Admin/>}/>
                <Route path="auth/*" element={<Auth/>}/>
                <Route path="/" element={<Navigate to="/admin" replace />} />
            </Routes>
        </BrowserRouter>
    );
}


export default useRouter;