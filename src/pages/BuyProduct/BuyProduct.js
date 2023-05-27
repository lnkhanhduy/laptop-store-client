import classNames from 'classnames/bind';
import styles from './BuyProduct.module.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';

import Header from '../../components/Header/Header';
import FillInfo from '../../components/FillInfo/FillInfo';
import CartItem from '../../components/UserCart/CartItem/CartItem';
import * as getServices from '../../services/GetAPI';

const cx = classNames.bind(styles);

function BuyProduct() {
  const idUser = window.sessionStorage.getItem('userId');
  const token = window.sessionStorage.getItem('token');

  if (!idUser || !token) {
    window.location.href = '/';
  }

  const idProduct = window.location.pathname.split('/')[3] || '';
  const [dataProduct, setDataProduct] = useState({});

  useEffect(() => {
    const getData = async () => {
      await axios
        .request(getServices.GetAPI(`product/product?id=${idProduct}`))
        .then(function (response) {
          setDataProduct(response.data.product);
        })
        .catch(function (error) {
          console.error(error);
        });
    };
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={cx('buy-product')}>
      <Header />
      <div className={cx('content')}>
        <div className={cx('fill-info')}>
          <FillInfo data={dataProduct} />
        </div>
        <div className={cx('cart-item')}>
          <CartItem checkBox={false} trash={false} data={dataProduct} />
        </div>
      </div>
    </div>
  );
}

export default BuyProduct;
