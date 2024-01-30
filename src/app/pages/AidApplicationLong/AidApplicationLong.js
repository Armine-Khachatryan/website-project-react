import React from "react";
import {Outlet} from "react-router-dom";
import AidApplicationLongUpPart
    from "../../components/AidApplicationComponents/AidApplicationLongUpPart/AidApplicationLongUpPart";



function AidApplicationLong(){


    return(
        <>
            <AidApplicationLongUpPart/>
            <div className={"container"}>
                <Outlet/>
            </div>
        </>
    )
}

export default AidApplicationLong;