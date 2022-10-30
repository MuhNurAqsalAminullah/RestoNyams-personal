import React from 'react';
import { ButtonOne } from './button';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import { Link } from 'react-router-dom';

const ContentHome = () => {
    return (
        <div>
            <div className='sm:px-5 sm:mt-10 md:px-[50px] md:flex md:flex-col md:items-center lg:flex-row lg:justify-between lg:items-start lg:gap-x-10'>
                <div className='lg:w-[50%]'>
                    <img src={require('../assets/Image/Images/poster1.jpg')} alt="" />
                </div>
                <div className='sm:mt-3 lg:w-[50%] lg:mt-0'>
                    <h5 className='sm:text-lg sm:font-bold md:text-xl lg:text-2xl'># RestoNyams #</h5>
                    <p className='sm:text-sm md:text-base lg:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus nemo aspernatur, est earum veniam expedita, a sed, in tenetur placeat porro. Provident perspiciatis eaque quos, consequuntur omnis odio maxime nemo soluta qui rerum assumenda mollitia. Facere placeat et esse accusantium, distinctio optio maiores? Nam tenetur facilis explicabo aliquam asperiores id.</p>
                    <ButtonOne title='Lihat Blog Informasi' />
                </div>
            </div>

            <div className='sm:flex sm:justify-between sm:px-5 sm:mt-5 md:px-[50px] lg:mt-10'>
                <img src={require('../assets/Image/Images/poster2.svg').default} className='sm:w-[50%] sm:pr-1 md:pr-3 lg:pr-5' alt="" />
                <img src={require('../assets/Image/Images/poster3.svg').default} className='sm:w-[50%] sm:pl-1 md:pl-3 lg:pl-5' alt="" />
            </div>

            <div className='sm:mx-5 sm:mt-5 md:mx-[50px] lg:mt-10'>
                <div className='sm:flex sm:justify-between border-b-2 border-[#056BFF]'>
                    <h5 className='sm:text-lg sm:font-semibold md:text-xl lg:text-2xl text-[#056BFF]'>Restoran Terpopuler</h5>
                    <Link to={"/all-restoran"}>
                        <h6 className='sm:text-sm md:text-base lg:text-lg text-[#056BFF]'>All Restoran</h6>
                    </Link>
                </div>

                <div className='sm:flex sm:justify-between sm:flex-wrap mt-5'>
                    <div className='sm:w-[150px] lg:w-[280px] shadow-custome rounded mb-5'>
                        <img src={require('../assets/Image/Images/food1.jpg')} className='lg:h-[200px] lg:w-full' alt="" />
                        <div className='p-2'>
                            <div className='flex justify-between items-center'>
                                <h6 className='sm:font-semibold sm:text-sm lg:text-xl text-[#24AAD6]'>Restoran keren 1</h6>
                                <p className='sm:text-xs lg:text-base text-white bg-[#FFD700] rounded-2xl sm:p-0 md:p-1'>5.0</p>
                            </div>
                            <p className='sm:text-xs lg:text-base'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae, dicta.</p>
                        </div>
                    </div>
                    <div className='sm:w-[150px] lg:w-[280px] shadow-custome rounded mb-5'>
                        <img src={require('../assets/Image/Images/food2.jpg')} className='lg:h-[200px] lg:w-full' alt="" />
                        <div className='p-2'>
                            <div className='flex justify-between items-center'>
                                <h6 className='sm:font-semibold sm:text-sm lg:text-xl text-[#24AAD6]'>Restoran keren 2</h6>
                                <p className='sm:text-xs lg:text-base text-white bg-[#FFD700] rounded-2xl sm:p-0 md:p-1'>5.0</p>
                            </div>
                            <p className='sm:text-xs lg:text-base'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae, dicta.</p>
                        </div>
                    </div>
                    <div className='sm:w-[150px] lg:w-[280px] shadow-custome rounded mb-5'>
                        <img src={require('../assets/Image/Images/food3.jpg')} className='lg:h-[200px] lg:w-full' alt="" />
                        <div className='p-2'>
                            <div className='flex justify-between items-center'>
                                <h6 className='sm:font-semibold sm:text-sm lg:text-xl text-[#24AAD6]'>Restoran keren 3</h6>
                                <p className='sm:text-xs lg:text-base text-white bg-[#FFD700] rounded-2xl sm:p-0 md:p-1'>5.0</p>
                            </div>
                            <p className='sm:text-xs lg:text-base'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae, dicta.</p>
                        </div>
                    </div>
                    <div className='sm:w-[150px] lg:w-[280px] shadow-custome rounded mb-5'>
                        <img src={require('../assets/Image/Images/food4.jpg')} className='lg:h-[200px] lg:w-full' alt="" />
                        <div className='p-2'>
                            <div className='flex justify-between items-center'>
                                <h6 className='sm:font-semibold sm:text-sm lg:text-xl text-[#24AAD6]'>Restoran keren 4</h6>
                                <p className='sm:text-xs lg:text-base text-white bg-[#FFD700] rounded-2xl sm:p-0 md:p-1'>5.0</p>
                            </div>
                            <p className='sm:text-xs lg:text-base'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae, dicta.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mt-32'>
                <div className='sm:flex sm:flex-col sm:items-center sm:px-5 sm:mb-10 md:flex-row md:bg-gradient-to-r from-[#019EFF] to-[#01C7FF] md:mr-[50px] md:rounded-r-2xl md:h-[150px] md:mb-20 lg:h-[250px] lg:px-[100px]'>
                    <div className='sm:bg-gradient-to-r from-[#019EFF] to-[#01C7FF] sm:w-[300px] sm:[300px] sm:h-[200px] sm:p-2 sm:rounded-2xl sm:flex sm:items-center lg:h-[300px] shadow-custome'>
                        <img src={require('../assets/Image/Images/imge-quest1.svg').default} className='relative' alt="" />
                    </div>
                    <div className='sm:mt-3 md:w-[70%] md:pl-5 md:mt-0 lg:pl-10'>
                        <h5 className='sm:text-base sm:text-[#24AAD6] md:border-l-2 md:border-white md:pl-2 md:text-white lg:text-2xl font-bold'>Memberikan tampilan yang sederhana tapi menggugah selera dan mudah digunakan</h5>
                        <p className='sm:text-xs sm:mt-2 md:pl-3 md:text-white lg:text-base'>Cari restoran favorite anda. Selamat datang di Restonyams aplikasi penyedia informasi berbagai restoran di seluruh indonesia  dengan berbagai review yang menarik dari berbagai orang yang akan memberikan anda kemudahan dalam mencari restoran yang menarik bagi anda.</p>
                    </div>
                </div>
                <div className='sm:flex sm:flex-col sm:items-center sm:px-5 sm:mb-10 md:flex-row md:bg-gradient-to-r from-[#019EFF] to-[#01C7FF] md:ml-[50px] md:rounded-l-2xl md:h-[150px] md:mb-20 md:flex-row-reverse lg:h-[250px] lg:px-[100px]'>
                    <div className='sm:bg-gradient-to-r from-[#019EFF] to-[#01C7FF] sm:w-[300px] sm:[300px] sm:h-[200px] sm:p-2 sm:rounded-2xl sm:flex sm:items-center lg:h-[300px] shadow-custome'>
                        <img src={require('../assets/Image/Images/imge-quest2.svg').default} className='relative' alt="" />
                    </div>
                    <div className='sm:mt-3 md:w-[70%] md:pr-5 md:mt-0 lg:pr-10'>
                        <h5 className='sm:text-base sm:text-[#24AAD6] md:border-r-2 md:border-white md:pr-2 md:text-white md:text-end lg:text-2xl font-bold'>Dapatkan Restoran dengan review terbaik dari berbagai kalangan</h5>
                        <p className='sm:text-xs sm:mt-2 md:pr-3 md:text-white md:text-end lg:text-base'>
                        Cari restoran favorite anda berdasarkan berbagai review terbaik dan menarik dari berbagai macam orang yang akan memberikan kemudahan dalam memilih restoran menarik minat anda untuk mencobanya
                        </p>
                    </div>
                </div>
                <div className='sm:flex sm:flex-col sm:items-center sm:px-5 md:flex-row md:bg-gradient-to-r from-[#019EFF] to-[#01C7FF] md:mr-[50px] md:rounded-r-2xl md:h-[150px] md:mb-20 lg:h-[250px] lg:px-[100px]'>
                    <div className='sm:bg-gradient-to-r from-[#019EFF] to-[#01C7FF] sm:w-[300px] sm:h-[200px] sm:p-2 sm:rounded-2xl lg:h-[300px] shadow-custome'>
                        <img src={require('../assets/Image/Images/imge-quest3.svg').default} className='relative sm:w-[150px] sm:mx-auto sm:bottom-3 lg:w-[230px] lg:bottom-5' alt="" />
                    </div>
                    <div className='sm:mt-3 md:w-[70%] md:pl-5 md:mt-0 lg:pl-10'>
                        <h5 className='sm:text-base sm:text-[#24AAD6] md:border-l-2 md:border-white md:pl-2 md:text-white lg:text-2xl font-bold'>Tersedia juga untuk Mobile Native App</h5>
                        <p className='sm:text-xs sm:mt-2 md:pl-3 md:text-white lg:text-base'>RestoNyam Juga Menyediakan untuk Mobile Native App agar dapat mengakses dengan  mudah aplikasi RestoNyam dan juga mempermudah para pengguna untuk mencari restouran favoritnya kapanpun dan dimanapun</p>
                    </div>
                </div>
            </div>

            <div className='sm:mx-5 mt-20'>
                <div className='flex justify-between'>
                    <div className='border-t-4 border-[#056BFF] sm:w-[30%]'></div>
                    <h5 className='sm:text-xs lg:text-xl font-["roboto"] w-fit relative bottom-3 text-[#056BFF]'>Costumer Review</h5>
                    <div className='border-t-4 border-[#056BFF] sm:w-[30%]'></div>
                </div>
                <div className='sm:flex sm:justify-center sm:flex-wrap sm:gap-2 md:justify-between sm:mt-5 lg:mt-10'>
                    <div className='bg-gradient-to-b from-[#33CCFF] to-[#019EFF] sm:w-[170px] md:w-[220px] lg:w-[400px] rounded-xl'>
                        <div className='sm:flex sm:flex-col sm:items-center '>
                            <img src={require('../assets/Image/user/user1.jpg')} className='rounded sm:w-[50px] sm:rounded-[50%] sm:relative sm:bottom-5 sm:border-2 lg:w-[100px] lg:bottom-10 border-[#82B5FF]' alt="" />
                        </div>
                        <div className='relative bottom-3 md:px-1 lg:bottom-10'>
                            <p className='sm:text-sm lg:text-lg font-bold text-center text-white'>Nama Saya</p>
                            <p className='sm:text-xs lg:text-base text-center text-white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur repellendus, nobis eligendi libero neque delectus?</p>
                        </div>
                    </div>
                    <div className='bg-gradient-to-b from-[#33CCFF] to-[#019EFF] sm:w-[170px] md:w-[220px] lg:w-[400px] rounded-xl'>
                        <div className='sm:flex sm:flex-col sm:items-center '>
                            <img src={require('../assets/Image/user/user1.jpg')} className='rounded sm:w-[50px] sm:rounded-[50%] sm:relative sm:bottom-5 sm:border-2 lg:w-[100px] lg:bottom-10 border-[#82B5FF]' alt="" />
                        </div>
                        <div className='relative bottom-3 md:px-1 lg:bottom-10'>
                            <p className='sm:text-sm lg:text-lg font-bold text-center text-white'>Nama Saya</p>
                            <p className='sm:text-xs lg:text-base text-center text-white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur repellendus, nobis eligendi libero neque delectus?</p>
                        </div>
                    </div>
                    <div className='bg-gradient-to-b from-[#33CCFF] to-[#019EFF] sm:w-[170px] md:w-[220px] lg:w-[400px] rounded-xl sm:mt-5 md:mt-0'>
                        <div className='sm:flex sm:flex-col sm:items-center '>
                            <img src={require('../assets/Image/user/user1.jpg')} className='rounded sm:w-[50px] sm:rounded-[50%] sm:relative sm:bottom-5 sm:border-2 lg:w-[100px] lg:bottom-10 border-[#82B5FF]' alt="" />
                        </div>
                        <div className='relative bottom-3 md:px-1 lg:bottom-10'>
                            <p className='sm:text-sm lg:text-lg font-bold text-center text-white'>Nama Saya</p>
                            <p className='sm:text-xs lg:text-base text-center text-white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur repellendus, nobis eligendi libero neque delectus?</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ContentHome;