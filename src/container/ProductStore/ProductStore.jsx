import React from 'react';
import { useEffect, useState } from "react";
// import Main from "../../Layout/Main";
import { useDispatch, useSelector } from "react-redux";
import { getProductsBySlug } from "../../redux/actions/productAction";
import { Link, useParams } from "react-router-dom";
import './ProductStore.css'
import { generatedPublicUrl } from "../../../urlConfig";
import Card from '../../components/UI/Card/Card';
import { MaterialButton } from '../../components/MaterialUI/MaterialUI';
import Rating from '../../components/UI/Rating/Rating';
import Price from '../../components/UI/Price/Price';

const ProductStore = () => {
    const dispatch = useDispatch();
    const { slug } = useParams();
    const product = useSelector(state => state.product);
    const priceRange = product.priceRange;
    console.log("priceRange undefined", priceRange);
    const onlySlugId = slug.split('-')[0];
    useEffect(() => {

        dispatch(getProductsBySlug(onlySlugId));
    }, [dispatch])

    return (
        <>
            {Object.keys(product.productByPrice).map((key, index) => {
                return (
                    <Card key={index}
                        headerLeft={`${onlySlugId} mobile under ${priceRange[key]}`}
                        headerRight={
                            <MaterialButton
                                title={"VIEW ALL"}
                                style={{
                                    width: "96px",
                                }}
                                bgColor="#2874f0"
                                fontSize="12px"
                            />
                        }
                        style={{
                            width: "calc(100% - 40px)",
                            margin: "20px",
                        }}
                    >
                        <div style={{ display: "flex" }}>
                            {product.productByPrice[key].map((product, index) => (
                                <Link key={index}
                                    to={`/${product.slug}/${product._id}/p`}
                                    style={{
                                        display: "block",
                                        textDecoration: "none",
                                        color: "#000",
                                    }}
                                    className="productContainer"
                                >
                                    <div className="productImgContainer">
                                        <img src={generatedPublicUrl(product.productPictures[0].img)} alt="" />
                                    </div>
                                    <div className="productInfo">
                                        <div style={{ margin: "10px 0" }}>{product.name}</div>
                                        <div>
                                            <Rating value="4.3" />
                                            &nbsp;&nbsp;
                                            <span
                                                style={{
                                                    color: "#777",
                                                    fontWeight: "500",
                                                    fontSize: "12px",
                                                }}
                                            >
                                                (3353)
                                            </span>
                                        </div>
                                        <Price value={product.price} />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </Card>
                );
            })}
        </>
    );
};

export default ProductStore;













// <div>
//     {
//         Object.keys(product.productByPrice).map((key, index) => {
//             return (
//                 <Card
//                     key={index}
//                     headerLeft={`${onlySlugId} mobile under ${priceRange[key]}`}
//                     headerRight={<button>View All</button>}
//                     style={{
//                         width: "calc(100% - 40px)",
//                         margin: "20px",
//                     }}
//                 >
//                     <div style={{ display: 'flex' }}>
//                         {
//                             product.productByPrice[key].map(product =>
//                                 <Link
//                                     to={`/${product.slug}/${product._id}/p`}
//                                     style={
//                                         {
//                                             display: 'block',
//                                             textDecoration: "none",
//                                             color: "#000",
//                                         }
//                                     } className="productContainer"
//                                     key={product._id}>
//                                     <div className="productImageContainer">
//                                         <img src={generatedPublicUrl(product.productPictures[0].img)} alt="" />
//                                     </div>
//                                     <div className="productInfo">
//                                         <div style={{ margin: '5px 0' }}>{product.name}</div>
//                                         <div>
//                                             <span>4.3</span> &nbsp;
//                                             <span>3353</span>
//                                         </div>
//                                         <div className="productprice">{product.price}</div>
//                                     </div>
//                                 </Link>)
//                         }
//                     </div>
//                 </Card>
//             )
//         })
//     }

// </div>