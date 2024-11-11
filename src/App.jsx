import './App.css';
import {bestSellingTv, inventory} from "./constants/inventory.js";
import amountSold from "./helpers/amountSold.js";
import amountBought from "./helpers/amountBought.js";
import leftToSell from "./helpers/leftToSell.js";
import productName from "./helpers/productName.js";
import productPrice from "./helpers/productPrice.js";
import screenSize from "./helpers/screenSize.js";
import minus from './assets/minus.png';
import check from './assets/check.png';

function App() {
    function sortBestSellers() {
        inventory.sort((a, b) => {
            return a.sold - b.sold;
        });

        console.log(inventory);
    }

    function sortCheapest() {
        inventory.sort((a, b) => {
            return a.price - b.price;
        });

        console.log(inventory);
    }

    function sortSport() {
        inventory.sort((a, b) => {
            return a.refreshRate - b.refreshRate;
        });

        console.log(inventory);
    }
    return (
        <>
            <main className="page-container">
                <h1>Tech it easy dashboard</h1>
                <section>
                    <h2>Verkoopoverzicht</h2>
                    <div className="dashboard-container">
                        <article className="green-text">
                            <h3>Aantal verkochte producten</h3>
                            <h2>{amountSold(inventory)}</h2>
                        </article>
                        <article className="blue-text">
                            <h3>Aantal ingekochte producten</h3>
                            <h2>{amountBought(inventory)}</h2>
                        </article>
                        <article className="red-text">
                            <h3>Aantal te verkopen producten</h3>
                            <h2>{leftToSell(inventory)}</h2>
                        </article>
                    </div>
                </section>
                <section>
                    <div>
                        <h3>Bestverkochte TV: {bestSellingTv.name} ({bestSellingTv.brand})</h3>
                        <img
                            src={bestSellingTv.sourceImg}
                            alt="Bestseller"
                            style={{width: '300px'}}
                        />
                        <p>Verkocht:{amountSold([bestSellingTv])}</p>
                        <p>Beschikbare schermgroottes: {screenSize(bestSellingTv)}</p>
                        <p>Prijs: {productPrice(bestSellingTv.price)}</p>
                        <ul style={{ listStyleType: "none" }}>
                            <li><img src={check} style={{ width: '20px', height: '20px' }} alt="Icoon: aanwezig"/> wifi</li>
                            <li><img src={minus} style={{ width: '20px', height: '20px' }} alt="Icoon: niet aanwezig"/> speech</li>
                            <li><img src={check} style={{ width: '20px', height: '20px' }} alt="Icoon: aanwezig"/> hdr</li>
                            <li><img src={check} style={{ width: '20px', height: '20px' }} alt="Icoon: aanwezig"/> bluetooth</li>
                            <li><img src={minus} style={{ width: '20px', height: '20px' }} alt="Icoon: niet aanwezig"/> ambilight</li>
                        </ul>
                    </div>
                </section>
                <section>
                    <div>
                        <button type="button" onClick={sortBestSellers}>Meest verkocht eerst</button>
                        <button type="button" onClick={sortCheapest}>Goedkoopste eerst</button>
                        <button type="button" onClick={sortSport}>Meest geschikt voor sport eerst</button>
                    </div>
                </section>
            </main>
        </>
    )
}

export default App
