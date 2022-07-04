import './adInfo.scss';

const AdInfo = () => {
  const keywordData = [
    {
			id: 1,
      name: '#羅技滑鼠下殺9折'
    },
    {
      id: 2,
      name: '#電競筆電'
    },
    {
      id: 3,
      name: '#電競椅',
    },
    {
      id: 4,
      name: '#Acer主機+電競耳麥優惠組'
    },
    {
      id: 5,
      name: '#2020喇叭耳機推薦指南'
    }
  ]
	const renderKeyword = () => {
    return keywordData.map((objData) => (
      <li key={objData.id}><a href="_"><span>{objData.name}</span></a></li>
    ));
  };

	return (
    <div className="c-adInfo">
      <div className="c-adInfo__tag">
        <span className='c-adInfo__text'>主題推薦</span>
      </div>
      <h3 className='c-adInfo__title'>3C 電競年終戰</h3>
      <ul className='c-adInfo__keyword'>
        {renderKeyword()}
      </ul>
    </div>
	);
}
 
export default AdInfo;