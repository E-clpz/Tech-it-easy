import amountSold from './amountSold';
import amountBought from "./amountBought.js";

function leftToSell(tvArray) {
    const amount = amountBought(tvArray);
    const sold = amountSold(tvArray);
    return amount - sold;
}

export default leftToSell;