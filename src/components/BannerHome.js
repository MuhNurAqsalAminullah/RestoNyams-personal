const BannerHome = () => {
    return (
        <div className='bg-img-custome sm:h-[200px] md:h-[250px] lg:h-[350px] flex flex-col items-center justify-center'>
            <div className=''>
                <h1 className='sm:text-4xl md:text-5xl lg:text-7xl text-white text-center'>Resto<span className='font-bold font-["Signika"] text-[#00D1FF]'>Nyams</span></h1>
                <p className='sm:text-sm md:text-base lg:text-xl text-white text-center'>Temukan restoran dan makanan minuman favorite anda</p>
            </div>
        </div>
    );
};

export default BannerHome;