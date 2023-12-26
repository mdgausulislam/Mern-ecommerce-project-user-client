import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductPage } from '../../redux/actions/productAction';

const ProductPage = () => {
    const dispatch = useDispatch();
    const product = useSelector(state => state.product);
    useEffect(() => {
        dispatch(getProductPage);
    }, [])

    return (
        <div>
            <h1>product page</h1>
        </div>
    );
};

export default ProductPage;