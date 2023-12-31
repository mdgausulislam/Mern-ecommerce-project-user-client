import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from '../../redux/actions/orderAction';
import Main from '../../Layout/Main';
import { IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';
import Card from '../../components/UI/Card/Card';
import './OrderPage.css'
import { Breed } from '../../components/MaterialUI/MaterialUI';
import { BiRupee } from 'react-icons/bi';
import { generatedPublicUrl } from '../../../urlConfig';

const OrderPage = (props) => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);

    useEffect(() => {
        dispatch(getOrders());
    }, []);

    console.log(user);

    return (
        <Main>
            <div style={{ maxWidth: "1160px", margin: "5px auto" }}>
                <Breed
                    breed={[
                        { name: "Home", href: "/" },
                        { name: "My Account", href: "/account" },
                        { name: "My Orders", href: "/account/orders" },
                    ]}
                    breedIcon={<IoIosArrowForward />}
                />
                {user.orders.map((order) => {
                    return order.items.map((item) => (
                        <Card style={{ display: "block", margin: "5px 0" }}>
                            <Link
                                to={`/order_details/${order._id}`}
                                className="orderItemContainer"
                            >
                                <div className="orderImgContainer">
                                    <img
                                        className="orderImg"
                                        src={generatedPublicUrl(item.productId.productPictures[0].img)}
                                    />
                                </div>
                                <div className="orderRow">
                                    <div className="orderName">{item.productId.name}</div>
                                    <div className="orderPrice">
                                        <BiRupee />
                                        {item.payablePrice}
                                    </div>
                                    <div>{order.paymentStatus}</div>
                                </div>
                            </Link>
                        </Card>
                    ));
                })}
            </div>
        </Main>
    );
};

export default OrderPage;