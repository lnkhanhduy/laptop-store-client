import classNames from 'classnames/bind';
import styles from './Contact.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from '../../components/Header/Header';
import { faMobile, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faFacebookMessenger, faGithub } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Contact() {
  return (
    <div className={cx('contact')}>
      <Header />
      <div className={cx('content')}>
        <Link className={cx('contact-item')} to={'https://www.facebook.com/lnkhanhduy'} target="_blank">
          <span className={cx('icon')}>
            <FontAwesomeIcon icon={faFacebook} />
          </span>
          <span>Lê Nguyễn Khánh Duy</span>
        </Link>
        <Link className={cx('contact-item')} to={'https://www.messenger.com/t/lnkhanhduy'} target="_blank">
          <span className={cx('icon')}>
            <FontAwesomeIcon icon={faFacebookMessenger} />
          </span>
          <span>Lê Nguyễn Khánh Duy</span>
        </Link>
        <Link className={cx('contact-item')} to={'https://github.com/lnkhanhduy'} target="_blank">
          <span className={cx('icon')}>
            <FontAwesomeIcon icon={faGithub} />
          </span>
          <span>Lê Nguyễn Khánh Duy</span>
        </Link>
        <div className={cx('contact-item')}>
          <span className={cx('icon')}>
            <FontAwesomeIcon icon={faMobile} />
          </span>
          <span>090121xxxx</span>
        </div>
        <div className={cx('contact-item')}>
          <span className={cx('icon')}>
            <FontAwesomeIcon icon={faEnvelope} />
          </span>
          <span>khanhduyhbvl20011@gmail.com</span>
        </div>
      </div>
    </div>
  );
}

export default Contact;
