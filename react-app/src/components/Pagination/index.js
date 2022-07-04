import './pagination.scss';

const Pagination = ({item}) => {
	return (
		<ul className='c-pagination'>
      <li className='c-pagination__item is-prev'><i className='o-icon o-icon--prev'></i></li>
      <li className='c-pagination__item is-active'>1</li>
      <li className='c-pagination__item'>/</li>
      <li className='c-pagination__item is-total'>{item}</li>
      <li className='c-pagination__item is-next'><i className='o-icon o-icon--next'></i></li>
    </ul>
	);
}
 
export default Pagination;