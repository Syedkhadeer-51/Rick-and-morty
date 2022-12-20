import React, { useState, useEffect } from 'react'
import './App.css';
import Filter from './components/Filter/Filter';
import Cards from './components/Cards/Cards';
import Pagination from './components/Pagination/Pagination';
import Search from './components/Search/Search';
import Navbar from './components/Navbar/Navbar';

import {BrowserRouter as Router, Routes, RouteProps, Route} from 'react-router-dom'
import Episodes from './Pages/Episodes';
import Location from './Pages/Location';

function App (){
  return(
    <Router>
      <div className='App'>
        <Navbar/>
      </div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/episodes' element={<Episodes/>}/>
        <Route path='/location' element={<Location/>}/>

      </Routes>
    </Router>
  )
}


const Home = () => {
  let [pageNumber, setPageNumber] = useState(1);
  let [fetchedData, updateFetchedData] = useState([]);
  let [search, setSearch] = useState("");

  let {info, results } = fetchedData;

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;

  useEffect(() => {
    // iife
    (async function (){
      let data = await fetch(api).then((res)=>
        res.json());
        updateFetchedData(data);
    })();
  }, [api])
  
  return (
    <div className="App">
      <div className='row d-flex justify-content-center'>
        <h1 className='text-center text-white mt-4'>Rick and Morty</h1>
        <p className='description text-secondary col-10 my-3 text-center'>Rick, an alcoholic sociopath and scientist, lives with his daughter Beth's family. Apart from building gadgets, he takes his morally right but dimwit grandson Morty on absurd intergalactic adventures.</p>
      </div>
    
      <h4 className='text-center text-secondary'> A Fanpage by <span className='text-warning'><a href='https://syedkhadeer-51.github.io/Portfoliowebsite/' className='text-decoration-none'>Syed <i class="fa fa-link fs-5"></i></a></span></h4>
      <Search setSearch={setSearch} setPageNumber={setPageNumber}/>
        <div className='row d-flex justify-content-center'>
          <Cards results={results}/>
        </div>
        <Pagination setPageNumber ={setPageNumber} pageNumber={pageNumber} info={info}/>
    </div>
  );
}

export default App;
