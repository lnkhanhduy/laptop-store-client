import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './CartItem.module.scss';

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);

function CartItem({ data, checkBox = true, trash = true, quantityReadOnly = true, showPrice = true }) {
  const maxValue = Number(data?.quantity) - Number(data?.sold);
  const [valueQuantity, setValueQuantity] = useState(data?.quantity || 1);
  const [classNameDown, setClassNameDown] = useState('');
  const [classNameUp, setClassNameUp] = useState('');
  const [totalPrice, setTotalPrice] = useState(data?.price);

  function formatMoney(value) {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value);
  }

  useEffect(() => {
    if (Number(valueQuantity) === 1) {
      setClassNameDown('btn-disable');
    } else if (Number(valueQuantity) === Number(maxValue)) {
      setClassNameUp('btn-disable');
    } else {
      setClassNameDown('');
      setClassNameUp('');
    }
    window.sessionStorage.setItem('quantity', valueQuantity);
    setTotalPrice(Number(valueQuantity) * Number(data?.price));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [valueQuantity]);

  const handleChangeQuantity = (e) => {
    if (Number(e.target.value) < 1) {
      setValueQuantity(1);
    } else if (Number(e.target.value) > Number(maxValue)) {
      setValueQuantity(Number(maxValue));
    } else {
      setValueQuantity(Number(e.target.value));
      setTotalPrice(Number(e.target.value) * Number(data?.price));
    }
  };

  const handleClickQuantity = (e) => {
    if (e.target.textContent === '-' && Number(valueQuantity) > 1) {
      setValueQuantity((value) => value - 1);
      setTotalPrice(Number(valueQuantity) * Number(data?.price));
    } else if (e.target.textContent === '+' && Number(valueQuantity) < Number(maxValue)) {
      setValueQuantity((value) => value + 1);
      setTotalPrice(Number(valueQuantity) * Number(data?.price));
    }
  };

  return (
    <div className={cx('cart-item')}>
      <div className={cx('products')}>
        {checkBox && (
          <div>
            <input type="checkbox" />
          </div>
        )}

        <div>
          <Link className={cx('product-item')}>
            <img src={data?.images && data.images[0]?.path} alt={data?.type} />
            <span>{data?.name_product || data?.name}</span>
          </Link>
        </div>
      </div>

      <div className={cx('info')}>
        {showPrice && <div className={cx('info-item')}>{formatMoney(data?.price)}</div>}
        <div className={cx('info-item', 'quantity')}>
          {quantityReadOnly ? (
            <>
              <button className={cx('button-left', `${classNameDown}`)} onClick={handleClickQuantity}>
                -
              </button>
              <input
                type="number"
                min={1}
                max={Number(maxValue)}
                value={valueQuantity}
                onChange={handleChangeQuantity}
              />
              <button className={cx('button-right', `${classNameUp}`)} onClick={handleClickQuantity}>
                +
              </button>
            </>
          ) : (
            <input type="number" className={cx('only-input')} readOnly value={valueQuantity} />
          )}
        </div>
        <div className={cx('info-item')}>{formatMoney(totalPrice || data?.total || data?.price)}</div>

        {trash && (
          <div className={cx('info-item')}>
            <span className={cx('remove')}>
              <FontAwesomeIcon icon={faTrashCan} />
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

CartItem.propTypes = {
  data: PropTypes.object,
  checkBox: PropTypes.bool,
  trash: PropTypes.bool,
  quantityReadOnly: PropTypes.bool,
  showPrice: PropTypes.bool,
};

export default CartItem;
