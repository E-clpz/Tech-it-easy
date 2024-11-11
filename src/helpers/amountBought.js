import {inventory} from "../constants/inventory.js";

function amountBought(tvArray) {
    let amount = 0;

    for (let i = 0; i < tvArray.length; i++) {
        amount += tvArray[i].originalStock;
    }
    return amount;
}

export default amountBought;

console.log("Totaal aantal ingekochte tv's:", amountBought(inventory));