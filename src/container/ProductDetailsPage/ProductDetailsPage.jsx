import React from 'react';
import { useParams } from 'react-router-dom';
import Main from '../../Layout/Main';

const ProductDetailsPage = () => {
    const { productSlug, productId } = useParams();
    return (
        <div>
            <Main>
                <h1>Product Details Page</h1>
                <p>Product Slug: {productSlug}</p>
                <p>Product ID: {productId}</p>
            </Main>
        </div>
    );
};

export default ProductDetailsPage;