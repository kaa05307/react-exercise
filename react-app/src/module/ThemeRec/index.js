import React, { useState, useEffect } from 'react';
import AdInfo from './components/AdInfo';
import AdBanner from './components/AdBanner';
import ProdInfo from '../../components/Object/ProdInfo';
import Pagination from '../../components/Pagination';
import { data } from '../../data';
import './themeRec.scss';

const ThemeRec = () => {
	const [prodData, setProdData] = useState(data.slice(6, 24));
	
	useEffect(() => {
		prodData.map((item) => {
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
		setProdData(prodData)
	}, [prodData]);
	
	return (
		<div className="c-themeRec">
			<div className="c-themeRec__adInfo" style={{backgroundColor: data[0].Link.Background}}>
				<AdInfo infoData={data[0]} keywordData={data.slice(1, 6)} />
				<AdBanner bannerData={data[0]} />
			</div>
			<div className="c-themeRec__prodInfo">
				<ul className='c-themeRec__list'>
					{
						prodData.map((objData) => (
							<li key={objData.Id} className='c-themeRec__item'>
								<ProdInfo {...objData} />
							</li>
						))
					}
				</ul>
				<Pagination totalPage={(data.slice(6, 24).length)/6} />
			</div>
		</div>
	);
}

export default ThemeRec;