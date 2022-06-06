import React, { useContext } from "react";
import {Navigate} from 'react-router-dom'
import { AppContext } from "../contexts/app-context";

const UserProtectedRoute = (props) => {
    const context = useContext(AppContext);

    if(context.user.isAdmin) return <Navigate to="/login" /> ;
    return props.children;
}

export default UserProtectedRoute