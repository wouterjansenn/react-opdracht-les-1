export function screenSizes(objectName) {
    let sizes = "";

    for (let i = 0; i < objectName.availableSizes.length; i++) {
        const inches = objectName.availableSizes[i];
        const centimeter = Math.round(inches * 2.54);

        sizes += `${inches} inch (${centimeter} cm)`;

        if (i < objectName.availableSizes.length - 1) {
            sizes += " | ";
        }
    }

    return sizes;
}
