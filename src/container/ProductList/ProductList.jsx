import { useEffect, useState } from "react";
import Main from "../../Layout/Main";
import { useDispatch, useSelector } from "react-redux";
import { getProductsBySlug } from "../../redux/actions/productAction";
import { useParams } from "react-router-dom";
import './Productlist.css'
import { generatedPublicUrl } from "../../../urlConfig";


const ProductList = () => {
    const dispatch = useDispatch();
    const { slug } = useParams();
    const product = useSelector(state => state.product);
    const [priceRange, setPriceRange] = useState({
        under5k: 5000,
        under10k: 10000,
        under15k: 15000,
        under20k: 20000,
        under30k: 30000,

    })
    const onlySlugId = slug.split('-')[0];
    useEffect(() => {

        console.log("slugid:", onlySlugId);
        dispatch(getProductsBySlug(onlySlugId));
    }, [dispatch])

    return (
        <div>

            <Main>
                {
                    Object.keys(product.productByPrice).map((key, index) => {
                        return (
                            <div className="card" key={key}>
                                <div className="cardHeader" key={key}>
                                    <div>{onlySlugId} mobile under {priceRange[key]}</div>
                                    <button>View All</button>
                                </div>
                                <div className="d-flex">
                                    {
                                        product.productByPrice[key].map(product => <div className="productContainer" key={product._id}>
                                            <div className="productImageContainer">
                                                <img src={generatedPublicUrl(product.productPictures[0].img)} alt="" />
                                            </div>
                                            <div className="productInfo">
                                                <div style={{ margin: '5px 0' }}>{product.name}</div>
                                                <div>
                                                    <span>4.3</span> &nbsp;
                                                    <span>3353</span>
                                                </div>
                                                <div className="productprice">{product.price}</div>
                                            </div>
                                        </div>)
                                    }
                                </div>
                            </div>
                        )
                    })
                }

            </Main>
        </div>
    );
};

export default ProductList;