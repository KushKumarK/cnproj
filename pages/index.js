import '../app/globals.css'
import React from 'react';
import NavBar from '@/components/listbar';
import Image from 'next/image';

export default function Home(){
    return <div className=' items-center justify-center'>
        <NavBar/>
        <div className=' p-[40px]'></div>
        <div className=' p-[30px]'></div>
        <div className=' items-center justify-center flex -z-0'>
        <div className=' rounded-full h-[400px] w-[400px] flex opacity-50'>
            <Image src="/fc612.jpg" height={612} width={612} alt='Alt FC' className=' rounded-full'/>
        </div>
        </div>
    </div>
}
