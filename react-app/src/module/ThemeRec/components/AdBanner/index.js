import './adBanner.scss';

const AdBanner = ({ bannerData }) => {
  const { Img: {Src, Text} } = bannerData;
	return (
    <div className="c-adBanner">
      <img src={Src} alt={Text} />
    </div>
	);
}
 
export default AdBanner;