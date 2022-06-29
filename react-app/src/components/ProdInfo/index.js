import './prodInfo.scss';

const ProdInfo = (props) => {
  const {
    link = 'https://24h.pchome.com.tw/',
    imageSrc = 'https://fakeimg.pl/300/',
    imageAlt = 'ad',
    title = 'Tokuyo 新nano玩美椅 按摩椅TC-263 (全機保固1年)',
    price = '2156666',
  } = props;

	return (
		<div className='c-prodInfo'>
      <a href={link} className='c-prodInfo__link'>
        <div className='c-prodInfo__flex'>
          <div className='c-prodInfo__head'>
            <div className='c-prodInfo__img'>
              <img src={imageSrc} alt={imageAlt} />
            </div>
          </div>
          <div className='c-prodInfo__body'>
            <div className='c-prodInfo__title'>{title}</div>
            <div className='c-prodInfo__price'>${price}</div>
          </div>
        </div>
      </a>
    </div>
	);
}
 
export default ProdInfo;