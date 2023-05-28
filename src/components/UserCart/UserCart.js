import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './UserCart.module.scss';
import CartItem from './CartItem/CartItem';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function UserCart({ data }) {
  return (
    <div className={cx('user-cart')}>
      <div className={cx('header')}>
        <div className={cx('products')}>
          <input type="checkbox" />
          <span>Sản phẩm</span>
        </div>

        <div className={cx('info')}>
          <span className={cx('info-item')}>Đơn giá</span>
          <span className={cx('info-item')}>Số lượng</span>
          <span className={cx('info-item')}>Số tiền</span>
          <span className={cx('info-item')}>Thao tác</span>
        </div>
      </div>

      <div className={cx('content')}>
        {data?.map((product, index) => {
          return <CartItem key={index} data={product} />;
        })}
      </div>

      <div className={cx('buy')}>
        <div className={cx('left')}>
          <input type="checkbox" />
          <span>Chọn tất cả</span>
        </div>
        <div className={cx('right')}>
          <p>Tổng thanh toán&nbsp;</p>
          <span>():&nbsp;</span>
          <span className={cx('price')}></span>
          <Link>Mua hàng</Link>
        </div>
      </div>
    </div>
  );
}

UserCart.propTypes = {
  data: PropTypes.array,
};

export default UserCart;
