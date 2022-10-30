import React, { useEffect, useState } from 'react';
import * as BsIcons from 'react-icons/bs'
import * as FaIcons from 'react-icons/fa'
import * as SiIcons from 'react-icons/si'
import * as AiIcons from 'react-icons/ai'
import * as TbIcons from 'react-icons/tb'
import { Link } from 'react-router-dom';
import axios from 'axios';

const ContentDetail = ({detail}) => {
    const [styleReview, setStyleReview] =  useState('sm:border-b-2 sm:border-[#0276FF] sm:px-5 sm:relative sm:top-[2px] sm:text-[#0276FF] sm:font-bold cursor-pointer')
    const [styleGambar, setStyleGambar] =  useState('sm:px-5 sm:relative sm:top-[2px] sm:font-bold sm:cursor-pointer')
    const [reviews, setReviews] = useState(true)
    const [gambar, setGambar] = useState(false)
    const [showReview, setShowReview] = useState(false)

    const [review, setReview] = useState([])
    useEffect(() => {
        const fetchReview = async() => {
            try{
                const {data: response} = await axios.get('http://localhost:3006/reviews')
                setReview(response)
                console.log(response)
            }catch (error){
                console.log(error);
            }
        }
        fetchReview()
    }, [])

    const [nama, setNama] = useState('')
    const [komentar, setKomentar] = useState('')

    const saveReview = async(e) => {
        e.preventDefault()
        try{
            await axios.post('http://localhost:3006/reviews', {
                nama,
                komentar
            },
            window.location.reload()
            )
        }catch(err){
            console.log(err)
        }
    }

    const onReview = () => {
        setStyleReview('sm:border-b-2 sm:border-[#0276FF] sm:px-5 sm:relative sm:top-[2px] sm:text-[#0276FF] font-bold cursor-pointer')
        setStyleGambar('sm:px-5 sm:relative sm:top-[2px] font-bold cursor-pointer')
        setReviews(true)
        setGambar(false)
    }

    const onGambar = () => {
        setStyleGambar('sm:border-b-2 sm:border-[#0276FF] sm:px-5 sm:relative sm:top-[2px] text-[#0276FF] font-bold cursor-pointer')
        setStyleReview('sm:px-5 sm:relative sm:top-[2px] font-bold cursor-pointer')
        setReviews(false)
        setGambar(true)
    }

    const handleReview = () => {
        setShowReview(!showReview)
    }
    return (
        <div>
            <div className='md:flex md:mx-[50px]'>
                <div className='lg:w-[40%]'>
                    <img src="https://i.postimg.cc/GtmkTNT3/banner1.jpg" className='w-full' alt="" />
                    <div className='sm:flex sm:justify-between sm:gap-x-3 sm:mx-5 sm:mt-5 md:mx-0 md:mt-2 md:flex-col lg:flex-row'>
                        <a href='#komen' className='sm:gap-5 sm:py-1 sm:w-1/2 md:w-full rounded bg-[#0276FF]'>
                            <button onClick={handleReview} className='sm:flex sm:items-center sm:justify-center sm:gap-5 sm:py-1 sm:w-1/2 md:w-full'>
                                <BsIcons.BsFillPencilFill color='white' />
                                <p className='text-white font-semibold'>Tulis Review</p>
                            </button>
                        </a>
                        <div className='sm:flex sm:items-center sm:justify-center sm:gap-5 sm:py-1 sm:w-1/2 md:w-full md:md:mt-3 lg:mt-0 rounded border-2 border-[#0276FF]'>
                            <FaIcons.FaFileArchive color='#0276FF' />
                            <p className='text-[#0276FF] font-semibold'>Simpan</p>
                        </div>
                    </div>
                </div>
                <div className='sm:mx-5 sm:mt-5 md:mt-0 md:mr-0 lg:w-[60%]'>
                    <div className='sm:flex sm:justify-between sm:items-end border-b-2 border-[#0276FF]'>
                        <h3 className='sm:text-lg lg:text-3xl font-bold text-[#0276FF] capitalize'>{detail.nama_restoran}</h3>
                        <div>
                            <p className='text-[#858585]'>[asia, eropa]</p>
                        </div>
                    </div>
                    <div className='mt-2'>
                        <div>
                            <div className='sm:flex sm:items-center sm:gap-x-2 sm:py-2'>
                                <SiIcons.SiGooglemaps color='#858585' />
                                <p className='sm:text-[#858585] sm:text-xs lg:text-base'>{detail.lokasi}, {detail.provinsi}</p>
                            </div>
                            <div className='sm:flex sm:items-center sm:gap-x-2 sm:py-2'>
                                <AiIcons.AiFillClockCircle color='#858585' />
                                <p className='sm:text-[#858585] sm:text-xs lg:text-base'>Buka / {detail.buka_hari}, {detail.buka_jam} </p>
                            </div>
                            <div className='sm:flex sm:items-center sm:gap-x-2 sm:py-2'>
                                <FaIcons.FaCoins color='#858585' />
                                <p className='sm:text-[#858585] sm:text-xs lg:text-base'>Rp. {detail.harga_minimal} -  Rp. {detail.harga_maximal} / orang</p>
                            </div>
                        </div>
                        <div className='sm:flex sm:gap-x-1 sm:mt-3 lg:gap-x-5'>
                            <div className='sm:w-[100px] shadow-custome'>
                                <p className='sm:p-1 bg-[#0276FF] text-center text-white font-semibold'>Rasa</p>
                                <p className='sm:p-1 lg:text-2xl lg:py-3 text-[#0276FF] text-center font-bold'>{detail.rasa}</p>
                            </div>
                            <div className='sm:w-[100px] shadow-custome'>
                                <p className='sm:p-1 bg-[#01CBFF] text-center text-white font-semibold'>Suasana</p>
                                <p className='sm:p-1 lg:text-2xl lg:py-3 text-[#01CBFF] text-center font-bold'>{detail.suasaha}</p>
                            </div>
                            <div className='sm:w-[100px] shadow-custome'>
                                <p className='sm:p-1 bg-[#01CBFF] text-center text-white font-semibold'>Harga</p>
                                <p className='sm:p-1 lg:text-2xl lg:py-3 text-[#01CBFF] text-center font-bold'>{detail.harga_rate}</p>
                            </div>
                            <div className='sm:w-[100px] shadow-custome'>
                                <p className='sm:p-1 bg-[#01CBFF] text-center text-white font-semibold'>Pelayanan</p>
                                <p className='sm:p-1 lg:text-2xl lg:py-3 text-[#01CBFF] text-center font-bold'>{detail.pelayanan}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='md:mx-[50px] md:flex md:flex-row-reverse md:gap-x-10'>
                <div className='sm:mx-5 md:mx-0 md:w-[35%] md:mt-10 mt-5 shadow-custome md:h-fit'>
                    <div className='sm:mx-5 sm:py-3 font-["Quicksand"]'>
                        <p className='sm:text-xs sm:mt-2 lg:text-lg font-bold'>Telepon</p>
                        <p className='sm:text-xs sm:mt-2 lg:text-lg text-[#01CBFF]'>{detail.telfon}</p>
                        <p className='sm:text-xs sm:mt-2 lg:text-lg sm:mb-2 font-bold'>Petunuk Arah</p>
                        <img src={require('../../assets/Image/Images/maps.jpg')} className='w-full' alt="" />
                        <p className='sm:text-xs sm:mt-2 lg:text-lg sm:font-semibold lg:font-normal'>{detail.lokasi},{detail.provinsi}</p>
                        <div className='sm:flex sm:gap-x-3 sm:mt-3'>
                            <button className='sm:w-[100px] lg:w-[150px] flex justify-center items-center gap-x-2 bg-[#01CBFF] px-5 rounded'>
                                <FaIcons.FaCopy color='white' />
                                <p className='sm:text-xs lg:text-lg text-white'>salin</p>
                            </button>
                            <button className='sm:w-[100px] lg:w-[150px] flex justify-center items-center sm:gap-x-1 border-2 border-[#01CBFF] px-5 rounded'>
                                <TbIcons.TbArrowBearRight color='#01CBFF' />
                                <p className='sm:text-xs lg:text-lg text-[#01CBFF]'>Petunjuk</p>
                            </button>
                        </div>
                    </div>
                </div>

                <div className='md:w-[65%] mb-20 mt-5'>
                    <div className=' sm:mx-5 md:mx-0 flex border-b-2 border-[#858585] gap-10 pl-5 text-[#454545] font-["roboto"]'>
                        <p onClick={onReview} className={styleReview}>Review</p>
                        <p onClick={onGambar} className={styleGambar}>Gambar</p>
                    </div>

                    {
                        reviews && (
                            <>
                            {
                                review.map(item => (
                                    <div  key={item.id} className='sm:mx-5 md:mx-0 mt-5 border-b border-[#454545] pb-5 mb-5'>
                                        <div className='flex gap-3 items-center'>
                                            <img src={require('../../assets/Image/user/user1.jpg')} className='sm:w-[35px] md:w-[50px] rounded-[50px]' alt="" />
                                            <div className='font-["roboto"]'>
                                                <p className='sm:text-sm md:text-base font-bold '>{item.nama}</p>
                                                <p className='sm:text-xs text-[#454545] '>10 menit yang lalu</p>
                                            </div>
                                        </div>
                                        <p className='sm:text-xs md:text-base font-["roboto"] text-[#454545] mt-3'>{item.komentar}</p>
                                    </div>
                                ))
                            }
                            </>
                        )
                    }
                    {
                        gambar && (
                            <div className='sm:mx-5 md:mx-0 flex justify-between flex-wrap gap-y-3 mt-5'>
                                <img src={require('../../assets/Image/Images/food1.jpg')} className='sm:w-[100px] w-[150px] rounded-md' alt="" />
                                <img src={require('../../assets/Image/Images/food2.jpg')} className='sm:w-[100px] w-[150px] rounded-md' alt="" />
                                <img src={require('../../assets/Image/Images/food3.jpg')} className='sm:w-[100px] w-[150px] rounded-md' alt="" />
                                <img src={require('../../assets/Image/Images/food4.jpg')} className='sm:w-[100px] w-[150px] rounded-md' alt="" />
                            </div>
                        )
                    }

                    {
                        showReview ? 
                            <form id='komen' className='sm:mx-5 pt-24' onSubmit={saveReview}>
                                <p className='border-b-2 border-[#01CBFF] w-fit font-semibold text-[#01CBFF] mb-1'>Review anda</p>
                                <div>
                                    <label htmlFor="" className='text-sm font-semibold'>Username</label>
                                    <input value={nama} onChange={(e) => setNama(e.target.value)} type="text" placeholder='Nama anda' className='w-full mb-2 text-sm outline-none border py-1 px-2 bg-[#f4f4f4]' /><br />
                                </div>
                                <div>
                                    <label htmlFor="" className='text-sm font-semibold'>Komentar</label>
                                    <textarea value={komentar} onChange={(e) => setKomentar(e.target.value)} type="text" placeholder='Masukkan komentar' className='w-full text-sm outline-none border px-2 h-32 bg-[#f4f4f4]' />
                                </div>
                                <div className='flex justify-end'>
                                    <button type="submit" className='bg-[#01CBFF] text-white px-5 rounded'>Kirim</button>
                                </div>
                                {/* <p>{nama} - {komentar}</p> */}
                            </form>
                            :
                            null
                    }
                </div>
            </div>
        </div>
    );
};

export default ContentDetail;