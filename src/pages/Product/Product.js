import classNames from 'classnames/bind';
import styles from './Product.module.scss';
import axios from 'axios';
import { useEffect, useState } from 'react';

import Header from '../../components/Header/Header';
import ListProduct from '../../components/ListProduct/ListProduct';
import * as getServices from '../../services/GetAPI';

const cx = classNames.bind(styles);

function Product() {
  const [listProduct, setListProduct] = useState([]);
  const [hot, setHot] = useState('active');
  const [desc, setDesc] = useState('');
  const [asc, setAsc] = useState('');
  const nameListProduct = window.location.pathname || '';
  let url = '';

  const getData = async (url) => {
    await axios
      .request(getServices.GetAPI(url))
      .then(function (response) {
        setListProduct(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const handleOnClickListProduct = (e) => {
    let nameListProductClick = e.target.parentNode?.href?.split('/')[4] || e.target.alt?.split('/')[1] || '';
    if (!nameListProductClick) {
      switch (e.target.textContent) {
        case 'Laptop':
          nameListProductClick = 'laptop';
          break;
        case 'Phụ kiện':
          nameListProductClick = 'accessory';
          break;
        case 'Linh kiện máy tính':
          nameListProductClick = 'accessory_pc';
          break;
        case 'Màn hình máy tính':
          nameListProductClick = 'screen';
          break;
        default:
          break;
      }
    }
    getData(`product/${nameListProductClick}`);
  };

  const handleOnClickOrderBy = (e) => {
    if (e.target.textContent === 'Bán chạy') {
      setHot('active');
      setDesc('');
      setAsc('');
      if (nameListProduct?.includes('/search/keyword')) {
        url = `product/search?search=${nameListProduct.split('=')[1]}`;
      } else {
        url = `product/${nameListProduct.split('/')[2]}`;
      }
    } else if (e.target.textContent === 'Giá giảm dần') {
      setHot('');
      setDesc('active');
      setAsc('');
      if (nameListProduct?.includes('/search/keyword')) {
        url = `product/search?search=${nameListProduct.split('=')[1]}&sort=desc`;
      } else {
        url = `product/${nameListProduct.split('/')[2]}?sort=desc`;
      }
    } else if (e.target.textContent === 'Giá tăng dần') {
      setHot('');
      setDesc('');
      setAsc('active');
      if (nameListProduct?.includes('/search/keyword')) {
        url = `product/search?search=${nameListProduct.split('=')[1]}&sort=asc`;
      } else {
        url = `product/${nameListProduct.split('/')[2]}?sort=asc`;
      }
    }
    getData(url);
  };

  useEffect(() => {
    if (nameListProduct?.includes('/search/keyword')) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      url = `product/search?search=${nameListProduct.split('=')[1]}`;
    } else {
      url = `product/${nameListProduct?.split('/')[2]}`;
    }
    if (url) {
      getData(url);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nameListProduct]);

  return (
    <div>
      <Header onClickListProduct={handleOnClickListProduct} />
      <div className={cx('content')}>
        <div className={cx('list-product')}>
          <div className={cx('filter-product')}>
            <span>Sắp xếp theo</span>
            <button className={cx(hot)} onClick={handleOnClickOrderBy}>
              Bán chạy
            </button>
            <button onClick={handleOnClickOrderBy} className={cx(desc)}>
              Giá giảm dần
            </button>
            <button onClick={handleOnClickOrderBy} className={cx(asc)}>
              Giá tăng dần
            </button>
          </div>
          <ListProduct data={listProduct.product} link={listProduct.next_page} />
        </div>
      </div>
    </div>
  );
}

export default Product;
