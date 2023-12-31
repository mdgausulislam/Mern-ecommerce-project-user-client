import React from 'react';
import Main from '../../Layout/Main';
import './Productlist.css';
import ProductStore from '../ProductStore/ProductStore';
import getParams from '../../Utilities/getParams';
import { useParams } from 'react-router-dom';
import ProductPage from '../ProductPage/ProductPage';
import ClothingAndAccessories from '../ProductListPage/ClothingAndAccesories/ClothingAndAccessories';

const ProductList = (props) => {
    const { slug } = useParams();
    const renderProduct = () => {
        const params = getParams(window.location.search);
        let content = null;
        switch (params.type) {
            case "store":
                content = <ProductStore {...props} />;
                break;
            case "page":
                content = <ProductPage {...props} />;
                break;
            default:
                content = <ClothingAndAccessories {...props} />;
        }
        return content;
    };

    return (
        <div>
            <Main>
                {renderProduct()}
            </Main>
        </div>
    );
};

export default ProductList;
