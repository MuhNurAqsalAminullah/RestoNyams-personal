import React from 'react';
import * as AiIcons from 'react-icons/ai'
import * as FaIcons from 'react-icons/fa'
import * as BsIcons from 'react-icons/bs'

const Footer = () => {
    return (
        <div className='bg-[#3399FF] sm:px-5 sm:pt-5 md:px-[50px] mt-10'>
            <h1 className='sm:text-4xl md:text-5xl lg:text-5xl text-white'>Resto<span className='font-bold font-["Signika"]'>Nyams</span></h1>
            <div className='md:flex md:justify-between border-b border-white pb-5'>
                <div className='md:w-[400px]'>
                    <p className='sm:text-sm md:text-base lg:text-base text-white'>Jl. Dia dan Kamu tanpa Aku. No.01 Sulawesi Selatan, Makassar | saya@gmail.com </p>
                </div>
                <div className='sm:mt-5 md:mt-0'>
                    <h5 className='sm:text-xl text-white font-bold border-b-2 border-white w-fit'>Hubungi Kami</h5>
                    <div className='sm:flex sm:gap-5 mt-2'>
                        <AiIcons.AiOutlineInstagram color='white' size={30} className='border-2 border-white rounded-[50%] shadow-custome sm:p-1' />
                        <FaIcons.FaTelegramPlane color='white' size={30} className='border-2 border-white rounded-[50%] shadow-custome sm:p-1' />
                        <BsIcons.BsWhatsapp color='white' size={30} className='border-2 border-white rounded-[50%] shadow-custome sm:p-1' />
                    </div>
                </div>
            </div>
            <p className='text-center text-white'>Copyright Muh Nur Aqsal Aminullah - 2022</p>
        </div>
    );
};

export default Footer;