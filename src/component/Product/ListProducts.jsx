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
    const isMounted = useRef(false);
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
                console.log(isMounted.current);
                if (isMounted.current) {
                    await fetchAllProducts(true)
                } else {
                    isMounted.current = true;
                    await fetchAllProducts(false)
                }

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
                Ti???m hoa ???? ????ng c???a ! Vui l??ng quay l???i sau !
            </div>
            <div ref={myRef}>
                <h3 className="h3-services mt-4">B??? S??U T???P HOA T????I 4 M??A</h3>
                <Link to="/create"><button type="button" className="btn btn-success m-2">Th??m m???i</button></Link>
                <Product products={products} fetchAllProducts={fetchAllProducts} />
                <Pagination executeScroll={executeScroll} total={total} pagination={filters} onPageChange={filterChange}></Pagination>
            </div>
        </>
    );
}
