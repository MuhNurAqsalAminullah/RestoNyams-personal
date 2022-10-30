import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CardRestoran = ({userSearch, handleDetail}) => {
    // const [getData, setGetData] = useState([
    //     {
    //         "id": "1",
    //         "nama_restoran": "lumpang emas",
    //         "rate": "4.7",
    //         "poster": "https://i.postimg.cc/xjkNp3jk/resto1.jpg",
    //         "provinsi": "jakarta selatan",
    //         "lokasi": "Rumah UmaraJl. Wijaya II No. 28, Wijaya, Kebayoran Baru"
    //     },
    //     {
    //         "id": "2",
    //         "nama_restoran": "sepiring padang",
    //         "rate": "4.9",
    //         "poster": "https://i.postimg.cc/bvDjfrZR/resto2.jpg",
    //         "provinsi": "jakarta utara",
    //         "lokasi": "Jl. Boulevard Raya Blok QF1 No. 1, Kelapa Gading"
    //     },
    //     {
    //         "id": "3",
    //         "nama_restoran": "soto sob h. asmawi",
    //         "rate": "4.7",
    //         "poster": "https://i.postimg.cc/wTZVbBdz/resto3.jpg",
    //         "provinsi": "jakarta selatan",
    //         "lokasi": "Jl. Abdul Majid Raya No. 44R, Fatmawati"
    //     },
    //     {
    //         "id": "4",
    //         "nama_restoran": "restoran beautika manado",
    //         "rate": "4.7",
    //         "poster": "https://i.postimg.cc/K8Qnhc64/resto4.jpg",
    //         "provinsi": "jakarta pusat",
    //         "lokasi": "Jl. Abdul Muis No. 70A, Tanah Abang"
    //     },
    //     {
    //         "id": "5",
    //         "nama_restoran": "Sate Palmerah Kimtek",
    //         "rate": "4.8",
    //         "poster": "https://i.postimg.cc/c4zS9fHJ/resto5.jpg",
    //         "provinsi": "jakarta barat",
    //         "lokasi": "Jl. Panjang Arteri Kelapa Dua No. 8A, Kebon Jeruk"
    //     }
    // ])
    return (
        <div className='lg:w-[65%]'>
            {
                userSearch && userSearch.length > 0 ?
                userSearch.map( item => (
                    <div key={item.id} className='sm:mt-5 lg:flex shadow-custome lg:rounded'>
                        <div className='sm:h-[200px] sm:w-full sm:overflow-hidden md:h-[250px] lg:w-[300px] lg:h-[200px] lg:ml-0 lg:mr-0'>
                            <img src={item.poster} className='sm:w-full sm:h-[300px] md:h-[800px] md:relative md:bottom-52 lg:w-[200px] lg:h-[200px] lg:bottom-0' alt="" />
                        </div>
                        <div className='sm:p-3 sm:mx-5 bg-white sm:shadow-custome mb-5 lg:mr-5 lg:ml-0 lg:shadow-none lg:w-full lg:mb-0'>
                            <div>
                                <h5 className='sm:text-sm font-["quicksand"] font-bold lg:text-xl text-[#01CBFF] capitalize'>{item.nama_restoran}</h5>
                                <div className='text-[#454545]'>
                                    <p className='sm:text-xs lg:text-base'>Rate {item.rate}</p>
                                    <p className='sm:text-xs lg:text-base'>(2 Ulasan)</p>
                                    <p className='sm:text-xs lg:text-base text-black font-bold'>{item.provinsi}</p>
                                    <p className='sm:text-xs lg:text-base'>{item.lokasi}</p>
                                </div>
                                <div className='mt-2 sm:flex sm:justify-between md:justify-center lg:justify-start'>
                                    <button className='sm:text-xs lg:text-base sm:w-1/2 md:w-1/3 lg:w-1/2 bg-[#01CBFF] text-white py-1 mr-5 rounded'>Telepon</button>
                                    <button key={item.id} onClick={() => handleDetail(item.id)} className='sm:text-xs lg:text-base sm:w-1/2 md:w-1/3 lg:w-1/2 bg-[#01CBFF] text-white py-1 rounded text-center'>Detail</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
                :
                <div>
                    <p>tidak ada restoran</p>
                </div> 
            }
        </div>
    );
};

export default CardRestoran;