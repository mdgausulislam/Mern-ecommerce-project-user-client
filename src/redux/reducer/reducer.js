import { combineReducers } from "redux";
import categoryReducer from "./categoryReducer";
import productReducer from "./productReducer";
import authReducers from "./authReducer";


const rootReducer = combineReducers({
    category: categoryReducer,
    product: productReducer,
    auth: authReducers,

})

export default rootReducer;