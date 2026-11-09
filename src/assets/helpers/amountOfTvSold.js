export function amountSold(data) {
    let sold = 0;

    if (Array.isArray(data)) {
        for (let i = 0; i < data.length; i++) {
            sold += data[i].sold;
        }
    } else {
        sold = data.sold;
    }

    return sold;
}
export function totalSold(inventory, bestSellingTv) {
    return amountSold(inventory) + amountSold(bestSellingTv);
}