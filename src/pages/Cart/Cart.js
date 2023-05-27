import classNames from 'classnames/bind';
import styles from './Cart.module.scss';

import Header from '../../components/Header/Header';
import UserCart from '../../components/UserCart/UserCart';

const cx = classNames.bind(styles);

function Cart() {
  const userId = window.sessionStorage.getItem('userId');
  const token = window.sessionStorage.getItem('token');

  if (userId && token) {
    return (
      <div className={cx('cart')}>
        <Header />
        <div className={cx('content')}>
          <UserCart />
        </div>
      </div>
    );
  } else {
    return (
      <>
        <Header />
        <div className={cx('text-cart')}>Vui lòng đăng nhập để xem giỏ hàng</div>
      </>
    );
  }
}

export default Cart;
