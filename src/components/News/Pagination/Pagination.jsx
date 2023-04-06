import React from 'react';
import './Pagination.css';
import ReactPaginate from 'react-paginate';
import { useState } from 'react';
import { useSelector , useDispatch} from 'react-redux';
import { useSearchParams  , useNavigate} from 'react-router-dom';
import NewsPages from '../NewsPages/NewsPages';

import { setPageQuery } from '../../../features/news/newsSlice';

function Pagination() {

    const [itemOffset, setItemOffset] = useState(0);
    const [params] = useSearchParams()
    const [numberOfPage] = useState(params.get('page'))
    const dispatch = useDispatch();
    const navigate = useNavigate()
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
        `User requested page number ${event.selected+1}, which is offset ${newOffset}`
      );
      dispatch(setPageQuery(event.selected+1))
      navigate(`/news?page=${event.selected+1}`)
      setItemOffset(newOffset);
    };


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