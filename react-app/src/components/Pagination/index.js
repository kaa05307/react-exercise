import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './pagination.scss';

const Pagination = ({ totalPage }) => {
  const [active,setActive] = useState(1);
  const prevClick = () => {
    if(active === 1) {
      return
    }
    setActive(active - 1)
  }
  const nextClick = () => {
    if(active === totalPage) {
      return
    }
    setActive(active + 1)
  }

	return (
		<ul className='c-pagination'>
      <li className='c-pagination__item is-prev' onClick={prevClick}><i className='o-icon o-icon--prev'></i></li>
      <li className='c-pagination__item is-active'>{active}</li>
      <li className='c-pagination__item'>/</li>
      <li className='c-pagination__item is-total'>{totalPage}</li>
      <li className='c-pagination__item is-next' onClick={nextClick}><i className='o-icon o-icon--next'></i></li>
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