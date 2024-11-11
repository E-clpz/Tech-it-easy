import {inventory} from "../constants/inventory.js";

function amountSold(tvArray) {
    let amount = 0;

    for (let i = 0; i < tvArray.length; i++) {
        amount = amount + tvArray[i].sold;
    }
    return amount;
}

export default amountSold;

console.log("Totaal aantal verkochte tv's:", amountSold(inventory));
