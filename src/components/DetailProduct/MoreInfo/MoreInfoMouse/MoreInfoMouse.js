import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './MoreInfoMouse.module.scss';

const cx = classNames.bind(styles);

function MoreInfoMouse({ data }) {
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
            <td>Độ phân giải</td>
            <td>{data?.more_info && data.more_info[0]?.dpi}</td>
          </tr>
          <tr>
            <td>Khối lượng</td>
            <td>{data?.more_info && data.more_info[0]?.weight}</td>
          </tr>

          <tr>
            <td>Độ dài dây/Khoảng cách kết nối</td>
            <td>{data?.more_info && data.more_info[0]?.distance_connector}</td>
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

MoreInfoMouse.propTypes = {
  data: PropTypes.object,
};

export default MoreInfoMouse;
