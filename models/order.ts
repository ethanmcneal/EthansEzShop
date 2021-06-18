class Order {
    id :string
    items :any
    totalAmount :number
    date :string
    constructor(id :string, items :any, totalAmount :number, date :string) {
        this.id = id
        this.items = items
        this.totalAmount = totalAmount
        this.date = date
    }
}

export default Order