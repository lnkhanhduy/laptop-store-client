import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './MoreInfoLaptop.module.scss';

const cx = classNames.bind(styles);

function MoreInfoLaptop({ data }) {
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
            <td>Bảo hành</td>
            <td>{data?.more_info && data.more_info[0]?.guarantee}</td>
          </tr>
          <tr>
            <td colSpan={2}>Thông tin chung</td>
          </tr>
          <tr>
            <td>Series laptop</td>
            <td>{data?.more_info && data.more_info[0]?.series}</td>
          </tr>
          <tr>
            <td>Màu sắc</td>
            <td>{data?.more_info && data.more_info[0]?.color}</td>
          </tr>
          <tr>
            <td colSpan={2}>Cấu hình chi tiết</td>
          </tr>
          <tr>
            <td>Thế hệ CPU</td>
            <td>{data?.more_info && data.more_info[0]?.CPU_Generation}</td>
          </tr>
          <tr>
            <td>CPU</td>
            <td>{data?.more_info && data.more_info[0]?.CPU}</td>
          </tr>
          <tr>
            <td>RAM</td>
            <td>{data?.more_info && data.more_info[0]?.RAM}</td>
          </tr>
          <tr>
            <td>Màn hình</td>
            <td>{data?.more_info && data.more_info[0]?.screen}</td>
          </tr>
          <tr>
            <td>Lưu trữ</td>
            <td>{data?.more_info && data.more_info[0]?.ROM}</td>
          </tr>
          <tr>
            <td>Cổng kết nối</td>
            <td>{data?.more_info && data.more_info[0]?.connector}</td>
          </tr>
          <tr>
            <td>Kết nối không dây</td>
            <td>{data?.more_info && data.more_info[0]?.wireless_connector}</td>
          </tr>
          <tr>
            <td>Bàn phím</td>
            <td>{data?.more_info && data.more_info[0]?.keyboard}</td>
          </tr>
          <tr>
            <td>Hệ điều hành</td>
            <td>{data?.more_info && data.more_info[0]?.OS}</td>
          </tr>
          <tr>
            <td>Kích thước</td>
            <td>{data?.more_info && data.more_info[0]?.size}</td>
          </tr>
          <tr>
            <td>Pin</td>
            <td>{data?.more_info && data.more_info[0]?.battery}</td>
          </tr>
          <tr>
            <td>Khối lượng</td>
            <td>{data?.more_info && data.more_info[0]?.weight}</td>
          </tr>
          <tr>
            <td colSpan={2}>Thông tin khác</td>
          </tr>
          <tr>
            <td>Bảo mật</td>
            <td>{data?.more_info && data.more_info[0]?.security}</td>
          </tr>
          <tr>
            <td>Đèn LED trên máy</td>
            <td>{data?.more_info && data.more_info[0]?.led}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

MoreInfoLaptop.propTypes = {
  data: PropTypes.object,
};

export default MoreInfoLaptop;
