import PRODUCTS from "../../data/dummy-data";
import { CREATE_PRODUCT, DELETE_PRODUCT } from "../actions/products";

const initialState = {
    availableProducts: PRODUCTS,
    userProducts: PRODUCTS.filter(prod => prod.ownerId === 'u1')
};

const productsReducer = (state = initialState, action: any) => {
    switch(action.type){
    case DELETE_PRODUCT: 
        
    return {
        ...state,
        userProducts: state.userProducts.filter(product => product.id !== action.pid),
        availableProducts: state.availableProducts.filter(product => product.id !== action.pid)
    }
    case CREATE_PRODUCT: 
    const  mostRecentProdId = state.availableProducts[state.availableProducts.length - 1].id
    let nextId = 'p' + (parseInt(mostRecentProdId.split('')[1]) + 1)
    const productToBeAdded = {
        id: nextId,
        ownerId: 'u1',
        ...action.createdProduct
    }
    return {
        ...state,
        availableProducts: {
            ...state.availableProducts,
            productToBeAdded
        },
        userProducts: {
            ...state.userProducts,
            productToBeAdded
        }
    }
    default:
    return state;}
};

export default productsReducer