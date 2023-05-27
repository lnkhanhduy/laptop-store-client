import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './MoreInfoSpeaker.module.scss';

const cx = classNames.bind(styles);

function MoreInfoSpeaker({ data }) {
  return (
    <div className={cx('more-info')}>
      <p>Thông tin chi tiết</p>
      <table>
        <tbody>
          <tr>
            <td>Thương hiệu</td>
            <td>{data?.brand}</td>
          </tr>
          <tr>
            <td>Tổng công suất</td>
            <td>{data?.more_info && data.more_info[0]?.wattage}</td>
          </tr>
          <tr>
            <td>Thời gian sử dụng</td>
            <td>{data?.more_info && data.more_info[0]?.used_time}</td>
          </tr>

          <tr>
            <td>Kích thước</td>
            <td>{data?.more_info && data.more_info[0]?.size}</td>
          </tr>
          <tr>
            <td>Kết nối</td>
            <td>{data?.more_info && data.more_info[0]?.connector}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

MoreInfoSpeaker.propTypes = {
  data: PropTypes.object.isRequired,
};

export default MoreInfoSpeaker;
