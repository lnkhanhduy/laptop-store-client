import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Filter.module.scss';

const cx = classNames.bind(styles);

function Filter({ children, className }) {
  return <span className={cx('filter', `${className}`)}>{children}</span>;
}

Filter.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Filter;
