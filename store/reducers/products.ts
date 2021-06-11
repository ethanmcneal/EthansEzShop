import PRODUCTS from "../../data/dummy-data";

const initialState = {
    availableProducts: PRODUCTS,
    userProducts: PRODUCTS.filter(prod => prod.ownerId === 'u1')
};

const productsReducer = (state = initialState, action: any) => {
    return state;
};

export default productsReducer