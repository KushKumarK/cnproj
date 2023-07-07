import '../app/globals.css';
import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import { Quantico } from 'next/font/google';
import { Poppins, Raleway, Ysabeau } from 'next/font/google';
const rale = Ysabeau({subsets:['latin']});
const poppins = Poppins({weight: ['100','200','400','800'], subsets: ['latin']});
const quan = Quantico({ weight:'400', subsets:['latin']});
const NavItem = ({ text, href, active }) => {
    
    return <Link href ={href} className={` p-[20px] ${poppins.className} ${active ? " font-extrabold text-xl": " font-normal text-lg"} hover:font-extrabold hover:text-[40px]`}>
            {text}
    </Link>;
};
const MENU_LIST = [
    {text: "HOME", href:"/"},
    {text: "SEND", href: "/send"},
    {text: "RECIEVE", href: "/recv"}
];
export default function NavBar(){
    const [navActive, setnavActive] = useState(null);
    const [activeIdx, setactiveIdx] = useState(-1);
    
    return (
        <header className='top-2'>
            <nav className={ ` flex  justify-evenly bg-transparent h-[100px] place-items-center` }>
                <Link href="/about">
                        <div className={`${rale.className} text-[44px] font-bold hover:text-[56px] hover:font-extrabold`}>FTPI</div>
                </Link>
                <div onClick={()=>setnavActive(!navActive)}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className={`${navActive ? "": ""} flex justify-evenly`}>
                    {MENU_LIST.map((menu,idx)=>(
                        <div onClick={()=>{
                            setactiveIdx(idx);
                            setnavActive(false);
                        }}
                        key={menu.text}>
                        <NavItem active={activeIdx===idx} {...menu} />
                        </div>
                    ))}
                </div>
            </nav>
        </header>
    );
}