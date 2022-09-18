import React, { useEffect, useState, useRef } from 'react';
import productApi from '../../api/ProductApi';
import Pagination from '../Pagination/Pagination';
import Product from './Product';
import "./Product.css";
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getPageAsync } from '../../redux/productSlice'

export default function ListProducts() {
    const [loading, setLoading] = useState(true)
    const [total, setTotal] = useState(true)
    const [filters, setFilters] = useState({
        limit: 12,
        page: 1,
    });

    const products = useSelector((state) => state.product.products)
    const myRef = useRef(null)
    const executeScroll = () => myRef.current.scrollIntoView()
    const dispatch = useDispatch()

    const fetchAllProducts = async (isScroll = false) => {
        await dispatch(getPageAsync(filters))
        if (isScroll) executeScroll()
        console.log(products)
    }
    useEffect(() => {
        (async () => {
            try {
                const listProductCount = await productApi.getAll();
                const filteredNoneImage = listProductCount.data.filter(x => x.image);
                setTotal(Math.ceil((filteredNoneImage.length) / (filters.limit)));
            } catch (error) {
                console.log(error.message)
            }
        })()
    }, [])

    useEffect(() => {
        (async () => {
            try {
                await fetchAllProducts(true)
                console.log("filters limit:" + filters.limit + " , page : " + filters.page);
                console.log("call api");
            } catch (error) {
                console.log(error.message)
            }
            setLoading(false)
        })()
    }, [filters])

    const filterChange = async (newFilters) => {
        setLoading(true)
        setFilters(newFilters)
    }

    return (
        <>
            <div className={`${total === 0 ? "alert alert-success alert" : "alert alert-success"}`} role="alert">
                Tiệm hoa đã đóng cửa ! Vui lòng quay lại sau !
            </div>
            <div ref={myRef}>
                <h3 className="h3-services mt-4">BỘ SƯU TẬP HOA TƯƠI 4 MÙA</h3>
                <Link to="/create"><button type="button" className="btn btn-success m-2">Thêm mới</button></Link>
                <Product products={products} fetchAllProducts={fetchAllProducts} />
                <Pagination executeScroll={executeScroll} total={total} pagination={filters} onPageChange={filterChange}></Pagination>
            </div>
        </>
    );
}
