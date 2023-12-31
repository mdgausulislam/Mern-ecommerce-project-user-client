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


export const getOrders = () => {
    return async (dispatch) => {
        try {
            const res = await axiosIntance.get(`/getOrders`);
            dispatch({ type: userConstants.GET_USER_ORDER_REQUEST });
            if (res.status === 200) {
                console.log(res);
                const { orders } = res.data;
                dispatch({
                    type: userConstants.GET_USER_ORDER_SUCCESS,
                    payload: { orders },
                });
            } else {
                const { error } = res.data;
                dispatch({
                    type: userConstants.GET_USER_ORDER_FAILURE,
                    payload: { error },
                });
            }
        } catch (error) {
            console.log(error);
        }
    };
};

// single order with complete info and delivery location
export const getOrder = (payload) => {
    return async (dispatch) => {
      try {
        const res = await axiosIntance.post(`/getOrder`, payload);
        dispatch({ type: userConstants.GET_USER_ORDER_DETAILS_REQUEST });
        if (res.status === 200) {
          console.log(res);
          const { order } = res.data;
          dispatch({
            type: userConstants.GET_USER_ORDER_DETAILS_SUCCESS,
            payload: { order },
          });
        } else {
          const { error } = res.data;
          dispatch({
            type: userConstants.GET_USER_ORDER_DETAILS_FAILURE,
            payload: { error },
          });
        }
      } catch (error) {
        console.log(error);
      }
    };
  };