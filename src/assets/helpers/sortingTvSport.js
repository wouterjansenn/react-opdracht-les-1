export function sortTvByRefreshRate(inventory) {
    return inventory.sort((a, b) => {
        if (a.refreshRate < b.refreshRate) {
            return 1
        }
        if (a.refreshRate > b.refreshRate) {
            return -1
        } else return 0
    })
}