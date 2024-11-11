function screenSize (tv) {
    let result = "";

    for (let i = 0; i < tv.availableSizes.length; i++) {
        const sizeInInches = tv.availableSizes[i];
        const sizeInCm = Math.round(sizeInInches * 2.54);

        if (i > 0) {
            result += " | ";
        }
        result += `${sizeInInches} inches (${sizeInCm} cm)`;
    }

    return result;
}

export default screenSize;