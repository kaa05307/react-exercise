import AdInfo from '../../components/AdInfo';
import AdBanner from '../../components/AdBanner';
import ProdInfo from '../../components/ProdInfo';
import Pagination from '../../components/Pagination';
import './themeRec.scss';

const ThemeRec = () => {
	return (
		<div className="c-themeRec">
			<div className="c-themeRec__adInfo">
				<AdInfo />
				<AdBanner />
			</div>
			<div className="c-themeRec__prodInfo">
				<ProdInfo />
				<Pagination item={3} />
			</div>
		</div>
	);
}

export default ThemeRec;