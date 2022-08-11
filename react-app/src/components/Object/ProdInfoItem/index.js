import PropTypes from 'prop-types';
import { getProdData } from '../../../utils/getProdData';
import './prodInfoItem.scss';

const ProdInfoItem = ({ ExtraData, Link, Img }) => {
	return (
		<div className='o-prodInfo'>
      <a href={getProdData(ExtraData.ElementType, Link.Url)} className='o-prodInfo__link'>
        <div className='o-prodInfo__flex'>
          <div className='o-prodInfo__head'>
            <div className='o-prodInfo__img'>
              <img src={`https://cs-a.ecimg.tw${Img.Src}`} alt='' />
            </div>
          </div>
          <div className='o-prodInfo__body'>
            <div className='o-prodInfo__title'>{Link.Text}</div>
            <div className='o-prodInfo__price'>${Number(Link.Text1)}</div>
          </div>
        </div>
      </a>
    </div>
	);
}

ProdInfoItem.propTypes = {
  Link: PropTypes.shape({
    Text: PropTypes.string,
    Text1: PropTypes.string,
    Url: PropTypes.string,
  }),
  Img: PropTypes.shape({
    Src: PropTypes.string,
  }),
};
ProdInfoItem.defaultProps = {
  Link: {
    Text: undefined,
    Text1: undefined,
    Url: undefined,
  },
  Img: {
    Src: undefined,
  },
};
 
export default ProdInfoItem;