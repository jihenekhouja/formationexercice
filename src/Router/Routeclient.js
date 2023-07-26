
import {
    BrowserRouter ,
    Route,
    Routes,
    Link,
    Navigate,
    Outlet,
  } from "react-router-dom"
import Layout from "../Page/Layout/layout";

function UserRoute() {
    return ( 
    
<Layout role="user">
  <Outlet/>
  </Layout>
    );
}

export default UserRoute;