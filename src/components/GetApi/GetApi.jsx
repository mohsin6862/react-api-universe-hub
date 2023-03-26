import React, { useEffect, useState } from 'react';
import SingleData from '../SingleData/SingleData';

const GetApi = () => {
    const [data, setData]=useState([]);
    useEffect(()=>{
        fetch('https://openapi.programming-hero.com/api/ai/tools')
        .then(res=>res.json())
        .then(data => setData(data.data.tools))
    },[])
    return (
        <div className='grid grid-cols-3 gap-4'>
            {
                data.map((singleData)=> <SingleData data={singleData} key={singleData.id}></SingleData>)

            }
            
        </div>
    );
};

export default GetApi;