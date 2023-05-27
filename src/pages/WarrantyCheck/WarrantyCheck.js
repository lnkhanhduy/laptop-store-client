import classNames from 'classnames/bind';
import styles from './WarrantyCheck.module.scss';
import axios from 'axios';
import { useState } from 'react';
import moment from 'moment';

import Header from '../../components/Header/Header';
import * as postServices from '../../services/PostAPI';

const cx = classNames.bind(styles);

function WarrantyCheck() {
  const [phone, setPhone] = useState('');
  const [data, setData] = useState([]);
  const [error, setError] = useState('');

  const formatDate = (date) => {
    return moment(date).format('DD/MM/YYYY');
  };

  const handleSubmitFormCheck = (e) => {
    e.preventDefault();
    setData('');
    if (!phone) {
      setError('Vui lòng nhập số điện thoại!');
    } else if (phone.length < 10) {
      setError('Vui lòng nhập đúng định dạng số điện thoại!');
    } else {
      const postData = async () => {
        await axios
          .request(postServices.PostAPI('cart/warranty-check', { phone: phone }, ''))
          .then(function (response) {
            setData(response.data.product);
            setError('');
          })
          .catch(function (error) {
            console.error(error);
          });
      };

      postData();
    }
  };
  return (
    <div className={cx('container')}>
      <Header />

      <div className={cx('content')}>
        <div className={cx('warranty-check')}>
          <form onSubmit={handleSubmitFormCheck}>
            <span>Nhập số điện thoại của bạn:</span>
            <input type="number" value={phone} onChange={(e) => setPhone(e.target.value)} />
            <button type="submit">Kiểm tra bảo hành</button>
          </form>
        </div>

        {error && <span className={cx('error')}>{error}</span>}

        <div className={cx('result')}>
          {data
            ? data.map((product, index) => {
                return (
                  <div key={index} className={cx('product-item')}>
                    <div className={cx('name')}>{product.name_product}</div>

                    <div className={cx('date')}>
                      <div>
                        <span>Ngày mua:&nbsp; </span>
                        <span>
                          <strong>{formatDate(product.createdAt)}</strong>
                        </span>
                      </div>
                      <div>
                        <span>Bảo hành đến:&nbsp; </span>
                        <span>
                          <strong>{formatDate(product.guarantee)}</strong>
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })
            : ''}
        </div>
      </div>
    </div>
  );
}

export default WarrantyCheck;
