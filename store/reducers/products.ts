import PRODUCTS from "../../data/dummy-data";
import Product from "../../models/products";
import { CREATE_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT } from "../actions/products";

const initialState = {
	availableProducts: PRODUCTS,
	userProducts: PRODUCTS.filter((prod) => prod.ownerId === "u1"),
};

const productsReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case DELETE_PRODUCT:
			return {
				...state,
				userProducts: state.userProducts.filter(
					(product) => product.id !== action.pid,
				),
				availableProducts: state.availableProducts.filter(
					(product) => product.id !== action.pid,
				),
			};
		case CREATE_PRODUCT:
			const productToBeAdded = new Product(
				new Date().toString(),
				"u1",
				action.createdProduct.title,
				action.createdProduct.description,
				action.createdProduct.imageUrl,
				parseInt(action.createdProduct.price),
			);
			return {
				...state,
				availableProducts: state.availableProducts.concat(productToBeAdded),
				userProducts: state.userProducts.concat(productToBeAdded)
			};
        case UPDATE_PRODUCT: 
        const productToBeOverWritten = new Product(
            action.pid,
            'u1',
            action.updatedProduct.title,
            action.updatedProduct.description,
            action.updatedProduct.imageUrl,
            parseInt(action.updatedProduct.price),
        );
        return {
            ...state,
            availableProducts: state.availableProducts.filter(prod => prod.id !== action.pid).concat(productToBeOverWritten),
            userProducts: state.userProducts.filter(prod => prod.id !== action.pid).concat(productToBeOverWritten)
    
        }
		default:
			return state;
	}
};

export default productsReducer;
