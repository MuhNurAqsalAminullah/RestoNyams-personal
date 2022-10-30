import React from 'react';

const SideContent = () => {
    return (
        <div className='sm:mx-5 sm:mt-10 md:flex md:justify-between md:gap-x-5 lg:flex-col lg:justify-start lg:w-[35%] lg:mt-5 lg:gap-x-0 lg:mx-0'>
            <div className='md:w-1/2 lg:w-full'>
                <img src={require('../../assets/Image/Images/posters4.jpg')} className='lg:w-full' alt="" />
                <br />
                <img src={require('../../assets/Image/Images/posters5.jpg')} className='lg:w-full' alt="" />
            </div>
            <div className='sm:mb-6 sm:mt-5 md:w-1/2 md:mt-0 lg:mt-5 lg:w-fit'>
                <h6 className='sm:text-xl text-[#454545] sm:mb-3 font-semibold'>Blog Ringkasan</h6>
                <div className='bg-white shadow-custome'>
                    <img src={require('../../assets/Image/Images/blogimg.jpg')} className='lg:w-full' alt="" />
                    <div className='sm:px-3 sm:py-3 '>
                        <h6 className='font-bold sm:text-xl text-[#01CBFF]'>Restoran Keren</h6>
                        <p className='sm:text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis soluta eum, aspernatur ut animi molestiae eveniet alias pariatur ipsa tempore? Commodi eligendi in, optio praesentium ipsum cumque non perferendis tenetur.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SideContent;
// w-[35%]