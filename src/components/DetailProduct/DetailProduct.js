import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './DetailProduct.module.scss';

import Product from './Product/Product';
import MoreInfo from './MoreInfo/MoreInfo';

const cx = classNames.bind(styles);

function DetailProduct({ data, onClickAddCart, onClickBuyNow }) {
  return (
    <div className={cx('container')}>
      <div className={cx('product')}>
        <Product onClickAddCart={onClickAddCart} onClickBuyNow={onClickBuyNow} data={data} />
      </div>
      <div className={cx('info')}>
        <MoreInfo data={data} />
      </div>
    </div>
  );
}

DetailProduct.propTypes = {
  data: PropTypes.object,
  onClickAddCart: PropTypes.func,
  onClickBuyNow: PropTypes.func,
};

export default DetailProduct;
