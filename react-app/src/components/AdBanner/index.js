import './adBanner.scss';

const AdBanner = (props) => {
  const {
    imageSrc = 'https://fakeimg.pl/720x1192/',
    imageAlt = 'ad',
  } = props;

	return (
    <div className="c-adBanner">
      <img src={imageSrc} alt={imageAlt} />
    </div>
	);
}
 
export default AdBanner;