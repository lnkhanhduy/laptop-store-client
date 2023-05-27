import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './ListProduct.module.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';

import Title from '../Title/Title';
import ProductCard from '../ProductCard/ProductCard';
import * as getServices from '../../services/GetAPI';

const cx = classNames.bind(styles);

function ListProduct({ title, filter = '', data, link }) {
  const [newData, setNewData] = useState(data?.slice(0, 10));
  const [newLink, setNewLink] = useState(link);

  useEffect(() => {
    setNewData(data?.slice(0, 10));
    setNewLink(link);
  }, [data, link]);

  const handleOnClickViewMore = (e) => {
    const link = e.target.href.split('/')[4];

    const getData = async () => {
      await axios
        .request(getServices.GetAPI(`product/${link}`))
        .then(function (response) {
          setNewData((prevState) => [...prevState, ...response.data.product]);
          setNewLink(response.data.next_page);
        })
        .catch(function (error) {
          console.error(error);
        });
    };

    getData();
  };

  const handleOnClickFilter = (e) => {
    if (e.target.textContent === 'NỔI BẬT') {
      const getData = async () => {
        await axios
          .request(getServices.GetAPI('product/laptop?sort=desc'))
          .then(function (response) {
            setNewData(response.data.product);
          })
          .catch(function (error) {
            console.error(error);
          });
      };

      getData();
    } else if (e.target.alt?.includes('Laptop')) {
      const type = e.target.alt.split(' ')[1];

      const getData = async () => {
        await axios
          .request(getServices.GetAPI(`product/laptop?brand=${type}`))
          .then(function (response) {
            setNewData(response.data.product);
          })
          .catch(function (error) {
            console.error(error);
          });
      };
      getData();
    } else if (e.target.alt === 'Nổi bật') {
      const getData = async () => {
        await axios
          .request(getServices.GetAPI('product/accessory'))
          .then(function (response) {
            setNewData(response.data.product);
          })
          .catch(function (error) {
            console.error(error);
          });
      };
      getData();
    } else {
      const type = e.target.alt;
      const getData = async () => {
        await axios
          .request(getServices.GetAPI(`product/accessory?type=${type}`))
          .then(function (response) {
            setNewData(response.data.product);
          })
          .catch(function (error) {
            console.error(error);
          });
      };
      getData();
    }
  };
  return (
    <div className={cx('list-product')}>
      {title && <Title>{title}</Title>}

      {filter && (
        <div className={cx('filter')} onClick={handleOnClickFilter}>
          {filter}
        </div>
      )}

      <div className={cx('content')}>
        {newData?.product
          ? newData?.product?.map((product, index) => {
              return (
                <div className={cx('content-item')} key={index}>
                  <ProductCard data={product} />
                </div>
              );
            })
          : newData?.map((product, index) => {
              return (
                <div className={cx('content-item')} key={index}>
                  <ProductCard data={product} />
                </div>
              );
            })}
      </div>
      {newLink !== 'end' ? (
        <div>
          <Link to={newLink} onClick={handleOnClickViewMore} className={cx('view-more')}>
            Xem thêm sản phẩm
          </Link>
        </div>
      ) : (
        <div className={cx('no-more')}>Bạn đã xem hết sản phẩm</div>
      )}
    </div>
  );
}

ListProduct.propTypes = {
  data: PropTypes.array,
  title: PropTypes.string,
  filter: PropTypes.node,
  link: PropTypes.string,
};

export default ListProduct;
