import { productConstants } from "../actions/constant";


const initState = {
    products: [],
    priceRange: {},
    productByPrice: {},
    pageRequest: false,
    page: {},
    error: null,
    productDetails: {},
    loading: false,
};


const productReducer = (state = initState, action) => {
    switch (action.type) {
        case productConstants.GET_PRODUCTS_BY_SLUG:
            return {
                ...state,
                products: action.payload.products,
                priceRange: action.payload.priceRange,
                productByPrice: {
                  ...action.payload.productByPrice,
                },
            };
        case productConstants.GET_PRODUCT_PAGE_REQUEST:
            return {
                ...state,
                pageRequest: true
            };
        case productConstants.GET_PRODUCT_PAGE_SUCCESS:
            return {
                ...state,
                page: action.payload.page,
                pageRequest: false
            };
        case productConstants.GET_PRODUCT_PAGE_FAILURE:
            return {
                ...state,
                pageRequest: false,
                error: action.payload.error
            };
        case productConstants.GET_PRODUCT_DETAILS_BY_ID_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case productConstants.GET_PRODUCT_DETAILS_BY_ID_SUCCESS:
            return {
                ...state,
                loading: false,
                productDetails: action.payload.productDetails,
            };
        case productConstants.GET_PRODUCT_DETAILS_BY_ID_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
            };
        default:
            return state;
    }
}

export default productReducer;
