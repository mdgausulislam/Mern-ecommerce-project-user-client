import React, { useEffect } from 'react';
import Main from '../../Layout/Main';
import { useDispatch, useSelector } from 'react-redux';
import { getProductDetailsById } from '../../redux/actions/productAction';
import { useParams } from 'react-router-dom';

const ProductDetailsPage = (props) => {
    const dispatch = useDispatch();
    const product = useSelector((state) => state.product);
    const { productId } = useParams();

    useEffect(() => {
        console.log("peyeci productid:", productId);
        const payload = {
            params: {
                productId
            },
        };
        dispatch(getProductDetailsById(payload));
    }, []);
    return (
        <div>
            <Main>
                <h6>{JSON.stringify(product)}</h6>
                <h6>{product.productDetails.name}</h6>
            </Main>
        </div>
    );
};

export default ProductDetailsPage;