import classNames from 'classnames/bind';
import styles from './Product.module.scss';

import { useState } from 'react';
import { Link } from 'react-router-dom';

import images from '../../../assets/images';
const cx = classNames.bind(styles);

function Product({ data, onClickAddCart, onClickBuyNow }) {
  const [urlPrimaryImage, setUrlPrimaryImage] = useState(data?.images ? data.images[0]?.path : '');

  const handleChangePrimaryImage = (e) => {
    setUrlPrimaryImage(e.target.src);
  };

  function formatMoney(value) {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value);
  }

  return (
    <div className={cx('product-container')}>
      <div className={cx('text')}>
        <div className={cx('name')}>{data?.name}</div>
        <span>
          Thương hiệu: <strong>{data?.brand}</strong>
        </span>
        <div className={cx('price')}>
          <span className={cx('new-price')}>{formatMoney(data?.price)}</span>
          {/* <div>
            <span className={cx('old-price')}>20.000.000₫</span>
            <span className={cx('percent')}>-10%</span>
          </div> */}

          <div className={cx('action')}>
            <Link onClick={onClickBuyNow} className={cx('buy-now')}>
              Mua ngay
            </Link>
            <Link onClick={onClickAddCart} className={cx('add-cart')}>
              Thêm vào giỏ hàng
            </Link>
          </div>

          <div className={cx('policy')}>
            <p>Chính sách bán hàng</p>
            <div className={cx('policy-item')}>
              <img src={images.policy_1} alt="Policy" />
              <span>Miễn phí giao hàng cho đơn hàng từ 5 triệu</span>
            </div>
            <div className={cx('policy-item')}>
              <img src={images.policy_2} alt="Policy" />
              <span>Cam kết hàng chính hãng 100%</span>
            </div>
            <div className={cx('policy-item')}>
              <img src={images.policy_3} alt="Policy" />
              <span>Đổi trả trong vòng 10 ngày </span>
            </div>
          </div>
        </div>
      </div>

      <div className={cx('images')}>
        <div className={cx('primary-image')}>
          <img src={urlPrimaryImage || (data?.images && data.images[0]?.path)} alt="product" />
        </div>
        <div className={cx('child-images')}>
          {data?.images?.map((image, index) => {
            return (
              <div className={cx('image')} key={index}>
                <img src={image.path} alt="Product" onMouseEnter={handleChangePrimaryImage} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Product;
