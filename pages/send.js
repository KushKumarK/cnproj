import FTPUpload from "@/components/ftpcomp";
import React from "react";
import { Poppins, Raleway } from "next/font/google";
import NavBar from "@/components/listbar";

export default function SendPage(){
    return (
        <div className='place-content-center'>
            <NavBar/>
            <FTPUpload/>
        </div>
    );
}