export const DELETE_PRODUCT = 'DELETE_PRODUCT'
export const CREATE_PRODUCT = 'CREATE_PRODUCT'
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT'

export const deleteProduct = (productId :string) => {
    return {type: DELETE_PRODUCT, pid: productId}
}

export const createProduct = (createdProduct :any) => {
    return {type: CREATE_PRODUCT, createdProduct: createdProduct}
}

export const updateProduct = (updatedProduct :any) => {
    return {type: UPDATE_PRODUCT, updatedProduct}
}