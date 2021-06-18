import { ADD_ORDER } from "../actions/orders";

const initialState = {
    orders: []
}

export default (state = initialState, action :any) => {
    switch (action.type) {
        case ADD_ORDER:
            
            break;
    
        default:
            break;
    }
}