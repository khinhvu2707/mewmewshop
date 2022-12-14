import React, { useEffect, useState } from 'react';
import productApi from '../../api/ProductApi';
import "./Product.css";
import PropTypes from 'prop-types';
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import { storage, ref, getDownloadURL, uploadBytes, uploadBytesResumable } from "../../firebase";
import { useDispatch } from 'react-redux'
import { addProductAsync } from '../../redux/productSlice'

CreateProduct.propTypes = {
  onSubmit: PropTypes.func,
};

CreateProduct.defaultProps = {
  onSubmit: null,
};

export default function CreateProduct(props) {
  const { register, formState: { errors }, handleSubmit, reset, setFocus } = useForm();
  const [data, setData] = useState([])
  const [picture, setPicture] = useState(null);
  const [imgData, setImgData] = useState(null);
  const [isLoading, setisLoading] = useState(false)
  const dispatch = useDispatch()
  // toast
  const notify = (msg) => toast(msg);

  function onSubmit(data) {
    console.log(data);
    setisLoading(true);

    const storageRef = ref(storage, `images/${picture.name}.jpg`);
    /** @type {any} */
    const metadata = {
      contentType: 'image/jpeg',
    };

    const uploadTask = uploadBytesResumable(storageRef, picture, metadata);

    uploadTask.on('state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          data.image = downloadURL
          dispatch(addProductAsync(data))
          reset()
          setImgData(null)
          notify('done!')

          setisLoading(false)
          console.log('File available at', downloadURL);
        });
      }
    );

  }

  const resetProduct = () => {
    reset();
    setImgData(null)
  }

  const onChangePicture = e => {
    if (e.target.files[0]) {
      console.log("picture: ", e.target.files);
      setPicture(e.target.files[0]);
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImgData(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  useEffect(() => {
    setFocus("name");
  }, [setFocus]);

  useEffect(() => {
    (async () => {
      try {
        await productApi.add(data);
      } catch (error) {
        console.log(error.message)
      }
    })()
  }, [data])

  return (
    <div className="style-form mt-3 pos">

      {isLoading && <div className="position-fix w-100 h-100 top-0 overlay-loading ">
        <div className='modal-content align-center m-0'>
          <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
          Loading...
        </div>
      </div>}
      <div className="form-content container py-5">
        <div className="style-form-group">
          <h2 className="form-title">Th??m S???n Ph???m M???i </h2>
          <h5 className="form-title">Vui l??ng ??i???n ?????y ????? th??ng tin !</h5>
          <hr />
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mt-3">
              <label className="label">T??n s???n ph???m <span
                style={{ color: 'red' }}>(*)</span></label>
              <input className="form-control" defaultValue={props.name} {...register("name", {
                required: "T??n s???n ph???m kh??ng ???????c b??? tr???ng !",
                pattern: { value: /\D+/, message: "T??n s???n ph???m ph???i l?? ch??? !" },
                minLength: { value: 3, message: "T??n s???n ph???m ??t nh???t ph???i c?? 3 k?? t??? !" }
              })} />
              <ErrorMessage errors={errors} name="name" render={({ message }) => <p style={{ color: 'red' }}>{message}</p>} />
            </div>
            <div className="mt-3">
              <label className="label">Xu???t x??? <span
                style={{ color: 'red' }}>(*)</span></label>
              <input className="form-control" {...register("origin", {
                required: "Xu???t x??? kh??ng ???????c b??? tr???ng !",
                minLength: { value: 3, message: "Xu???t x??? ??t nh???t ph???i c?? 3 k?? t??? !" }
              })} />
              <ErrorMessage errors={errors} name="origin" render={({ message }) => <p style={{ color: 'red' }}>{message}</p>} />
            </div>
            <div className="mt-3">
              <label className="label">Gi?? <span
                style={{ color: 'red' }}>(*)</span></label>
              <input className="form-control" {...register("price", {
                required: "Gi?? s???n ph???m kh??ng ???????c b??? tr???ng !",
                pattern: { value: /\d+/, message: "Gi?? s???n ph???m ph???i l?? s???" }
              })} />
              <ErrorMessage errors={errors} name="price" render={({ message }) => <p style={{ color: 'red' }}>{message}</p>} />
            </div>
            <div className="mt-3">
              <label className="label">H??nh ???nh <span
                style={{ color: 'red' }}>(*)</span></label>
              <input type="file" onChange={onChangePicture} id="fileInput" className="form-control" {...register("image", {
                onChange: onChangePicture,
                required: "H??nh ???nh s???n ph???m kh??ng ???????c b??? tr???ng !"
              })} />
              <ErrorMessage errors={errors} name="image" render={({ message }) => <p style={{ color: 'red' }}>{message}</p>} />
              {imgData && <div className="style-image"><img src={imgData} className="d-block w-100 pt-5 h-100" alt="..." /></div>}
            </div>
            <hr />
            <div className="text-center">
              <Link to="/"><button className="btn" style={{ backgroundColor: 'pink' }}>Home</button></Link>
              <button className="btn m-2" style={{ backgroundColor: '#F1DDD5' }} onClick={(e) => { e.preventDefault(); resetProduct() }}>Xo??</button>
              <button type="submit" className="btn" style={{ backgroundColor: 'pink' }} disabled={isLoading}>L??u</button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}
