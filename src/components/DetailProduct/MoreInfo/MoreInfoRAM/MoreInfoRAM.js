import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './MoreInfoRAM.module.scss';

const cx = classNames.bind(styles);

function MoreInfoRAM({ data }) {
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
            <td>Thế hệ</td>
            <td>{data?.more_info && data.more_info[0]?.generation}</td>
          </tr>
          <tr>
            <td>Bus</td>
            <td>{data?.more_info && data.more_info[0]?.bus}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

MoreInfoRAM.propTypes = {
  data: PropTypes.object,
};

export default MoreInfoRAM;
