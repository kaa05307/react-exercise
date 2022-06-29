import './adBanner.scss';

const AdBanner = (props) => {
  const {
    imageSrc = 'https://fakeimg.pl/720x1192/',
    imageAlt = 'ad',
  } = props;

	return (
    <img src={imageSrc} alt={imageAlt} />
	);
}
 
export default AdBanner;