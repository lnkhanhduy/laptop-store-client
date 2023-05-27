import PropTypes from 'prop-types';
import MoreInfoLaptop from './MoreInfoLaptop/MoreInfoLaptop';
import MoreInfoEarphone from './MoreInfoEarphone/MoreInfoEarphone';
import MoreInfoSpeaker from './MoreInfoSpeaker/MoreInfoSpeaker';
import MoreInfoMouse from './MoreInfoMouse/MoreInfoMouse';
import MoreInfoKeyboard from './MoreInfoKeyboard/MoreInfoKeyboard';
import MoreInfoRAM from './MoreInfoRAM/MoreInfoRAM';
import MoreInfoROM from './MoreInfoROM/MoreInfoROM';
import MoreInfoScreen from './MoreInfoScreen/MoreInfoScreen';

function MoreInfo({ data }) {
  // eslint-disable-next-line no-lone-blocks
  {
    switch (data?.type) {
      case 'laptop':
        return <MoreInfoLaptop data={data} />;
      case 'earphone':
        return <MoreInfoEarphone data={data} />;
      case 'speaker':
        return <MoreInfoSpeaker data={data} />;
      case 'mouse':
        return <MoreInfoMouse data={data} />;
      case 'keyboard':
        return <MoreInfoKeyboard data={data} />;
      case 'ram':
        return <MoreInfoRAM data={data} />;
      case 'rom':
        return <MoreInfoROM data={data} />;
      case 'screen':
        return <MoreInfoScreen data={data} />;
      default:
        break;
    }
  }
}

MoreInfo.propTypes = {
  data: PropTypes.object,
};

export default MoreInfo;
