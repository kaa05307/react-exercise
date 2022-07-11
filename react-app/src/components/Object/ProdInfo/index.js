import './prodInfo.scss';

const ProdInfo = ({ Link, Img }) => {
	return (
		<div className='o-prodInfo'>
      <a href={Link.Url} className='o-prodInfo__link'>
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
 
export default ProdInfo;