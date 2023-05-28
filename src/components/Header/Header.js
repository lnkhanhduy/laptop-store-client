import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Swal from 'sweetalert2';

import { Link } from 'react-router-dom';

import { faHouse, faLaptop, faMagnifyingGlass, faPhone, faScrewdriver } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import images from '../../assets/images';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Header({ onClickListProduct }) {
  const name = window.sessionStorage.getItem('name');
  const [searchValue, setSearchValue] = useState('');

  const handleOnClickCart = (e) => {
    e.preventDefault();
    Swal.fire({
      position: 'top',
      icon: 'warning',
      title: 'Tính năng đang cập nhật!',
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const handleFormSearchSubmit = (e) => {
    e.preventDefault();
    if (searchValue) {
      window.location.href = `/search/keyword=${searchValue}`;
    }
  };

  return (
    <div className={cx('container')}>
      <div className={cx('header')}>
        <Link to={'/'} className={cx('logo', 'no-select')}>
          <img src={images.logo} alt="logo" />
          <span className={cx('logo-text')}>Laptop Store</span>
        </Link>

        <div className={cx('search')}>
          <div className={cx('search-item')}>
            <form className={cx('search-form')} onSubmit={handleFormSearchSubmit}>
              <input
                type="text"
                placeholder="Bạn muốn tìm gì?"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />

              <button type="submit" className={cx('search-icon')}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </form>
          </div>
        </div>

        <div className={cx('user', 'no-select')}>
          <div className={cx('user-icon')}>
            {name ? (
              <div className={cx('user-login')}>
                <div className={cx('user-img')}>
                  <img src={images.user} alt="" />
                </div>
                <span className={cx('user-text')}>
                  Xin chào, &nbsp;<strong>{name.split(' ')[name.split(' ').length - 1]}</strong>
                </span>
                <div className={cx('login')}>
                  <Link to={'/my-order'}>Đơn hàng của tôi</Link>
                  <Link to={'/logout'}>Đăng xuất</Link>
                </div>
              </div>
            ) : (
              <Link to={'/login'} className={cx('user-no-login')}>
                <div className={cx('user-img')}>
                  <img src={images.user} alt="" />
                </div>
                <div className={cx('user-text')}>
                  <div>Đăng nhập</div>
                  <span className={cx('separate')}>/&nbsp;</span>
                  <div>Đăng ký</div>
                </div>
              </Link>
            )}
          </div>

          <Link to={'/cart'} className={cx('user-icon')} onClick={handleOnClickCart}>
            <span className={cx('cart-number')}></span>
            <div className={cx('user-img')}>
              <img src={images.cart} alt="" />
            </div>
            <span className={cx('user-text')}>Giỏ hàng</span>
          </Link>
        </div>
      </div>
      <div className={cx('header-link', 'no-select')}>
        <Link to={'/'} className={cx('header-link-item')}>
          <FontAwesomeIcon icon={faHouse} />
          <span>Trang chủ</span>
        </Link>
        <span className={cx('header-link-item', 'category')}>
          <FontAwesomeIcon icon={faLaptop} />
          <span className={cx('category-text')}>Sản phẩm</span>
          <div className={cx('list-category')}>
            <Link onClick={onClickListProduct} to={'/list-product/laptop'}>
              <img src={images.laptop} alt="laptop" />
              <span className={cx('text')}>Laptop</span>
            </Link>

            <Link onClick={onClickListProduct} to={'/list-product/accessory'}>
              <img src={images.accessory} alt="accessory" />
              <span className={cx('text')}>Phụ kiện</span>
            </Link>

            <Link onClick={onClickListProduct} to={'/list-product/accessory_pc'}>
              <img src={images.accessory_pc} alt="accessory_pc" />

              <span className={cx('text')}>Linh kiện máy tính</span>
            </Link>

            <Link onClick={onClickListProduct} to={'/list-product/screen'}>
              <img src={images.screen} alt="screen" />
              <span className={cx('text')}>Màn hình máy tính</span>
            </Link>
          </div>
        </span>
        <Link to={'/warranty-check'} className={cx('header-link-item')}>
          <FontAwesomeIcon icon={faScrewdriver} />
          <span>Kiểm tra bảo hành</span>
        </Link>
        <Link to={'/contact'} className={cx('header-link-item')}>
          <FontAwesomeIcon icon={faPhone} />
          <span>Liên hệ</span>
        </Link>
      </div>
    </div>
  );
}

Header.propTypes = {
  onClickListProduct: PropTypes.func,
};

export default Header;
