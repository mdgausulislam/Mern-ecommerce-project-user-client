import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../../../components/UI/Card/Card';
import { BiRupee } from 'react-icons/bi';
import { generatedPublicUrl } from '../../../../urlConfig';
import { Link, useParams } from 'react-router-dom';
import './ClothingAndAccesories.css'
import { getProductsBySlug } from '../../../redux/actions/productAction';

const ClothingAndAccessories = (props) => {
    const product = useSelector((state) => state.product);
    const dispatch = useDispatch();
    const { slug } = useParams();
    useEffect(() => {
        dispatch(getProductsBySlug(slug));
    }, [dispatch, slug]);

    return (
        <div style={{ padding: "10px" }}>
            <Card
                style={{
                    boxSizing: "border-box",
                    padding: "10px",
                    display: "flex",
                }}
            >
                {product.products.map((product) => (
                    <div key={product._id} className="caContainer">
                        <Link
                            className="caImgContainer"
                            to={`/${product.slug}/${product._id}/p`}
                        >
                            <img src={generatedPublicUrl(product.productPictures[0].img)} />
                        </Link>
                        <div>
                            <div className="caProductName">{product.name}</div>
                            <div className="caProductPrice">
                                <BiRupee />
                                {product.price}
                            </div>
                        </div>
                    </div>
                ))}
            </Card>
        </div>
    );
};

export default ClothingAndAccessories;