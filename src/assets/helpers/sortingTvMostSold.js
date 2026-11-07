import {inventory} from "../../constants/inventory.js";

export function sortTvByAmountSold(inventory) {
   return inventory.sort((a, b) => {
        if (a.sold < b.sold) {
            return 1
        }
        if (a.sold > b.sold) {
            return -1
        } else return 0
    })
}

