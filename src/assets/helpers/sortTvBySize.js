function getBiggestSize(television) {
    let biggestSize = 0;

    for (let i = 0; i < television.availableSizes.length; i++) {
        if (television.availableSizes[i] > biggestSize) {
            biggestSize = television.availableSizes[i];
        }
    }
    return biggestSize;
}

export function sortTvSizes(inventory) {
    return inventory.sort((a, b) => {
        return getBiggestSize(b) - getBiggestSize(a);
    })}