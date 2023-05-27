import classNames from 'classnames/bind';
import styles from './UserCart.module.scss';
import CartItem from './CartItem/CartItem';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const cx = classNames.bind(styles);

function UserCart() {
  const [checkAll, setCheckAll] = useState(false);

  const onClickCheckBox = (e) => {


    if (e.target.checked) {
      e.target.checked = false;
    } else {
      e.target.checked = true;
    }
  };

  const handleOnClickCheckAll = (e) => {
    setCheckAll(!checkAll);
  };

  return (
    <div className={cx('user-cart')}>
      <div className={cx('header')}>
        <div className={cx('products')}>
          <input type="checkbox" onClick={handleOnClickCheckAll} checked={checkAll} />
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
        <CartItem onClickCheckBox={onClickCheckBox} checkAll={checkAll} />
        <CartItem onClickCheckBox={onClickCheckBox} checkAll={checkAll} />
      </div>

      <div className={cx('buy')}>
        <div className={cx('left')}>
          <input type="checkbox" onClick={handleOnClickCheckAll} checked={checkAll} />
          <span>Chọn tất cả</span>
        </div>
        <div className={cx('right')}>
          <p>Tổng thanh toán&nbsp;</p>
          <span>(1 sản phẩm):&nbsp;</span>
          <span className={cx('price')}>10.000.000</span>
          <Link>Mua hàng</Link>
        </div>
      </div>
    </div>
  );
}

export default UserCart;
