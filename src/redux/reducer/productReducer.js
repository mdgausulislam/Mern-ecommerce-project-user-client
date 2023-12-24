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
        default:
            return state;
    }
}

export default productReducer;
