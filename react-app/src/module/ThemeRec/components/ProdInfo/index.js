import React, { useState, useEffect } from 'react';
import './prodInfo.scss';
import ProdInfoItem from '../../../../components/Object/ProdInfoItem';
import PropTypes from 'prop-types';

const ProdInfo = ({ infoData }) => {
  const [prodData, setProdData] = useState([]);

	useEffect(() => {
		const newData = infoData.map((item) => {
			switch (item.ExtraData.ElementType) {
				case 'Search':
					item.Link.Url = `https://ecshweb.pchome.com.tw/search/v3.3/?q=${item.Link.Url}`;
					break;
				case 'Store':
					item.Link.Url = `https://24h.pchome.com.tw/store/${item.Link.Url}`;
					break;
				case 'Prod':
					item.Link.Url = `https://24h.pchome.com.tw/prod/${item.Link.Url}`;
					break;
				default:
					break;
			}
			return item;
		})
		setProdData(newData)
	}, [infoData]);

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
        Sort: PropTypes.number,
      }),
    })
  ),
};
ProdInfo.defaultProps = {
  infoData: [],
  Id: null,
  Link: {},
  Text: undefined,
  Text1: undefined,
  Url: undefined,
  Img: {},
  Src: undefined,
  ExtraData: {},
  ElementType: undefined,
  Sort: null,
};

export default ProdInfo;