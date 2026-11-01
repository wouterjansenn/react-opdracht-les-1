import {amountSold} from "./amountOfTvSold.js";

export function amountOfTVBought(data) {
    let sold = 0;

    if (Array.isArray(data)) {
        for (let i = 0; i < data.length; i++) {
            sold += data[i].originalStock;
        }
    } else {
        sold = data.originalStock;
    }

    return sold;
}
export function totalBought(inventory, bestSellingTv) {
    return amountOfTVBought(inventory) + amountOfTVBought(bestSellingTv)
}