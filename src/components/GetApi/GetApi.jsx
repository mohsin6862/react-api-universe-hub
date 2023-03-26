import React, { useEffect, useState } from 'react';

const GetApi = () => {
    const [data, setData]=useState([]);
    useEffect(()=>{
        fetch('https://openapi.programming-hero.com/api/ai/tools')
        .then(res=>res.json())
        .then(data => setData(data.data.tools))
    },[])
    return (
        <div>
            {
                data.map(singleData => console.log(singleData))

            }
            
        </div>
    );
};

export default GetApi;