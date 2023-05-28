import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './FillInfo.module.scss';

import { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

import * as postService from '../../services/PostAPI';

const cx = classNames.bind(styles);

function FillInfo({ data }) {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const timer = 1500;

  const handleSubmitFillInfo = (e) => {
    e.preventDefault();
    const token = window.sessionStorage.getItem('token');
    const userId = window.sessionStorage.getItem('userId');
    const quantity = window.sessionStorage.getItem('quantity');

    if (!name) {
      setError('Vui lòng nhập tên!');
    } else if (!address) {
      setError('Vui lòng nhập địa chỉ!');
    } else if (!phone) {
      setError('Vui lòng nhập số điện thoại!');
    } else if (phone.length < 10) {
      setError('Số điện thoại phải từ 10 số!');
    } else if (!email) {
      setError('Vui lòng nhập email!');
    } else {
      const body = {
        idUser: userId,
        name: name,
        name_product: data?.name,
        address: address,
        phone: phone,
        email: email,
        quantity: quantity,
        price: data?.price,
        image: data?.images ? data.images[0]?.path : '',
        id_product: data._id,
      };

      const postData = async () => {
        await axios
          .request(postService.PostAPI('cart/buy_product', body, token))
          .then(function (response) {
            if (response.data.success) {
              Swal.fire({
                position: 'top',
                icon: 'success',
                title: response.data.message,
                showConfirmButton: false,
                timer: timer,
              });
              setTimeout(() => {
                window.location.href = '/';
              }, timer);
            }
          })
          .catch(function (error) {
            console.error(error);
            Swal.fire({
              position: 'top',
              icon: 'error',
              title: error.response.data.message,
              showConfirmButton: false,
              timer: timer,
            });
          });
      };
      postData();
    }
  };
  return (
    <div className={cx('fill-info')}>
      <form action="" onSubmit={handleSubmitFillInfo}>
        <div className={cx('form-fill-info')}>
          <div className={cx('form-group')}>
            <label htmlFor="">Họ và tên</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className={cx('form-group')}>
            <label htmlFor="">Địa chỉ</label>
            <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
          </div>
          <div className={cx('form-group')}>
            <label htmlFor="">Số điện thoại</label>
            <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
          </div>
          <div className={cx('form-group')}>
            <label htmlFor="">Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
        </div>

        {error && <span className={cx('error')}>{error}</span>}

        <div className={cx('button')}>
          <button type="submit">Thanh toán</button>
        </div>
      </form>
    </div>
  );
}

FillInfo.propTypes = {
  data: PropTypes.object,
};
export default FillInfo;
