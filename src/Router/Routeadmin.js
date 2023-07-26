
import {
    
    Outlet,
  } from "react-router-dom"
import Layout from "../Page/Layout/layout";

function AdminRoute({role}) {
    return ( 
    
        <Layout role="admin">
            
        <Outlet/>
        </Layout> 
    );
}

export default AdminRoute;