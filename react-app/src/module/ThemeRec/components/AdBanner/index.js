import './adBanner.scss';
import PropTypes from 'prop-types';

const AdBanner = ({ bannerData }) => {
  const { Img: {Src, Text} } = bannerData;
	return (
    <div className="c-adBanner">
      <img src={`https://fs-a.ecimg.tw/${Src}`} alt={Text} />
    </div>
	);
}

AdBanner.propTypes = {
  bannerData: PropTypes.shape({
    Img: PropTypes.shape({
      Src: PropTypes.string,
      Text: PropTypes.string,
    }),
  }),
};
AdBanner.defaultProps = {
  bannerData: {
    Img: {
      Src: undefined,
      Text: undefined,
    },
  },
};

export default AdBanner;