import React from 'react';
import { useState, useEffect } from 'react';
import Cards from '../components/Cards/Cards';
import InputGroup from "../components/Filter/category/InputGroup";

const Episodes = () => {    
    let [id, setId] = useState(1);
    let [results, setResults] = React.useState([]);
    const [info, setInfo] = useState([]);
    let { air_date, episode, name } = info



    let api = `https://rickandmortyapi.com/api/episode/${id}`;

    useEffect(() => {
      (async function(){
        let data = await fetch(api).then((res) => res.json());
        setInfo(data);


        let a = await Promise.all(
            data.characters.map((x)=>{
                return fetch(x).then((res) => res.json())
            })
        );
        setResults(a);
      })();
    
    }, [api])
    
  return (
    <div className='container'>
        <div className='row my-3'>
            <h1 className='text-center text-white mb-3'>Episode : <span className='text-warning'>{name === "" ? "Unknown" : name}</span></h1>
            <h5 className='text-center text-white'>Air Date {air_date === "" ? "Unknown" : air_date}</h5>
        </div>
        <div className='row'>
            <div className='col-lg-3 col-12'>
                <h4 className='text-white mb-3'>Pick Episodes</h4>
                <InputGroup name="Episode" changeID={setId} total={51} />
            </div>
            <div className='col-lg-9 col-12 '>
                <div className='row d-flex justify-content-center'>
                <Cards page="/episodes/" results={results} />
                </div>
            </div>

        </div>
    </div>
  )
}

export default Episodes