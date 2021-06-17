export const ADD_TO_CART = 'ADD_TO_CART'
export const DELETE_FROM_CART = 'DELETE_FROM_CART'

export const addToCart = (product :any) => {
    return {type: ADD_TO_CART, product: product};
}

export const deleteFromCart = (product :any) => {
    return {type: DELETE_FROM_CART, product: product}
}