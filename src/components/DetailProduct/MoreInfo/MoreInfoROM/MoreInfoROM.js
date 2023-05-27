import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './MoreInfoROM.module.scss';

const cx = classNames.bind(styles);

function MoreInfoROM({ data }) {
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
            <td>Dung lượng</td>
            <td>{data?.more_info && data.more_info[0]?.capacity}</td>
          </tr>
          <tr>
            <td>Kiểu ổ cứng</td>
            <td>{data?.more_info && data.more_info[0]?.type_rom}</td>
          </tr>
          <tr>
            <td>Kết nối</td>
            <td>{data?.more_info && data.more_info[0]?.connector}</td>
          </tr>
          <tr>
            <td>Tốc độ đọc</td>
            <td>{data?.more_info && data.more_info[0]?.speed_read}</td>
          </tr>
          <tr>
            <td>Tốc độ ghi</td>
            <td>{data?.more_info && data.more_info[0]?.speed_write}</td>
          </tr>
          <tr>
            <td>Kích thước</td>
            <td>{data?.more_info && data.more_info[0]?.size}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

MoreInfoROM.propTypes = {
  data: PropTypes.object,
};

export default MoreInfoROM;
