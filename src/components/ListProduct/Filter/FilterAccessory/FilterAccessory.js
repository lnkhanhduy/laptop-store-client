import classNames from 'classnames/bind';
import styles from './FilterAccessory.module.scss';

import images from '../../../../assets/images';
import Filter from '../Filter';

const cx = classNames.bind(styles);

function FilterAccessory() {
  return (
    <>
      <div className={cx('accessory-item')}>
        <Filter className={('active', 'accessory')}>
          <img src={images.hot} alt="Nổi bật" />
        </Filter>
        <span>Nổi Bật</span>
      </div>

      <div className={cx('accessory-item')}>
        <Filter className={'accessory'}>
          <img src={images.earphone} alt="earphone" />
        </Filter>
        <span>Tai Nghe</span>
      </div>

      <div className={cx('accessory-item')}>
        <Filter className={'accessory'}>
          <img src={images.speaker} alt="speaker" />
        </Filter>
        <span>Loa</span>
      </div>

      <div className={cx('accessory-item')}>
        <Filter className={'accessory'}>
          <img src={images.mouse} alt="mouse" />
        </Filter>
        <span>Chuột</span>
      </div>

      <div className={cx('accessory-item')}>
        <Filter className={'accessory'}>
          <img src={images.keyboard} alt="keyboard" />
        </Filter>
        <span>Bàn phím</span>
      </div>
    </>
  );
}

export default FilterAccessory;
