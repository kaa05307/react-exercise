import AdInfo from '../../components/AdInfo';
import AdBanner from '../../components/AdBanner';
import ProdInfo from '../../components/ProdInfo';
import Pagination from '../../components/Pagination';
import './themeRec.scss';

const ThemeRec = () => {
	const prodData = [
		{
			link: 'https://24h.pchome.com.tw/',
			imageSrc: 'https://fakeimg.pl/300/',
			imageAlt: 'ad',
			title: 'Tokuyo 新nano玩美椅 按摩椅TC-263 (全機保固1年)',
			price: '2156666',
		},
		{
			link: 'https://24h.pchome.com.tw/',
			imageSrc: 'https://fakeimg.pl/300/',
			imageAlt: 'ad',
			title: 'Tokuyo 新nano玩美椅 按摩椅TC-263 (全機保固1年)',
			price: '2156666',
		},
		{
			link: 'https://24h.pchome.com.tw/',
			imageSrc: 'https://fakeimg.pl/300/',
			imageAlt: 'ad',
			title: 'Tokuyo 新nano玩美椅 按摩椅TC-263 (全機保固1年)',
			price: '2156666',
		},
		{
			link: 'https://24h.pchome.com.tw/',
			imageSrc: 'https://fakeimg.pl/300/',
			imageAlt: 'ad',
			title: 'Tokuyo 新nano玩美椅 按摩椅TC-263 (全機保固1年)',
			price: '2156666',
		},
		{
			link: 'https://24h.pchome.com.tw/',
			imageSrc: 'https://fakeimg.pl/300/',
			imageAlt: 'ad',
			title: 'Tokuyo 新nano玩美椅 按摩椅TC-263 (全機保固1年)',
			price: '2156666',
		},
		{
			link: 'https://24h.pchome.com.tw/',
			imageSrc: 'https://fakeimg.pl/300/',
			imageAlt: 'ad',
			title: 'Tokuyo 新nano玩美椅 按摩椅TC-263 (全機保固1年)',
			price: '2156666',
		},
	]
	const renderProdItem = () => {
    return prodData.map((objData) => (
      <li className='c-themeRec__item'>
        <ProdInfo {...objData} />
      </li>
    ));
  };

	return (
		<div className="c-themeRec">
			<div className="c-themeRec__adInfo">
				<AdInfo />
				<AdBanner />
			</div>
			<div className="c-themeRec__prodInfo">
				<ul className='c-themeRec__list'>
						{renderProdItem()}
				</ul>
				<Pagination item={3} />
			</div>
		</div>
	);
}

export default ThemeRec;