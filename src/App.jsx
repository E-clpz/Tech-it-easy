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

    //Deel 2
    //opdracht 1a
    const Type = inventory.map((tv) => tv.type);
    console.log(Type);

    //opdracht 1b
    const soldOut = inventory.filter((tv) => tv.leftToSell === 0);
    console.log(soldOut);

    //opdracht 1c
    const specificTV = inventory.find((tv) => tv.type === "NH3216SMART");
    console.log(specificTV);

    //opdracht 1d
    const newList = inventory.map((tv) => {
        return {
            tv: `${tv.brand} ${tv.type}`,
            goodForSport: tv.refreshRate >= 100,
        };
    });
    console.log(newList);

    //opdracht 1e
    const showAll = inventory.filter((tv) => {
        return {
            isBigScreen: tv.availableSizes >= 65,
        };
    });
    console.log(showAll);
    //opdracht 1f (krijg het niet werkend, ik krijg een lege array..)
    const hasAmbiLight = inventory.filter((tv) => tv.options.includes("ambiLight"));

    console.log(hasAmbiLight);


    return (
        <>
            <main className="main-container">
                <h1>Tech it easy dashboard</h1>
                <section>
                    <h2>Verkoopoverzicht</h2>
                    <div className="numbers-container">
                        <article className="numbers-container-sold-container">
                            <h3>Aantal verkochte producten</h3>
                            <h2>{amountSold(inventory)}</h2>
                        </article>
                        <article className="numbers-container-bought-container">
                            <h3>Aantal ingekochte producten</h3>
                            <h2>{amountBought(inventory)}</h2>
                        </article>
                        <article className="numbers-container-stock-container">
                            <h3>Aantal te verkopen producten</h3>
                            <h2>{leftToSell(inventory)}</h2>
                        </article>
                    </div>
                    <h3>Beschikbare merken</h3>
                    <ul>
                        {inventory.map((tv) => {
                            return <li key={`merkenlijst-${tv.type}`}>{tv.brand}</li>
                        })}
                    </ul>
                </section>
                <section>
                    <div>
                        <h3>Bestverkochte TV: {productName(bestSellingTv)}</h3>
                        <img
                            src={bestSellingTv.sourceImg}
                            alt="Bestseller"
                            style={{width: '300px'}}
                        />
                        <p>Verkocht:{amountSold([bestSellingTv])}</p>
                        <p>Beschikbare schermgroottes: {screenSize(bestSellingTv)}</p>
                        <p>Prijs: {productPrice(bestSellingTv.price)}</p>
                        <ul style={{listStyleType: "none"}}>
                            <li><img src={check} style={{width: '20px', height: '20px'}} alt="Icoon: aanwezig"/> wifi
                            </li>
                            <li><img src={minus} style={{width: '20px', height: '20px'}}
                                     alt="Icoon: niet aanwezig"/> speech
                            </li>
                            <li><img src={check} style={{width: '20px', height: '20px'}} alt="Icoon: aanwezig"/> hdr
                            </li>
                            <li><img src={check} style={{width: '20px', height: '20px'}}
                                     alt="Icoon: aanwezig"/> bluetooth
                            </li>
                            <li><img src={minus} style={{width: '20px', height: '20px'}}
                                     alt="Icoon: niet aanwezig"/> ambilight
                            </li>
                        </ul>
                    </div>
                </section>
                <section>
                    <h3>Alle TVs</h3>
                    <button type="button" onClick={sortBestSellers}>Meest verkocht eerst</button>
                    <button type="button" onClick={sortCheapest}>Goedkoopste eerst</button>
                    <button type="button" onClick={sortSport}>Meest geschikt voor sport eerst</button>
                </section>
                <section>
                    <h3>Tvs en hun opties</h3>
                    <ul style={{listStyleType: "none"}}>
                        {inventory.map((tv) => {
                            return (
                            <li key={`tv-options-${tv.type}`}>
                                <h4>
                                    {tv.brand} {tv.type}
                                </h4>
                                <img
                                    src={tv.sourceImg}
                                    alt = "afbeelding van TV"
                                    style={{width: "300px", height:"auto"}}
                                    />
                                <ul style={{listStyleType: "none"}}>
                                    {Object.entries(tv.options).map(([option, value]) => (
                                        <li key={`${tv.type} ${option}`}>
                                            <img
                                                src={value ? check : minus}
                                                alt={`Icoon: ${value ? "aanwezig" : "niet aanwezig"}`}
                                                style={{width: "20px", height: "20px"}}
                                            />
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        )})}
                    </ul>
                </section>
            </main>
        </>
    )
}
//blijkbaar moet er wer iets veranderen voor ik mag pushen.
export default App