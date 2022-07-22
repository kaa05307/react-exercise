import React from 'react';
import AdInfo from './components/AdInfo';
import AdBanner from './components/AdBanner';
import ProdInfo from './components/ProdInfo';
import Pagination from '../../components/Pagination';
import { data1 } from '../../data1';
import './themeRec.scss';

const ThemeRec = () => {
	const data = data1.window1.Blocks[0].Nodes;

	return (
		<div className="c-themeRec">
			<div className="c-themeRec__adInfo" style={{backgroundColor: data[0].Link.Background}}>
				<AdInfo infoData={data[0]} keywordData={data.slice(1, 6)} />
				<AdBanner bannerData={data[0]} />
			</div>
			<div className="c-themeRec__prodInfo">
				<ProdInfo infoData={data.slice(6, 24)} />
				<Pagination totalPage={(data.slice(6, 24).length)/6} />
			</div>
		</div>
	);
}

export default ThemeRec;