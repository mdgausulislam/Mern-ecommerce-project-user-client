import Main from "../../Layout/Main";
import './Productlist.css'
import ProductStore from "../ProductStore/ProductStore";


const ProductList = (props) => {

    const renderProduct = () => {
        console.log(props.someProperty);
    }

    return (
        <div>
            <Main>
                <ProductStore {...props} />
                {renderProduct()}
            </Main>
        </div>
    );
};

export default ProductList;