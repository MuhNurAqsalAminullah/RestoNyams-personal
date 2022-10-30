import React from 'react';
import * as BsIcons from 'react-icons/bs'

const SearchUser = ({setResto, handleSearch}) => {
    return (
        <div className='sm:mt-5 shadow-custome sm:mx-5 md:mx-[50px] lg:mx-[200px] mt-10'>
            <div className='bg-white sm:flex sm:items-center sm:justify-center lg:justify-between rounded'>
                <BsIcons.BsSearch size={20} className='sm:w-[10%] lg:w-[5%] cursor-pointer' color='#00D1FF' onClick={handleSearch} />
                <input type="text" onChange={(e) => setResto(e.target.value)} placeholder='Temukan restoran kesukaan anda' className='sm:w-[90%] outline-none sm:py-1 lg:w-[95%] px-3 border-l-2 border-[#00D1FF] rounded-r' />
            </div>
        </div>
    );
};

export default SearchUser;