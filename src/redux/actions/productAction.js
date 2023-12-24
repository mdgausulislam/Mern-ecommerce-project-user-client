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