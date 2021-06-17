class CartItem {
    quantity: number
    price :number
    title :string
    sum :number
    constructor(quantity :number, price :number, title :string, sum :number) {
        this.quantity = quantity;
        this.price = price;
        this.title = title;
        this.sum = sum;
    }
}

export default CartItem