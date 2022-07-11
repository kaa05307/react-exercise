import './adBanner.scss';

const AdBanner = (props) => {
  const {data} = props;

	return (
    <div className="c-adBanner">
      <img src={data[0].Img.Src} alt={data[0].Img.Text} />
    </div>
	);
}
 
export default AdBanner;