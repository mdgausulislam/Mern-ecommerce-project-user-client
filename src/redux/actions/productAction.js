import axiosInstance from "../../Axios/AxiosSecure"
import { productConstants } from "./constant";

export const getProductsBySlug = (slug) => {
    return async dispatch => {
        const res = await axiosInstance.get(`/product/${slug}`);

        if (res.status === 200) {
            dispatch({
                type: productConstants.GET_PRODUCTS_BY_SLUG,
                payload: res.data
            })
        } else {
            // dispatch({
            //     type:productConstants.G
            // })
        }
    }
}

export const getProductPage = (payload) => {
    return async dispatch => {
        try {
            const { cid, type } = payload.params;
            const res = await axiosInstance.get(`/page/${cid}/${type}`);
            console.log(res);
            dispatch({ type: productConstants.GET_PRODUCT_PAGE_REQUEST });
            if (res.status === 200) {
                const { page } = res.data;
                console.log(res.data.page);
                dispatch({
                    type: productConstants.GET_PRODUCT_PAGE_SUCCESS,
                    payload: { page }
                });
            } else {
                const { error } = res.data;
                dispatch({
                    type: productConstants.GET_PRODUCT_PAGE_FAILURE,
                    payload: { error }
                });
            }
        } catch (error) {
            console.log(error)
        }

    }
}


export const getProductDetailsById = (payload) => {
    return async dispatch => {
        dispatch({ type: productConstants.GET_PRODUCT_DETAILS_BY_ID_REQUEST });
        let res;
        try {
            const { productId } = payload.params;
            console.log("amar ki achi beche", productId);

            res = await axiosInstance.get(`/product/id/${productId}`);
            console.log('Response:', res.data); // Log the response for debugging
            dispatch({
                type: productConstants.GET_PRODUCT_DETAILS_BY_ID_SUCCESS,
                payload: { productDetails: res.data.product }
            });

        } catch (error) {
            console.error('Error:', error); // Log the specific error for debugging
            dispatch({
                type: productConstants.GET_PRODUCT_DETAILS_BY_ID_FAILURE,
                payload: { error: error.message }
            });
        }

    }
}
