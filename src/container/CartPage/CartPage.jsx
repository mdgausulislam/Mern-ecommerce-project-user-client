import React, { useEffect, useState } from 'react';
import Main from '../../Layout/Main';
import Card from '../../components/UI/Card/Card';
import './CartPage.css'
import { useDispatch, useSelector } from 'react-redux';
import CartItems from './CartItems/CartItems';
import { addToCart } from '../../redux/actions/cartAction';

const CartPage = () => {
    const cart = useSelector((state) => state.cart);
    const [cartItems, setCartItems] = useState(cart.cartItems);
    const dispatch = useDispatch();
    // const cartItems = cart.cartItems;
    useEffect(() => {
        setCartItems(cart.cartItems);
    }, [cart.cartItems]);

    const onQuantityIncrement = (_id, qty) => {
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
                    style={{ width: "calc(100% - 400px)", overflow: "hidden" }}>
                    {
                        Object.keys(cartItems).map((key, index) =>
                            <CartItems
                                key={index}
                                cartItem={cartItems[key]}
                                onQuantityInc={onQuantityIncrement}
                                onQuantityDec={onQuantityDecrement} />
                        )
                    }

                </Card>
                <Card
                    headerLeft='Price'
                    style={{
                        width: '500px'
                    }}>
                </Card>
            </div>
        </Main>
    );
};

export default CartPage;