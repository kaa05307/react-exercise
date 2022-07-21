import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './pagination.scss';

const Pagination = ({ totalPage }) => {
  const [page,setPage] = useState(1);
  const atPageDecrease = () => {
    if(page === 1) {
      return;
    }
    setPage(page - 1);
  }
  const atPageIncrease = () => {
    if(page === totalPage) {
      return;
    }
    setPage(page + 1);
  }

	return (
		<ul className='c-pagination'>
      <li className='c-pagination__item is-prev' onClick={atPageDecrease}><i className='o-icon o-icon--prev'></i></li>
      <li className='c-pagination__item is-active'>{page}</li>
      <li className='c-pagination__item'>/</li>
      <li className='c-pagination__item is-total'>{totalPage}</li>
      <li className='c-pagination__item is-next' onClick={atPageIncrease}><i className='o-icon o-icon--next'></i></li>
    </ul>
	);
}

Pagination.propTypes = {
  totalPage: PropTypes.number,
};
Pagination.defaultProps = {
  totalPage: null,
};

export default Pagination;