import {inventory} from './inventory.js';

// console.log(inventory)

//tv.type//
export const tvType = inventory.map((television) => {
    return television.type
})
// console.log(tvType)

export const tvSoldOut = inventory.filter((television) =>{
    if (television.sold === television.originalStock)
        return television
})

//find NH3216SMA
export const tvSmart = inventory.find((tvInfo) => {
    return (tvInfo.type === "NH3216SMART")
})

export const sportTv = inventory.filter((television) => {
    return (television.refreshRate >= 100)
})


export const bigTelevision = inventory.filter((television) => {
    for (let i = 0; i < television.availableSizes.length; i++){

        if (television.availableSizes[i] >= 65) {
            return true;
        }
    }
    return false;})

export const tvAmbilight = inventory.filter((television) => {
    for (let i = 0; i < television.options.length; i++){

        if ((television.options[i].name === "ambiLight" && television.options[i].applicable === true)) {
            return true;
        }
    }
    return false;})
