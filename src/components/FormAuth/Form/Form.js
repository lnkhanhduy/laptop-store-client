import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Form.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Form({ action, title, children, text, href, link, onClick, onSubmit }) {
  return (
    <div className={cx('form-auth')}>
      <h2>{title}</h2>

      <form action={action} className={cx('form')} onSubmit={onSubmit}>
        {children}

        <div>
          {text}
          <Link to={href} onClick={onClick}>
            {link}
          </Link>
        </div>

        <button type="submit">{title}</button>
      </form>
    </div>
  );
}

Form.propTypes = {
  action: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node,
  text: PropTypes.string,
  href: PropTypes.string,
  link: PropTypes.string,
  onClick: PropTypes.func,
  onSubmit: PropTypes.func,
};

export default Form;
