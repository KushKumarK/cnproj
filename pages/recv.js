import React from "react";
import { Poppins, Raleway } from "next/font/google";
import NavBar from "@/components/listbar";
import FTPUpload from "@/components/ftpcomp";
import FileList from "@/components/ftprecv";

export default function SendPage(){
    return (
        <div className='place-content-center'>
            <NavBar/>
            <FileList/>
        </div>
    );
}