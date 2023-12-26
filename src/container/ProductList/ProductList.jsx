// import Main from "../../Layout/Main";
// import './Productlist.css'
// import ProductStore from "../ProductStore/ProductStore";
// import getParams from "../../Utilities/getParams";


// const ProductList = (props) => {

//     const renderProduct = () => {
//         console.log(props);
//         const params = getParams(props.location.search);
//         console.log('prams ki asce:', params);
//     }

//     return (
//         <div>
//             <Main>
//                 <ProductStore {...props} />
//                 {renderProduct()}
//             </Main>
//         </div>
//     );
// };

// export default ProductList;

import React from 'react';
import Main from '../../Layout/Main';
import './Productlist.css';
import ProductStore from '../ProductStore/ProductStore';
import getParams from '../../Utilities/getParams';
import { useParams } from 'react-router-dom';
import ProductPage from '../ProductPage/ProductPage';

const ProductList = (props) => {
    const { slug } = useParams();
    const renderProduct = () => {
        const params = getParams(window.location.search); // Use window.location.search for query parameters
        console.log('slug:', slug);
        console.log('params ki asce:', params);
        let content = null;
        switch (params.type) {
            case 'store':
                content = <ProductStore />
                break;
            case 'page':
                content = <ProductPage />
                break;
            default:
                content = null
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
