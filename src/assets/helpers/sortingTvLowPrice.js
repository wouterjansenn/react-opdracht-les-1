export function sortTvByPrice(inventory) {
    return inventory.sort((a, b) => {
        if (a.price > b.price) {
            return 1
        }
        if (a.price < b.price) {
            return -1
        } else return 0
    })
}