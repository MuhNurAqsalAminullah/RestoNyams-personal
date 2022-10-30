import { useState } from 'react';
import * as GiIcons from 'react-icons/gi'
import { Link } from 'react-router-dom';

const NavbarHome = () => {
    const [burger, setBurger] = useState(false)
    const [fixScroll, setFixScroll] = useState(false)

    const burgerToggle = () => {
        setBurger(!burger)
    }

    const fixedScroll = () => {
        if(window.scrollY >= 20) {
            setFixScroll(true)
        }else {
            setFixScroll(false)
        }
    }

    window.addEventListener("scroll", fixedScroll)

    return (
        <div className={fixScroll ? 'sm:bg-[#0172FF] fixed w-full z-10 md:h-fit md:bg-[#0172FF] md:duration-300' : 'fixed w-full z-10 md:duration-300'}>
            <div className='sm:flex sm:items-center sm:justify-between sm:px-5 sm:py-4 sm:text-white md:px-[50px] lg:[100px]'>
                <div>
                    <Link to={"/"}>
                        <h3 className='sm:text-lg sm:font-semibold md:text-2xl lg:text-3xl'>Resto<span className={fixScroll ? 'font-semibold font-["Signika"] text-white' : 'font-semibold font-["Signika"] text-[#00D1FF]'}>Nyams</span></h3>
                    </Link>
                </div>

                <ul className={burger ? 'sm:bg-[#0172FF] sm:absolute sm:right-0 sm:top-0 sm:w-[80%] sm:h-screen sm:flex sm:flex-col sm:justify-evenly sm:items-center sm:translate-x-0 sm:ease-in sm:duration-300'
                : 'sm:bg-[#0172FF] sm:absolute sm:right-0 sm:top-0 sm:w-[80%] sm:h-screen sm:flex sm:flex-col sm:justify-evenly sm:items-center sm:translate-x-full sm:ease-in sm:duration-300 md:translate-x-0 md:relative md:flex-row md:h-fit md:bg-transparent md:w-fit md:gap-10 lg:gap-20'}>
                    <Link to={"/"}>
                        <li className='sm:border-b sm:border-white sm:py-2 md:border-0 md:py-0 sm:text-sm md:text-base'>Home</li>
                    </Link>
                    <li className='sm:border-b sm:border-white sm:py-2 md:border-0 md:py-0 sm:text-sm md:text-base'>Favorite</li>
                    <li className='sm:border-b sm:border-white sm:py-2 md:border-0 md:py-0 sm:text-sm md:text-base'>Blog</li>
                    <li className='sm:border-b sm:border-white sm:py-2 md:border-0 md:py-0 sm:text-sm md:text-base'>SalluCode</li>
                </ul>

                <GiIcons.GiHamburgerMenu onClick={burgerToggle} className='z-10 md:hidden' />
            </div>
        </div>
    );
};

export default NavbarHome;