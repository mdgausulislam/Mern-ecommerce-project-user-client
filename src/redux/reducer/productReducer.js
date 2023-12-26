import { productConstants } from "../actions/constant";

const initState = {
    products: [],
    productByPrice: {
        under5k: [],
        under10k: [],
        under15k: [],
        under20k: [],
        under30k: [],
    },
    pageRequest: false,
    page: {},
    error: null

};

const productReducer = (state = initState, action) => {
    switch (action.type) {
        case productConstants.GET_PRODUCTS_BY_SLUG:
            return {
                ...state,
                products: action.payload.products,
                productByPrice: {
                    ...action.payload.productByPrice
                }
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
        default:
            return state;
    }
}

export default productReducer;
