import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getParams from '../../Utilities/getParams';
import { useParams } from 'react-router-dom';
import { getProductPage } from '../../redux/actions/productAction';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const ProductPage = () => {
    const dispatch = useDispatch();
    const product = useSelector(state => state.product);
    const { page } = product;

    useEffect(() => {
        const params = getParams(window.location.search);
        const payload = {
            params
        }
        dispatch(getProductPage(payload))
    }, []);

    return (
        <div style={{ margin: '0 10px' }}>
            <h6>{page.title}</h6>
            <Carousel
                renderThumbs={() => { }}
            >
                {page.banners &&
                    page.banners.map((banner, index) => (
                        <div key={index}>
                            <img src={banner.img} alt='' />
                        </div>
                    ))}
            </Carousel>
        </div>
    );
};

export default ProductPage;