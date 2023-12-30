import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./CheckOutPage.css";
import { getAddress } from "../../redux/actions/addressAction";
import Main from "../../Layout/Main";
import { MaterialButton, MaterialInput } from "../../components/MaterialUI/MaterialUI";
import AddressForm from "./AddressForm";
import Card from "../../components/UI/Card/Card";


const CheckoutStep = (props) => {
    return (
        <div className="checkoutStep">
            <div onClick={props.onClick}
                className={`checkoutHeader ${props.active && "active"}`}
            >
                <div>
                    <span className="stepNumber">{props.stepNumber}</span>
                    <span className="stepTitle">{props.title}</span>
                </div>
            </div>
            {props.body && props.body}
        </div>
    );
};

const CheckOutPage = () => {
    const user = useSelector((state) => state.user);
    const auth = useSelector((state) => state.auth);
    const [newAddress, setNewAddress] = useState(false);
    const [address, setAddress] = useState([]);
    const dispatch = useDispatch();

    const onAddressSubmit = () => {

    };

    const selectAddress = (addr) => {
        console.log(addr);
        // const updatedAddress = address.map((adr) =>
        //     adr._id === addr._id
        //         ? { ...adr, selected: true }
        //         : { ...adr, selected: false }
        // );
        // setAddress(updatedAddress);
    };

    useEffect(() => {
        auth.authenticate && dispatch(getAddress())
    }, [auth.authenticate]);

    useEffect(() => {
        const address = user.address.map((adr) => ({
            ...adr,
            selected: false,
            edit: false,
        }));
        setAddress(address);
        //user.address.length === 0 && setNewAddress(true);
    }, [user.address]);


    return (
        <Main>
            <div className="cartContainer" style={{ alignItems: "flex-start" }}>
                <div className="checkoutContainer">
                    <CheckoutStep
                        stepNumber={"1"}
                        title={"LOGIN"}
                        active={!auth.authenticate}
                        body={
                            auth.authenticate ? (
                                <div className="loggedInId">
                                    <span style={{ fontWeight: 500 }}>{auth.user.fullName}</span>
                                    <span style={{ margin: "0 5px" }}>{auth.user.email}</span>
                                </div>
                            ) : (
                                <div>
                                    <MaterialInput label="Email" />
                                </div>
                            )
                        }
                    />
                    <CheckoutStep
                        stepNumber={"2"}
                        title={"DELIVERY ADDRESS"}
                        active={address.length > 0 ? true : false}
                        body={
                            <>
                                {
                                    address.map(adr =>
                                        <div className="flexRow addressContainer">
                                            <div>
                                                <input name="address" onClick={() => selectAddress(adr)} type="radio" />
                                            </div>
                                            <div className="flexRow sb addressinfo">
                                                <div>
                                                    <div>
                                                        <span>{adr.name}</span>
                                                        <span >{adr.addressType}</span>
                                                        <span >{adr.mobileNumber}</span>
                                                    </div>
                                                    <div>
                                                        {adr.address}
                                                    </div>
                                                    {
                                                        adr.selected && <MaterialButton
                                                            title="DELIVERY HERE"
                                                            style={{
                                                                width: "250px",
                                                            }}
                                                        />
                                                    }

                                                </div>
                                                <div>
                                                    {adr.selected && <h6>edit</h6>}
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            </>
                        }
                    />
                    {/* addressform */}

                    {
                        newAddress ? <AddressForm
                            onSubmitForm={onAddressSubmit}
                            onCancel={() => { }}
                        /> : <CheckoutStep
                            stepNumber={"+"}
                            title={"ADD NEW ADDRESS"}
                            active={false}
                            onClick={() => setNewAddress(true)}
                        />
                    }

                    <CheckoutStep
                        stepNumber={'3'}
                        title={'ORDER SUMMARY'} />
                    <CheckoutStep
                        stepNumber={'4'}
                        title={'PAYMENT OPTIONS'} />
                </div>
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

export default CheckOutPage;
