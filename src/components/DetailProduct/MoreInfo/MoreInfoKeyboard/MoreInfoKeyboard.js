import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './MoreInfoKeyboard.module.scss';

const cx = classNames.bind(styles);

function MoreInfoKeyboard({ data }) {
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
            <td>Tương thích</td>
            <td>{data?.more_info && data.more_info[0]?.OS}</td>
          </tr>
          <tr>
            <td>Số phím</td>
            <td>{data?.more_info && data.more_info[0]?.keys_number}</td>
          </tr>
          <tr>
            <td>Loại switch</td>
            <td>{data?.more_info && data.more_info[0]?.keys_switch}</td>
          </tr>
          <tr>
            <td>Đèn led</td>
            <td>{data?.more_info && data.more_info[0]?.led}</td>
          </tr>
          <tr>
            <td>Kích thước</td>
            <td>{data?.more_info && data.more_info[0]?.size}</td>
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

MoreInfoKeyboard.propTypes = {
  data: PropTypes.object,
};

export default MoreInfoKeyboard;
