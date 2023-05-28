import classNames from 'classnames/bind';
import styles from './Cart.module.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';

import Header from '../../components/Header/Header';
import UserCart from '../../components/UserCart/UserCart';
import * as getServices from '../../services/GetAPI';

const cx = classNames.bind(styles);

function Cart() {
  const userId = window.sessionStorage.getItem('userId');
  const token = window.sessionStorage.getItem('token');
  const [data, setData] = useState([]);

  if (!userId || !token) {
    window.location.href = '/';
  }

  useEffect(() => {
    const getData = async () => {
      await axios
        .request(getServices.GetAPI(`cart?id=${userId}`, token))
        .then(function (response) {
          response.data.data.forEach((item) => {
            if (item.status === 'add-cart') {
              setData((prevState) => [...prevState, item]);
            }
          });
        })
        .catch(function (error) {
          console.error(error);
        });
    };

    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(data);
  if (data.length > 0) {
    return (
      <div className={cx('cart')}>
        <Header />
        <div className={cx('content')}>
          <UserCart data={data} />
        </div>
      </div>
    );
  } else {
    return (
      <div className={cx('cart')}>
        <Header />
        <div className={cx('content')}>
          <div className={cx('text-cart')}>Bạn chưa thêm sản phẩm nào vào giỏ hàng</div>
        </div>
      </div>
    );
  }
}

export default Cart;
