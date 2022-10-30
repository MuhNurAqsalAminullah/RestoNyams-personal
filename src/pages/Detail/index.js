import React, { useEffect, useState } from 'react';
import ContentDetail from '../../components/ContentDetail';
import NavbarAll from '../../components/NavbarAll';
import Footer from '../../components/Footer';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Detail = () => {
    const { id } = useParams()
    const [detail, setDetail] = useState({})

    useEffect(() => {
        const fetchDetail = async () => {
            try{
                const {data: response} = await axios.get(`http://localhost:3006/restoran/${id}`)
                setDetail(response)
                console.log(response);
            }catch (error){
                console.log(error.message);
            }
        }
        fetchDetail()
    }, [id])
    return (
        <div>
            <NavbarAll />
            <main className='sm:pt-20 lg:pt-24'>
                <ContentDetail detail={detail} />
            </main>
            <Footer />
        </div>
    );
};

export default Detail;