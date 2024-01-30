import React from "react";
import Footer from "../../components/Footer/Footer";
import {Outlet} from 'react-router-dom';


function AidApplication(){

     return(
         <>
             <Outlet/>
             <Footer/>
         </>
     )
}

export default AidApplication;