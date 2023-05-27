import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './MoreInfoEarphone.module.scss';

const cx = classNames.bind(styles);

function MoreInfoEarphone({ data }) {
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
            <td>Thời gian tai nghe</td>
            <td>{data?.more_info && data.more_info[0]?.time_earphone}</td>
          </tr>
          <tr>
            <td>Thời gian hộp sạc</td>
            <td>{data?.more_info && data.more_info[0]?.time_charging_box}</td>
          </tr>

          <tr>
            <td>Cổng sạc</td>
            <td>{data?.more_info && data.more_info[0]?.charging_port}</td>
          </tr>
          <tr>
            <td>Kích thước</td>
            <td>{data?.more_info && data.more_info[0]?.size}</td>
          </tr>
          <tr>
            <td>Khối lượng</td>
            <td>{data?.more_info && data.more_info[0]?.weight}</td>
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

MoreInfoEarphone.propTypes = {
  data: PropTypes.object,
};

export default MoreInfoEarphone;
