import classNames from 'classnames/bind';
import styles from './Auth.module.scss';

import Header from '../../components/Header/Header';

import FormAuth from '../../components/FormAuth/FormAuth';

const cx = classNames.bind(styles);

function Auth() {
  const action = window.location.pathname;
  if (action.includes('logout')) {
    sessionStorage.clear();
    window.location.href = '/';
  } else {
    return (
      <div className={cx('auth')}>
        <Header />
        <div className={cx('content')}>
          <FormAuth />
        </div>
      </div>
    );
  }
}

export default Auth;
