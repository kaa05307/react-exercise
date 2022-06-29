import './pagination.scss';

const Pagination = ({item}) => {
	return (
		<ul className='c-pagination'>
      <li className='c-pagination__item is-prev'>&lt;</li>
      <li className='c-pagination__item is-active'>1</li>
      <li className='c-pagination__item'>/</li>
      <li className='c-pagination__item is-total'>{item}</li>
      <li className='c-pagination__item is-next'>&gt;</li>
    </ul>
	);
}
 
export default Pagination;