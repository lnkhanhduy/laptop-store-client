import classNames from 'classnames/bind';
import styles from './MyOrder.module.scss';

import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

import Header from '../../components/Header/Header';
import * as postService from '../../services/PostAPI';

const cx = classNames.bind(styles);

function MyOrder() {
  const idUser = window.sessionStorage.getItem('userId');
  const token = window.sessionStorage.getItem('token');
  const [order, setOrder] = useState([]);

  if (!idUser || !token) {
    window.location.href = '/';
  }

  const formatDate = (date) => {
    return moment(date).format('DD/MM/YYYY');
  };

  function formatMoney(value) {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value);
  }

  useEffect(() => {
    const postData = async (body, token) => {
      await axios
        .request(postService.PostAPI('cart', body, token))
        .then(function (response) {
          setOrder(response.data.data);
        })
        .catch(function (error) {
          console.error(error);
        });
    };

    postData({ idUser: idUser }, token);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Header />
      <div className={cx('content')}>
        <table>
          <tr>
            <th className={cx('name-product')}>Sản phẩm</th>
            <th className={cx('item-table')}>Số lượng</th>
            <th className={cx('item-table')}>Tổng tiền</th>
            <th className={cx('item-table')}>Ngày mua</th>
            <th className={cx('item-table')}>Bảo hành đến</th>
            <th className={cx('item-table')}>Trạng thái</th>
          </tr>

          <tbody>
            {order
              ? order?.map((product, index) => {
                  if (product.status === 'add-cart') {
                    // eslint-disable-next-line array-callback-return
                    return;
                  }

                  let className = '';
                  let text = '';
                  if (product.status === 'order') {
                    className = 'text-order';
                    text = 'Đang giao';
                  } else if (product.status === 'success') {
                    className = 'text-success';
                    text = 'Đã giao';
                  } else if (product.status === 'cancel') {
                    className = 'text-cancel';
                    text = 'Đã hủy';
                  }

                  return (
                    <tr className={cx('item')} key={index}>
                      <Link to={`/product/${product.id_product}`}>
                        <td className={cx('name-product')}>{product.name_product}</td>
                      </Link>
                      <td className={cx('item-table')}>{product.quantity}</td>
                      <td className={cx('item-table')}>{formatMoney(product.total)}</td>
                      <td className={cx('item-table')}>{formatDate(product.createdAt)}</td>
                      <td className={cx('item-table')}>{formatDate(product.guarantee) || ''}</td>
                      <td className={cx('item-table')}>
                        <span className={cx(`${className}`)}>{text}</span>
                      </td>
                    </tr>
                  );
                })
              : 'Bạn chưa mua sản phẩm nào'}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MyOrder;
