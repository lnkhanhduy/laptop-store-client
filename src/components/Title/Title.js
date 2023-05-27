import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Title.module.scss';

const cx = classNames.bind(styles);

function Title({ children }) {
  return (
    <div className={cx('title', 'no-select')}>
      <span className={cx('text')}>{children}</span>
      <span className={cx('top-left')}></span>
      <span className={cx('bottom-left')}></span>
      <span className={cx('top-right')}></span>
      <span className={cx('bottom-right')}></span>
    </div>
  );
}

Title.propTypes = {
  children: PropTypes.node,
};

export default Title;
