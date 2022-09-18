import PropTypes from 'prop-types';
import React from 'react';
import "./Product.css";
import productApi from '../../api/ProductApi';
import { useState } from 'react';
import { Link } from 'react-router-dom';

Product.propTypes = {
    products: PropTypes.array,
};

Product.defaultProps = {
    products: [],
}

export default function Product(props) {
    const { products, fetchAllProducts } = props;

    const deleteProduct = async (productId) => {
        await productApi.remove(productId);
        await fetchAllProducts();
    };

    return (
         <div className="row">
            {products.map(product => (
                product.image&&
            <ProductCard key={product.id} props={product} deleteProduct={deleteProduct} />
        ))}
        </div>
    );
}
function ProductCard({ props,deleteProduct}) {
    const { name, origin, price, image,id}=props
    const [isLoading, setLoading] = useState(false)

    const deleteProductLoading = async () => {
        setLoading(true)
        await deleteProduct(id)
        setLoading(false)
    };

    return (<div className="col col-sm-6 col-md-3 col-12 mt-3">
        {
        <div className={`card-content ${isLoading&&'product-loading'}`}>
            <img src={image} className="card-img-top"></img>
            <div className="card-body">
                <h5 className='card-title mt-3'>{name}</h5>
                <p className="card-text mt-2">{origin}</p>
                <h5 className="card-title">{price} $</h5>
                <div>
                <Link to={`/edit/${id}`}><button type="button" className="btn btn-warning m-2">Chỉnh sửa</button></Link>                    <button type="button" className="btn btn-danger m-2" onClick={() => deleteProductLoading()}>Xoá</button>
                </div>
            </div>
        </div>}
    </div>)
}