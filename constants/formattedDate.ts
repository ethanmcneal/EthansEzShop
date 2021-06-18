export const formattedDate = (dateString :string) => {
    let arr :any = dateString.split(' ')
    let date :any = arr.map((x :string, i :number) => i < 3 ? x : '')
    return date.join(' ')
}