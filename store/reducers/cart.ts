import CartItem from "../../models/cart-item";
import { ADD_TO_CART, CLEAR_CART, DELETE_FROM_CART } from "../actions/cart";
import { DELETE_PRODUCT } from "../actions/products";

const initialState = {
    items: {},
    totalAmount: 0
};

export default (state :any = initialState, action :any) => {
    switch (action.type) {
        case ADD_TO_CART:
            const addedProduct = action.product;
            const price = addedProduct.price;
            const title = addedProduct.title;

            let nextItem;
            if (state.items[addedProduct.id]){
                nextItem = new CartItem(
                    state.items[addedProduct.id].quantity + 1,
                    price,
                    title,
                    state.items[addedProduct.id].sum + price
                );
                
            } else {
                nextItem = new CartItem(1, price, title, price)
                
            }
            return {
                ...state,
                items: {...state.items, [addedProduct.id]: nextItem},
                totalAmount: state.totalAmount + price
            }

            case DELETE_FROM_CART:
                const productToBeRemoved = action.product;
                const priceToBeDeducted = productToBeRemoved.price
                let newState = state.items;
                if(state.items[productToBeRemoved.productId].quantity > 1){
                    newState[productToBeRemoved.productId].quantity -= 1
                    newState[productToBeRemoved.productId].sum -= priceToBeDeducted
                } else {
                    delete newState[productToBeRemoved.productId]
                }
                return {
                    ...state,
                    items: newState,
                    totalAmount: state.totalAmount - priceToBeDeducted
                }
            case CLEAR_CART:
                return {
                    ...state,
                    items: {},
                    totalAmount: 0
                }
            case DELETE_PRODUCT:
                if(!state.items[action.pid]){
                    return state
                }
                const updatedItems = {...state.items};
                const itemTotal = state.items[action.pid].sum
                delete updatedItems[action.pid];
                return {
                    ...state,
                    items: updatedItems,
                    totalAmount: state.totalAmount - itemTotal
                }
        default:
            return state
    }
    
    return state
}