import classNames from 'classnames/bind';
import styles from './FilterLaptop.module.scss';

import images from '../../../../assets/images';
import Filter from '../Filter';

const cx = classNames.bind(styles);

function FilterLaptop() {
  return (
    <>
      <Filter>
        <span className={cx('text')}>NỔI BẬT</span>
      </Filter>
      <Filter>
        <img src={images.macbook} alt="Laptop Apple" />
      </Filter>
      <Filter>
        <img src={images.hp} alt="Laptop HP " />
      </Filter>
      <Filter>
        <img src={images.asus} alt="Laptop ASUS" />
      </Filter>
      <Filter>
        <img src={images.lenovo} alt="Laptop Lenovo" />
      </Filter>
      <Filter>
        <img src={images.acer} alt="Laptop Acer" />
      </Filter>
      <Filter>
        <img src={images.dell} alt="Laptop Dell" />
      </Filter>
      <Filter>
        <img src={images.msi} alt="Laptop MSI" />
      </Filter>
    </>
  );
}

export default FilterLaptop;
