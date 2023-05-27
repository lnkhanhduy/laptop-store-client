import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './MoreInfoScreen.module.scss';

const cx = classNames.bind(styles);

function MoreInfoScreen({ data }) {
  const technology = data?.more_info && data.more_info[0]?.technology.split(',');
  const connector = data?.more_info && data.more_info[0]?.connector.split(',');

  return (
    <div className={cx('more-info')}>
      <p>Thông tin chi tiết</p>
      <table>
        <tbody>
          <tr>
            <td>Loại màn hình</td>
            <td>{data?.more_info && data.more_info[0]?.type_screen}</td>
          </tr>
          <tr>
            <td>Kích thước màn hình</td>
            <td>{data?.more_info && data.more_info[0]?.inch}</td>
          </tr>
          <tr>
            <td>Độ phân giải</td>
            <td>{data?.more_info && data.more_info[0]?.resolution}</td>
          </tr>
          <tr>
            <td>Màn hình cảm ứng</td>
            <td>{data?.more_info && data.more_info[0]?.touch}</td>
          </tr>
          <tr>
            <td>Tấm nền</td>
            <td>{data?.more_info && data.more_info[0]?.background_panels}</td>
          </tr>
          <tr>
            <td>Tần số quét</td>
            <td>{data?.more_info && data.more_info[0]?.sweep_frequency}</td>
          </tr>
          <tr>
            <td>Số lượng màu</td>
            <td>{data?.more_info && data.more_info[0]?.color_number}</td>
          </tr>
          <tr>
            <td>Công nghệ màn hình</td>
            <td>
              {technology.map((item, index) => {
                return <li key={index}>{item}</li>;
              })}
            </td>
          </tr>
          <tr>
            <td>Kết nối</td>
            <td>
              {connector.map((item, index) => {
                return <li key={index}>{item}</li>;
              })}
            </td>
          </tr>
          <tr>
            <td>Công suất tiêu thụ điện</td>
            <td>{data?.more_info && data.more_info[0]?.wattage}</td>
          </tr>
          <tr>
            <td>Kích thước</td>
            <td>{data?.more_info && data.more_info[0]?.size}</td>
          </tr>
          <tr>
            <td>Khối lượng</td>
            <td>{data?.more_info && data.more_info[0]?.weight}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

MoreInfoScreen.propTypes = {
  data: PropTypes.object,
};

export default MoreInfoScreen;
