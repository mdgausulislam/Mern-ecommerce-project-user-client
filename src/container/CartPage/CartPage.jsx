import React from 'react';
import Main from '../../Layout/Main';
import Card from '../../components/UI/Card/Card';
import './CartPage.css'

const CartPage = () => {
    return (
        <div>
            <Main>
                <div className="cartContainer">
                    <Card
                        headerLeft={`My Cart`}
                        headerRight={<div>Deliver to</div>}
                        style={{ width: "calc(100% - 400px)", overflow: "hidden" }}>

                        <div className='flexRow'>
                            <div className='cartProductContainer'>
                                <img src="" alt="" />
                            </div>
                            <div className='cartitemDetails'>
                                <div>
                                    <h2>product name</h2>
                                </div>
                                <div>
                                    <h1>delivery in 3-5 days</h1>
                                </div>

                            </div>

                        </div>

                    </Card>
                    <Card style={{
                        width: '500px'
                    }}>
                        price
                    </Card>
                </div>
            </Main>

        </div>
    );
};

export default CartPage;