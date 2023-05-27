import { useEffect, useState } from 'react';
import axios from 'axios';

import classNames from 'classnames/bind';
import styles from './Home.module.scss';

import Header from '../../components/Header/Header';
import ListProduct from '../../components/ListProduct/ListProduct';
import FilterLaptop from '../../components/ListProduct/Filter/FilterLaptop/FilterLaptop';
import FilterAccessory from '../../components/ListProduct/Filter/FilterAccessory/FilterAccessory';
import * as getServices from '../../services/GetAPI';

const cx = classNames.bind(styles);

function Home() {
  const [listLaptop, setListLaptop] = useState([]);
  const [listAccessory, setListAccessory] = useState([]);
  const [listAccessory_PC, setListAccessory_PC] = useState([]);
  const [listScreen, setListScreen] = useState([]);

  useEffect(() => {
    const getData = async () => {
      await axios
        .request(getServices.GetAPI('product?sort=desc'))
        .then(function (response) {
          const dataProduct = response.data.product;

          dataProduct.forEach((item) => {
            if (item.type_product === 'laptop') {
              setListLaptop((prevState) => [...prevState, item]);
            } else if (item.type_product === 'screen') {
              setListScreen((prevState) => [...prevState, item]);
            } else if (item.type_product === 'accessory_pc') {
              setListAccessory_PC((prevState) => [...prevState, item]);
            } else {
              setListAccessory((prevState) => [...prevState, item]);
            }
          });
        })
        .catch(function (error) {
          console.error(error);
        });
    };

    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={cx('home')}>
      <Header />
      <div className={cx('list-product')}>
        <ListProduct
          title={'Laptop'}
          filter={<FilterLaptop />}
          data={listLaptop}
          link={`list-product/${listLaptop[0]?.type_product}`}
        />
        <ListProduct
          title={'Phụ kiện'}
          filter={<FilterAccessory />}
          data={listAccessory}
          link={`list-product/${listAccessory[0]?.type_product}`}
        />
        <ListProduct
          title={'Linh kiện máy tính'}
          data={listAccessory_PC}
          link={`list-product/${listAccessory_PC[0]?.type_product}`}
        />
        <ListProduct
          title={'Màn hình máy tính'}
          data={listScreen}
          link={`list-product/${listScreen[0]?.type_product}`}
        />
      </div>
    </div>
  );
}

export default Home;
