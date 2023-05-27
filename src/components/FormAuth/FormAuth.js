import { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

import classNames from 'classnames/bind';
import styles from './FormAuth.module.scss';
import * as postServices from '../../services/PostAPI';
import Form from './Form/Form';

const cx = classNames.bind(styles);

function FormAuth() {
  const [action, setAction] = useState(window.location.pathname.split('/')[1] || '');
  const [usernameLogin, setUsernameLogin] = useState('');
  const [passwordLogin, setPasswordLogin] = useState('');
  const [nameRegister, setNameRegister] = useState('');
  const [usernameRegister, setUsernameRegister] = useState('');
  const [passwordRegister, setPasswordRegister] = useState('');
  const [prePasswordRegister, setPrePasswordRegister] = useState('');
  const [emailRegister, setEmailRegister] = useState('');
  const [error, setError] = useState('');
  const timer = 1500;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (action === 'login') {
      if (!usernameLogin) {
        setError('Vui lòng nhập tên đăng nhập!');
      } else if (usernameLogin.length < 6) {
        setError('Tên đăng nhập ít nhất 6 kí tự!');
      } else if (!passwordLogin) {
        setError('Vui lòng nhập mật khẩu!');
      } else if (passwordLogin.length < 6) {
        setError('Mật khẩu ít nhất 6 kí tự!');
      } else {
        const userLogin = { username: usernameLogin, password: passwordLogin };

        const postData = async (body) => {
          await axios
            .request(postServices.PostAPI('account/login', body, ''))
            .then(function (response) {
              if (response.data.success) {
                window.sessionStorage.setItem('token', response.data.accessToken);
                window.sessionStorage.setItem('name', response.data.name);
                window.sessionStorage.setItem('userId', response.data.userId);
                setError('');
                Swal.fire({
                  position: 'top',
                  icon: 'success',
                  title: response.data.message,
                  showConfirmButton: false,
                  timer: timer,
                });
                setTimeout(() => {
                  window.location.href = '/';
                }, timer);
              }
            })
            .catch(function (error) {
              setError(error.response.data.message);
              console.error(error);
            });
        };

        postData(userLogin);
      }
    } else {
      if (!nameRegister) {
        setError('Vui lòng nhập tên!');
      } else if (!usernameRegister) {
        setError('Vui lòng nhập tên đăng nhập!');
      } else if (usernameRegister.length < 6) {
        setError('Tên đăng nhập ít nhất 6 kí tự!');
      } else if (!passwordRegister || !prePasswordRegister) {
        setError('Vui lòng nhập mật khẩu!');
      } else if (passwordRegister.length < 6 || prePasswordRegister.length < 6) {
        setError('Mật khẩu ít nhất 6 kí tự!');
      } else if (passwordRegister !== prePasswordRegister) {
        setError('Mật khẩu không trùng khớp!');
      } else if (!emailRegister) {
        setError('Vui lòng nhập email!');
      } else {
        const userRegister = {
          name: nameRegister,
          username: usernameRegister,
          password: passwordRegister,
          confirm_password: prePasswordRegister,
          email: emailRegister,
        };

        const postData = async (body) => {
          await axios
            .request(postServices.PostAPI('account/register', body, ''))
            .then(function (response) {
              if (response.data.success) {
                window.sessionStorage.setItem('token', response.data.accessToken);
                window.sessionStorage.setItem('name', response.data.name);
                window.sessionStorage.setItem('userId', response.data.userId);
                setError('');
                Swal.fire({
                  position: 'top',
                  icon: 'success',
                  title: response.data.message,
                  showConfirmButton: false,
                  timer: timer,
                });
                setTimeout(() => {
                  window.location.href = '/';
                }, timer);
              }
            })
            .catch(function (error) {
              setError(error.response.data.message);
              console.error(error);
            });
        };

        postData(userRegister);
      }
    }
  };

  useEffect(() => {
    setError('');
    setUsernameLogin('');
    setPasswordLogin('');
    setNameRegister('');
    setUsernameRegister('');
    setPasswordRegister('');
    setPrePasswordRegister('');
    setEmailRegister('');
  }, [action]);

  const handleOnClick = (e) => {
    const action = e.target.href.split('/')[3];
    setAction(action);
  };
  return (
    <div>
      {action === 'login' ? (
        <Form
          onSubmit={handleSubmit}
          title={'Đăng nhập'}
          action={action}
          link={'Đăng ký'}
          href={'/register'}
          onClick={handleOnClick}
          text={'Bạn chưa có tài khoản? '}
        >
          <div className={cx('form-group')}>
            <label htmlFor="">Tên đăng nhập</label>
            <input type="text" value={usernameLogin} onChange={(e) => setUsernameLogin(e.target.value)} />
          </div>
          <div className={cx('form-group')}>
            <label htmlFor="">Mật khẩu</label>
            <input type="password" value={passwordLogin} onChange={(e) => setPasswordLogin(e.target.value)} />
          </div>

          {error && <span className={cx('error')}>{error}</span>}
        </Form>
      ) : (
        <Form
          onSubmit={handleSubmit}
          title={'Đăng ký'}
          action={action}
          link={'Đăng nhập'}
          href={'/login'}
          onClick={handleOnClick}
          text={'Bạn đã có tài khoản? '}
        >
          <div className={cx('form-group')}>
            <label htmlFor="">Họ và tên</label>
            <input type="text" value={nameRegister} onChange={(e) => setNameRegister(e.target.value)} />
          </div>
          <div className={cx('form-group')}>
            <label htmlFor="">Tên đăng nhập</label>
            <input type="text" value={usernameRegister} onChange={(e) => setUsernameRegister(e.target.value)} />
          </div>

          <div className={cx('form-group')}>
            <label htmlFor="">Mật khẩu</label>
            <input type="password" value={passwordRegister} onChange={(e) => setPasswordRegister(e.target.value)} />
          </div>

          <div className={cx('form-group')}>
            <label htmlFor="">Nhập lại mật khẩu</label>
            <input
              type="password"
              value={prePasswordRegister}
              onChange={(e) => setPrePasswordRegister(e.target.value)}
            />
          </div>

          <div className={cx('form-group')}>
            <label htmlFor="">Email</label>
            <input type="email" value={emailRegister} onChange={(e) => setEmailRegister(e.target.value)} />
          </div>

          {error && <span className={cx('error')}>{error}</span>}
        </Form>
      )}
    </div>
  );
}

export default FormAuth;
