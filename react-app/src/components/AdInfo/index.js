import './adInfo.scss';

const AdInfo = (props) => {
  const { data } = props;

	return (
    <div className="c-adInfo">
      <span className="c-adInfo__tag">主題推薦</span>
      <h3 className='c-adInfo__title'>3C 電競年終戰</h3>
      <ul className='c-adInfo__keyword'>
        <li><a href="_">#羅技滑鼠下殺9折</a></li>
        <li><a href="_">#電競筆電</a></li>
        <li><a href="_">#電競椅</a></li>
        <li><a href="_">#Acer主機+電競耳麥優惠組</a></li>
        <li><a href="_">#2020喇叭耳機推薦指南</a></li>
      </ul>
    </div>
	);
}
 
export default AdInfo;