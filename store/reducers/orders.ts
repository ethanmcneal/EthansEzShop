import Order from "../../models/order";
import { ADD_ORDER } from "../actions/orders";

const initialState = {
	orders: [],
};

export default (state = initialState, action: any) => {
	switch (action.type) {
		case ADD_ORDER:
			const newOrder = new Order(
				new Date().toString(),
				action.orderData.items,
				action.orderData.amount,
				new Date().toString(),
			);

            return {
                ...state,
                orders: [...state.orders, newOrder]
            }
			break;

		default:
            return state
			break;
	}
    return state
};
