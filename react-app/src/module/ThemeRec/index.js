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
	const [themeData, setThemeData] = useState([]);
	const [themeDataId, setThemeDataId] = useState(1);

	const handleToolBarClick = (themeData, themeId) => {
    console.log(themeId);
		setThemeData(themeData.Nodes);
		setThemeDataId(themeId);
		setPage(1);
  };
	
	useEffect(() => {
		_axios.get('/index/stage/v1/data&27655702')
			.then((res) => {
				console.log('res: ', res);
				// setData(res.data.window1.Blocks[0].Nodes);
				setData(res.data.window.Blocks); // [{},{},{},{}]
				setThemeData(res.data.window.Blocks[0].Nodes); // default
			})
			.catch((err) => console.log(err))
	}, []);

	return (
		<div className="c-themeRec">
		{console.log('data: ', data)}
		{console.log('themeData: ', themeData)}
			<div className="c-themeRec__adInfo" style={{backgroundColor: themeData[0]?.Link?.Background}}>
				<AdInfo infoData={themeData[0]} keywordData={themeData.slice(1, 6)} />
				<AdBanner bannerData={themeData[0]} />
			</div>
			<div className="c-themeRec__prodInfo">
				<ProdInfo infoData={themeData.slice(6, 24)} page={page} />
				<Pagination totalPage={(themeData.slice(6, 24).length)/6} page={page} setPage={setPage} />
			</div>
			<div className="c-themeRec__toolBar">
				<ul className="c-themeRec__toolBarList">
					{
						data.map((objData) => (
							<li onClick={() => handleToolBarClick(objData, objData.BlockId)} key={objData.BlockId}>
								<button type="button" className={`c-themeRec__toolBarBtn ${objData.BlockId === themeDataId ? "is-active" : ""}`}>{objData.Nodes[0].Link.Text}</button>
							</li>
						))
					}
				</ul>
			</div>
		</div>
	);
}

export default ThemeRec;