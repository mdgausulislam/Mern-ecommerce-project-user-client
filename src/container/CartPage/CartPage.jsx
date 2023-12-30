import React, { useEffect, useState } from 'react';
import Main from '../../Layout/Main';
import Card from '../../components/UI/Card/Card';
import './CartPage.css'
import { useDispatch, useSelector } from 'react-redux';
import CartItems from './CartItems/CartItems';
import { addToCart, getCartItems } from '../../redux/actions/cartAction';
import { MaterialButton } from '../../components/MaterialUI/MaterialUI';
import { useNavigate } from 'react-router-dom';
import PriceDetails from '../../components/PriceDetails/PriceDetails';

const CartPage = (props) => {
    const cart = useSelector((state) => state.cart);
    const auth = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const [cartItems, setCartItems] = useState(cart.cartItems);
    const dispatch = useDispatch();
    // const cartItems = cart.cartItems;
    useEffect(() => {
        setCartItems(cart.cartItems);
    }, [cart.cartItems]);

    useEffect(() => {
        if (auth.authenticate) {
            dispatch(getCartItems());
        }
    }, [auth.authenticate]);


    const onQuantityIncrement = (_id, qty) => {
        //console.log({_id, qty});
        const { name, price, img } = cartItems[_id];
        dispatch(addToCart({ _id, name, price, img }, 1));
    };

    const onQuantityDecrement = (_id, qty) => {
        const { name, price, img } = cartItems[_id];
        dispatch(addToCart({ _id, name, price, img }, -1));
    };

    // const onRemoveCartItem = (_id) => {
    //     dispatch(removeCartItem({ productId: _id }));
    // };


    return (
        <Main>
            <div className="cartContainer" style={{ alignItems: "flex-start" }}>
                <Card
                    headerLeft={`My Cart`}
                    headerRight={<div>Deliver to</div>}
                    style={{ width: "calc(100% - 400px)", overflow: "hidden" }}
                >
                    {Object.keys(cartItems).map((key, index) => (
                        <CartItems
                            key={index}
                            cartItem={cartItems[key]}
                            onQuantityInc={onQuantityIncrement}
                            onQuantityDec={onQuantityDecrement}
                        />
                    ))}

                    <div
                        style={{
                            width: "100%",
                            display: "flex",
                            background: "#ffffff",
                            justifyContent: "flex-end",
                            boxShadow: "0 0 10px 10px #eee",
                            padding: "10px 0",
                            boxSizing: "border-box",
                        }}
                    >
                        <div style={{ width: "250px" }}>
                            <MaterialButton
                                title="PLACE ORDER"
                                onClick={() => navigate(`/checkout`)}
                            />
                        </div>
                    </div>
                </Card>
                <PriceDetails
                    totalItem={Object.keys(cart.cartItems).reduce(function (qty, key) {
                        return qty + cart.cartItems[key].qty;
                    }, 0)}
                    totalPrice={Object.keys(cart.cartItems).reduce((totalPrice, key) => {
                        const { price, qty } = cart.cartItems[key];
                        return totalPrice + price * qty;
                    }, 0)}
                />
            </div>
        </Main>
    );
};

export default CartPage;