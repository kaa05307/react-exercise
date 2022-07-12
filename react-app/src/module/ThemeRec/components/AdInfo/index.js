import './adInfo.scss';

const AdInfo = ({ infoData, keywordData }) => {
  keywordData.map((item) => {
    if(item.ExtraData.ElementType === 'Search'){
      item.Link.Url = `https://ecshweb.pchome.com.tw/search/v3.3/?q=${item.Link.Text}`;
    }
    return item;
  })

	return (
    <div className="c-adInfo">
      <div className="c-adInfo__tag">
        <span className='c-adInfo__text'>主題推薦</span>
      </div>
      <h3 className='c-adInfo__title'>{infoData.Link.Text2}</h3>
      <ul className='c-adInfo__keyword'>
        {
          keywordData.map((objData) => (
            <li key={objData.Id}><a href={objData.Link.Url}><span>{objData.Link.Text}</span></a></li>
          ))
        }
      </ul>
    </div>
	);
}
 
export default AdInfo;