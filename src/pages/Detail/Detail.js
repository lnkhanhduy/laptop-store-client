import { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

import Header from '../../components/Header/Header';
import DetailProduct from '../../components/DetailProduct/DetailProduct';
import * as getServices from '../../services/GetAPI';
import * as postService from '../../services/PostAPI';

function Detail() {
  const idProduct = window.location.pathname.split('/')[2] || '';

  const [dataProduct, setDataProduct] = useState({});
  const idUser = window.sessionStorage.getItem('userId');
  const token = window.sessionStorage.getItem('token');

  useEffect(() => {
    const getData = async () => {
      await axios
        .request(getServices.GetAPI(`product/product?id=${idProduct}`))
        .then(function (response) {
          setDataProduct(response.data.product);
        })
        .catch(function (error) {
          console.error(error);
        });
    };

    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onClickBuyNow = (e) => {
    if (!idUser || !token) {
      Swal.fire({
        position: 'top',
        icon: 'error',
        title: 'Vui lòng đăng nhập để mua sản phẩm!',
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      window.location.href = `/cart/fill-info/${dataProduct?._id}`;
    }
  };

  const handleAddCart = () => {
    if (!idUser && !token) {
      Swal.fire({
        position: 'top',
        icon: 'warning',
        title: 'Vui lòng đăng nhập để thêm vào giỏ hàng!',
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      const body = {
        idProduct: dataProduct._id,
        idUser,
        name: dataProduct.name,
        price: dataProduct.price,
        total: dataProduct.price,
        image: dataProduct.images ? dataProduct.images[0].path : '',
      };

      const postData = async (body, token) => {
        await axios
          .request(postService.PostAPI('cart/add', body, token))
          .then(function (response) {
            if (response.data.success) {
              Swal.fire({
                position: 'top',
                icon: 'success',
                title: 'Thêm vào giỏ hàng thành công!',
                showConfirmButton: false,
                timer: 1500,
              });
            }
          })
          .catch(function (error) {
            console.error(error);
            Swal.fire({
              position: 'top',
              icon: 'warning',
              title: error.response.data.message,
              showConfirmButton: false,
              timer: 1500,
            });
          });
      };

      postData(body, token);
    }
  };
  return (
    <div>
      <Header />
      <DetailProduct data={dataProduct} onClickAddCart={handleAddCart} onClickBuyNow={onClickBuyNow} />
    </div>
  );
}

export default Detail;
