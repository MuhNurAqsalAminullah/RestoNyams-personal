import React from 'react';
import BannerHome from '../../components/BannerHome';
import ContentHome from '../../components/ContentHome';
import Footer from '../../components/Footer';
import NavbarHome from '../../components/NavbarHome';

const Home = () => {
    return (
        <div>
            <NavbarHome />
            <BannerHome />
            <ContentHome />
            <Footer />
        </div>
    );
};

export default Home;