import React from 'react';

const SingleData = (props) => {
    console.log(props.data)
    const {image,features,name    }= props.data;
    return (
        <div>

<div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Features</h2>

    {
        features.map((feature,index)=>(<p>{index +1}. {feature}</p>))
        
    }
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default SingleData;