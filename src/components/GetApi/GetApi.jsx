import React, { useEffect, useState } from 'react';
import Button from '../Button/Button';
import SingleData from '../SingleData/SingleData';

const GetApi = () => {
    const [data, setData]=useState([]);
    const [showAll ,setShowAll]=useState(false)
    const seeMoreBtn =()=>{
        setShowAll(true)

    }
    useEffect(()=>{
        fetch('https://openapi.programming-hero.com/api/ai/tools')
        .then(res=>res.json())
        .then(data => setData(data.data.tools))
    },[])
    return (
       <>
        <div className='grid grid-cols-3 gap-4'>
            {
                data.slice(0,showAll? 12 : 6).map((singleData)=> <SingleData data={singleData} key={singleData.id}></SingleData>)

            }
            
        </div>
        <span onClick={seeMoreBtn}>
        {
           !showAll && <Button>See More</Button>
        }
        </span>
       </>
        
    );
};

export default GetApi;