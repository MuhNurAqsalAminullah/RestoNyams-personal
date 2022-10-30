import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CardRestoran from '../../components/CardRestoran';
import Footer from '../../components/Footer';
import NavbarAll from '../../components/NavbarAll';
import SearchUser from '../../components/SearchUser';
import SideContent from '../../components/SideContent';

const AllRestoran = () => {
    const [dataResto, setDataResto] = useState([])
    const [userSearch, setUserSearch] = useState([])
    const [resto, setResto] = useState('')
    let history = useNavigate()

    useEffect(() => {
        const fetchData = async () => {
            try{
                const {data : response} = await axios.get('http://localhost:3006/restoran')
                setDataResto(response)
                setUserSearch(response)
            }catch (error){
                console.error(error.message)
            }
        }
        setDataResto(fetchData)
        setUserSearch(fetchData)
    }, [])

    const handleSearch = () => {
        const newData = dataResto
        .filter(x => x.nama_restoran  == (resto == '' ? x.nama_restoran : resto))
        console.log(resto);
        setUserSearch(newData)
    }

    const handleDetail = (id) => {
        history(`/detail/${id}`)
        console.log(id)
    }
    return (
        <div>
            <NavbarAll />
            <main className='sm:pt-20 '>
                <SearchUser handleSearch={handleSearch} setResto={setResto} />
                <h1>{resto}</h1>
                <div className='lg:flex lg:justify-between lg:mx-[100px] lg:gap-x-5 lg:mt-5'>
                    <CardRestoran handleDetail={handleDetail} userSearch={userSearch} />
                    <SideContent />
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default AllRestoran;