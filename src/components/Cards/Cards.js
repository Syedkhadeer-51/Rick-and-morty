import React from 'react';
import './Cards.css';

const Cards = ({results}) => {

    let display ;
    if(results){
       display = results.map((x)=>{
        console.log(results);
        let {id, image, name, status, location, species, gender} = x;
        return (
            <>
            <div className='col-lg-3 col-md-4 col-sm-6 m-3 character-card p-2 rounded d-flex flex-column' key={id}>
                 <img src={image} alt="character-img" className='img-fluid rounded mb-2'/>
                 <div className='content p-1'>
                 <div classname="character-name my-1">{name}</div>
                 <div className='my-1 text-white gender'> Gender :<span className='text-secondary'> {gender}</span></div>
                 <div className='location my-1'>Last location : <span className='text-secondary'>{location.name}</span></div>  
                    {(() => {
                        if (status === "Dead") {
                        return (
                            <div className='d-flex align-items-center'>
                                <div className='badge bg-danger my-1'>{status}</div>
                                <div className='small px-2'>: {species}</div>
                            </div>
                            
                            
                        );
                        } else if (status === "Alive") {
                        return (
                            <div className='d-flex align-items-center'>
                                <div className='badge bg-success my-1'>{status}</div>
                                <div className='small px-2'>: {species}</div>
                            </div>
                        );
                        } else {
                        return (
                            <div className='d-flex align-items-center'>
                                <div className='badge bg-secondary my-1'>{status}</div>
                                <div className='small px-2'>: {species}</div>
                            </div>
                        );
                        }
                    })()}
                </div>
            </div>
            </>
        )
       })  

    }else{
     display = <div className='text-white text-center'>No characters found</div>;
    }
  return (
    <>{display}</>
  )
}

export default Cards