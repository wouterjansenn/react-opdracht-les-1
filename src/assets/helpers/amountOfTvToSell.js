import {totalBought} from "./amountOfTVBought.js";
import {totalSold} from "./amountOfTvSold.js";
import {bestSellingTv, inventory} from "../../constants/inventory.js";

export function amountOfTvToSell (){
    return (totalBought(inventory, bestSellingTv) - totalSold(inventory, bestSellingTv))
}