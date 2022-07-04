import React, {useState} from 'react';
import './pagination.scss';

const Pagination = () => {
  const [active,setActive] = useState(1);
  const [total,setTotal] = useState(3);

	return (
		<ul className='c-pagination'>
      <li className='c-pagination__item is-prev'><i className='o-icon o-icon--prev'></i></li>
      <li className='c-pagination__item is-active'>{active}</li>
      <li className='c-pagination__item'>/</li>
      <li className='c-pagination__item is-total'>{total}</li>
      <li className='c-pagination__item is-next'><i className='o-icon o-icon--next'></i></li>
    </ul>
	);
}

export default Pagination;