import React, { useEffect } from 'react';
import Main from '../../Layout/Main';
import Card from '../../components/UI/Card/Card';
import { useDispatch, useSelector } from 'react-redux';
import { getOrder } from '../../redux/actions/orderAction';
import './OrderDetailsPage.css'
import { useParams } from 'react-router-dom';
import Price from '../../components/UI/Price/Price';

const OrderDetailsPage = (props) => {
    const dispatch = useDispatch();
    const orderDetails = useSelector((state) => state.user.orderDetails);
    const { orderId } = useParams(); // Extract orderId from URL params

    useEffect(() => {
        console.log('orderId:', orderId);
        if (orderId) {
            const payload = {
                orderId,
            };
            dispatch(getOrder(payload));
        }
    }, [dispatch, orderId]);

    const formatDate = (date) => {
        if (date) {
            const d = new Date(date);
            return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
        }
        return "";
    };

    const formatDate2 = (date) => {
        const month = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "June",
            "July",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ];
        if (date) {
            const d = new Date(date);
            return `${month[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
        }
    };

    if (!(orderDetails && orderDetails.address)) {
        return null;
    }

    return (
        <Main>
            <div
                style={{
                    width: "1160px",
                    margin: "10px auto",
                }}
            >
                <Card
                    style={{
                        margin: "10px 0",
                    }}
                >
                    <div className="delAdrContainer">
                        <div className="delAdrDetails">
                            <div className="delTitle">Delivery Address</div>
                            <div className="delName">{orderDetails.address.name}</div>
                            <div className="delAddress">{orderDetails.address.address}</div>
                            <div className="delPhoneNumber">
                                Phone number {orderDetails.address.mobileNumber}
                            </div>
                        </div>
                        <div className="delMoreActionContainer">
                            <div className="delTitle">More Actions</div>
                            <div className="delName">Download Invoice</div>
                        </div>
                    </div>
                </Card>

                {orderDetails.items.map((item, index) => (
                    <Card key={index}
                        style={{ display: "flex", padding: "20px 0", margin: "10px 0" }}
                    >
                        <div className="flexRow">
                            <div className="delItemImgContainer">
                                <img src={item.productId.productPictures[0].img} alt="" />
                            </div>
                            <div style={{ width: "250px" }}>
                                <div className="delItemName">{item.productId.name}</div>
                                <Price value={item.payablePrice} />
                            </div>
                        </div>
                        <div style={{ padding: "25px 50px" }}>
                            <div className="orderTrack">
                                {orderDetails.orderStatus.map((status, index) => (
                                    <div key={index}
                                        className={`orderStatus ${status.isCompleted ? "active" : ""
                                            }`}
                                    >
                                        <div
                                            className={`point ${status.isCompleted ? "active" : ""}`}
                                        ></div>
                                        <div className="orderInfo">
                                            <div className="status">{status.type}</div>
                                            <div className="date">{formatDate(status.date)}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div style={{ fontWeight: "500", fontSize: 14 }}>
                            {orderDetails.orderStatus[3].isCompleted &&
                                `Delivered on ${formatDate2(orderDetails.orderStatus[3].date)}`}
                        </div>
                    </Card>
                ))}
            </div>
        </Main>
    );
};

export default OrderDetailsPage;