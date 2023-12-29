import { combineReducers } from "redux";
import categoryReducer from "./categoryReducer";
import productReducer from "./productReducer";
import authReducers from "./authReducer";
import cartReducer from "./cartReducer";


const rootReducer = combineReducers({
    category: categoryReducer,
    product: productReducer,
    auth: authReducers,
    cart: cartReducer,

})

export default rootReducer;