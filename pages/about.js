import React from "react";
import { Poppins, Raleway } from "next/font/google";
import NavBar from "@/components/listbar";

const pops = Poppins({subsets:['latin'], weight:['100','200','400','800']});
const rale = Raleway({subsets:['latin']});
export default function SendPage(){
    return (
        <div className='place-content-center'>
            <NavBar/>
            <div className=" text-center p-8">
                <div className={`${pops.className} text-[64px] font-bold`}>ABOUT</div>
            </div>
            <div className=" text-center">
                <div className=" text-[36px] font-light p-10">
                    This is the GUI+Server Implementation of FTP(File Transfer Protocol).
                    The server has been implemented in Python, which links to a shared folder for storing and retrieving files.
                    This is the remote location where the client sends its files. 
                    As for the Client, it has been implemented in ReactJS, which contains the UI to access and download the files from the server as well as upload new files to it. 
                </div>
                <div className={`${pops.className} font-normal text-lg p-9`}>
                    Credits:
                    <ul className={`font-extralight ${rale.className}`}>
                        <li>Dhruv Hatkar 21BAI1218</li>
                        <li>Kush Kumar Kushwaha 21BRS1191</li>
                        <li>Barneel Ray 21BRS1467</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}