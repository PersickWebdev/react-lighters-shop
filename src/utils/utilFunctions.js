export const calculateTotalAmount = (itemsObject) => {
    return [].concat.apply([], Object.values(itemsObject)).length;
}

export const calculateTotalPrice = (itemsObject) => {
    let amount = 0;
    for (let array in itemsObject) {
        for (let item of itemsObject[array]) {
            amount += item.price
        }
    }
    return amount;
}