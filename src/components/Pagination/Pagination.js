import React from 'react';
import ReactPaginate from 'react-paginate';
import './Pagination.css'

const Pagination = ({ setPageNumber, pageNumber, info }) => {
  return (
    <ReactPaginate
     className='text-white pagination justify-content-center gap-3 my-3'
     pageCount={info?.pages}
     nextLabel="Next" 
     previousLabel="Prev"
     nextClassName='btn btn-secondary page-btn'
     previousClassName='btn btn-secondary page-btn'
     pageClassName='page-item'
     pageLinkClassName='page-link'
     activeClassName='active'
     onPageChange={(data)=>{
     setPageNumber(data.selected + 1);
     }}
     />
  );
};

export default Pagination