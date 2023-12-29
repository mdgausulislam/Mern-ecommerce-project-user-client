import React from 'react';
import Main from '../../Layout/Main';
import Card from '../../components/UI/Card/Card';
import './CartPage.css'
import { useSelector } from 'react-redux';

const CartPage = () => {
    const cart = useSelector((state) => state.cart);
    const cartItems = cart.cartItems;
    return (

        <Main>
            <div className="cartContainer">
                <Card
                    headerLeft={`My Cart`}
                    headerRight={<div>Deliver to</div>}
                    style={{ width: "calc(100% - 400px)", overflow: "hidden" }}>
                    {
                        Object.keys(cartItems).map((key, index) =>
                            <div key={index} className='flexRow'>
                                <div className='cartProductContainers'>
                                    <img src="" alt="" />
                                </div>
                                <div>
                                    <h6>{cartItems[key].name}-qty-{cartItems[key].qty}</h6>
                                </div>
                                <div>
                                    <h6>Delivery 3-5 days</h6>
                                </div>

                            </div>
                        )
                    }

                </Card>
                <Card style={{
                    width: '500px'
                }}>
                    price
                </Card>
            </div>
        </Main>
    );
};

export default CartPage;