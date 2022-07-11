import './adBanner.scss';

const AdBanner = ({ bannerData }) => {
	return (
    <div className="c-adBanner">
      <img src={bannerData.Img.Src} alt={bannerData.Img.Text} />
    </div>
	);
}
 
export default AdBanner;