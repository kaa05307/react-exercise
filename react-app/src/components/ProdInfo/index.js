import './prodInfo.scss';

const ProdInfo = (props) => {
  const {
    Id,
    Link,
    Img,
    ExtraData
  } = props;

	return (
		<div className='c-prodInfo'>
      <a href={Link.Url} className='c-prodInfo__link'>
        <div className='c-prodInfo__flex'>
          <div className='c-prodInfo__head'>
            <div className='c-prodInfo__img'>
              <img src={`https://cs-a.ecimg.tw${Img.Src}`} alt='' />
            </div>
          </div>
          <div className='c-prodInfo__body'>
            <div className='c-prodInfo__title'>{Link.Text}</div>
            <div className='c-prodInfo__price'>${Link.Text1}</div>
          </div>
        </div>
      </a>
    </div>
	);
}
 
export default ProdInfo;