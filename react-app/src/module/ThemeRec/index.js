import React, { useState, useEffect } from 'react';
import AdInfo from './components/AdInfo';
import AdBanner from './components/AdBanner';
import ProdInfo from './components/ProdInfo';
import Pagination from '../../components/Pagination';
// import { data1 } from '../../data1';
import _axios from 'axios';
import './themeRec.scss';

const ThemeRec = () => {
	const [page, setPage] = useState(1);
	const [data, setData] = useState([]);

	useEffect(() => {
		_axios.get('/index/stage/v1/data&27655702')
			.then((res) => {
				setData(res.data.window1.Blocks[0].Nodes);
			})
			.catch((err) => console.log(err))
	}, []);

	return (
		<div className="c-themeRec">
			<div className="c-themeRec__adInfo" style={{backgroundColor: data[0]?.Link?.Background}}>
				<AdInfo infoData={data[0]} keywordData={data.slice(1, 6)} />
				<AdBanner bannerData={data[0]} />
			</div>
			<div className="c-themeRec__prodInfo">
				<ProdInfo infoData={data.slice(6, 24)} page={page} />
				<Pagination totalPage={(data.slice(6, 24).length)/6} page={page} setPage={setPage} />
			</div>
		</div>
	);
}

export default ThemeRec;