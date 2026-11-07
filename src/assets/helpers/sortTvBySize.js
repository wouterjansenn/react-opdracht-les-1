export function sortTvSizes(inventory) {
    return inventory.availableSizes.sort((a, b) => {
        if (a.availableSizes > b.availableSizes) {
            return 1
        }
        if (a.availableSizes < b.availableSizes) {
            return -1
        } else return 0
    })
}

// //
// export function sortTvBySize (inventory){
//     return inventory.sort((a,b) => {
//         if (a.sortTvBySi)
//
//     })
//
// }