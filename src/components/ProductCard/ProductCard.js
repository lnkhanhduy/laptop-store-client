import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './ProductCard.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function formatMoney(value) {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value);
}

function ProductCard({ data }) {
  return (
    <Link className={cx('product')} to={`/product/${data?._id}`}>
      <div className={cx('header')}>
        <img src={data?.images[0]?.path} alt={data?.type_product} />
      </div>
      <div className={cx('content')}>
        <div className={cx('name')}>{data?.name}</div>

        <div className={cx('more-info')}>
          {data?.type_product === 'laptop' && (
            <>
              <span className={cx('more-info-item')}>{data?.more_info[0].screen.split(' ')[0]}</span>
              <span className={cx('more-info-item')}>{data?.more_info[0].RAM.split(' ')[0]}</span>
              <span className={cx('more-info-item')}>{data?.more_info[0].ROM}</span>
            </>
          )}

          {data?.type_product === 'earphone' && (
            <>
              <span className={cx('more-info-item')}>{data?.more_info[0].charging_port}</span>
              <span className={cx('more-info-item')}>{data?.more_info[0].connector}</span>
            </>
          )}

          {data?.type_product === 'mouse' && (
            <>
              <span className={cx('more-info-item')}>{data?.more_info[0].dpi}</span>
              <span className={cx('more-info-item')}>{data?.more_info[0].connector}</span>
            </>
          )}

          {data?.type_product === 'keyboard' && (
            <>
              <span className={cx('more-info-item')}>{data?.more_info[0].keys_number} phím</span>
              <span className={cx('more-info-item')}>{data?.more_info[0].keys_switch}</span>
              <span className={cx('more-info-item')}>{data?.more_info[0].connector}</span>
            </>
          )}

          {data?.type_product === 'screen' && (
            <>
              <span className={cx('more-info-item')}>{data?.more_info[0].inch}</span>
              <span className={cx('more-info-item')}>{data?.more_info[0].resolution.split(' ')[0]}</span>
              <span className={cx('more-info-item')}>{data?.more_info[0].sweep_frequency}</span>
            </>
          )}

          {data?.type_product === 'ram' && (
            <>
              <span className={cx('more-info-item')}>{data?.more_info[0].capacity}</span>
              <span className={cx('more-info-item')}>{data?.more_info[0].generation}</span>
              <span className={cx('more-info-item')}>{data?.more_info[0].bus}</span>
            </>
          )}

          {data?.type_product === 'rom' && (
            <>
              <span className={cx('more-info-item')}>{data?.more_info[0].capacity}</span>
              <span className={cx('more-info-item')}>{data?.more_info[0].type_rom}</span>
              <span className={cx('more-info-item')}>{data?.more_info[0].connector}</span>
            </>
          )}
        </div>

        <div className={cx('price')}>
          {/* <div className={cx('old-price')}>
            <span className={cx('text')}>6.499.000₫</span>
            <span className={cx('percent')}>-16%</span>
          </div> */}

          <span className={cx('new-price')}>{formatMoney(data.price)}</span>
        </div>

        {/* <div className={cx('rating')}>
          <div className={cx('star')}>
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </div>
          <span className={cx('total-rating')}>70</span>
        </div> */}
      </div>
    </Link>
  );
}

ProductCard.propTypes = {
  data: PropTypes.object,
};

export default ProductCard;
