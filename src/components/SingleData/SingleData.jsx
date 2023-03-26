import React from 'react';

const SingleData = (props) => {
    console.log(props.data)
    const {image,features,name    }= props.data;
    return (
        <div>

<div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="">
    <h1>Features</h1>
    <h2 className="">{features}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default SingleData;