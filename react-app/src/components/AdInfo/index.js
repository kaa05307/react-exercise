import './adInfo.scss';

const AdInfo = (props) => {
  const {
    imageSrc = 'https://fakeimg.pl/720x1192/',
    imageAlt = 'ad',
  } = props;

	return (
    <img src={imageSrc} alt={imageAlt} />
	);
}
 
export default AdInfo;