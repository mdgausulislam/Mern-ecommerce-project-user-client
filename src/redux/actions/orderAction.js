import axiosIntance from "../../Axios/AxiosSecure";
import { cartConstants, userConstants } from "./constant";


export const addOrder = (payload) => {
    return async (dispatch) => {
        try {
            const res = await axiosIntance.post(`/addOrder`, payload);
            dispatch({ type: userConstants.ADD_USER_ORDER_REQUEST });
            if (res.status === 201) {
                console.log(res);
                const { order } = res.data;
                dispatch({
                    type: cartConstants.RESET_CART,
                });
                dispatch({
                    type: userConstants.ADD_USER_ORDER_SUCCESS,
                    payload: { order },
                });
                // const {
                //   address: { address },
                // } = res.data;
                // dispatch({
                //   type: userConstants.ADD_USER_ADDRESS_SUCCESS,
                //   payload: { address },
                // });
            } else {
                const { error } = res.data;
                dispatch({
                    type: userConstants.ADD_USER_ORDER_FAILURE,
                    payload: { error },
                });
            }
        } catch (error) {
            console.log(error);
        }
    };
};