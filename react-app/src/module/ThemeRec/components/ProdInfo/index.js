import React, { useState, useEffect } from 'react';
import './prodInfo.scss';
import ProdInfoItem from '../../../../components/Object/ProdInfoItem';
import PropTypes from 'prop-types';

const ProdInfo = ({ infoData, page }) => {
  const [prodData, setProdData] = useState([]);
  const PER_PAGE_NUMBER = 6;
  
	useEffect(() => {
    let pageData = infoData.slice((page * PER_PAGE_NUMBER) - PER_PAGE_NUMBER, page * PER_PAGE_NUMBER);
		setProdData(pageData)
	}, [infoData, page]);

	return (
    <ul className='c-prodInfo'>
      {
        prodData.map((objData) => (
          <li key={objData.Id} className='c-prodInfo__item'>
            <ProdInfoItem {...objData} />
          </li>
        ))
      }
    </ul>
	);
}

ProdInfo.propTypes = {
  infoData: PropTypes.arrayOf(
    PropTypes.shape({
      Id: PropTypes.number,
      Link: PropTypes.shape({
        Text: PropTypes.string,
        Text1: PropTypes.string,
        Url: PropTypes.string,
      }),
      Img: PropTypes.shape({
        Src: PropTypes.string,
      }),
      ExtraData: PropTypes.shape({
        ElementType: PropTypes.string,
        Sort: PropTypes.any,
      }),
    })
  ),
  page: PropTypes.number,
};
ProdInfo.defaultProps = {
  infoData: [
    {
      Id: null,
      Link: {
        Text: undefined,
        Text1: undefined,
        Url: undefined,
      },
      Img: {
        Src: undefined,
      },
      ExtraData: {
        ElementType: undefined,
        Sort: null,
      },
    }
  ],
  page: null,
};

export default ProdInfo;