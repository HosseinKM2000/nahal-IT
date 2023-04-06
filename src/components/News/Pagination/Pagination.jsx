import React from 'react';
import './Pagination.css';
import ReactPaginate from 'react-paginate';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import NewsPages from '../NewsPages/NewsPages';

function Pagination() {

    const [itemOffset, setItemOffset] = useState(0);
    const mobile = window.innerWidth <= 425 ? true : false;
    const itemsPerPage = 12;
    const news = useSelector(state => state.news.news);

    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = news.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(news.length / itemsPerPage);
  

    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % news.length;
      console.log(
        `User requested page number ${event.selected}, which is offset ${newOffset}`
      );
      setItemOffset(newOffset);
    };
    console.log(window.innerWidth)


  return (
    <>
    <NewsPages currentItems={currentItems} />
    <ReactPaginate
      breakLabel="..."
      nextLabel={mobile ? '>>' : "برگه بعدی >>"}
      onPageChange={handlePageClick}
      pageRangeDisplayed={5}
      pageCount={pageCount}
      previousLabel={mobile ? '<<' : "<< برگه قبلی"}
      renderOnZeroPageCount={null}
      className='pagination'
      activeClassName='active'
      previousClassName='preBtn'
      nextClassName='nextBtn'
    />
  </>
  )
}

export default Pagination;