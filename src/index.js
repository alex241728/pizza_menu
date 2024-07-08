import React from "react";
import ReactDOM from "react-dom/client";

import {pizzaData} from "./data.js"
import "./index.css"


function App() {
    return (
        <div className="container">
            <Header />
            <Menu />
            <Footer />
        </div>
    );
}

function Header() {
    return (
        <header className="header footer">
            <h1>Fast React Pizza Co.</h1>
        </header>
    );
}

function Menu() {
    const pizzas = pizzaData;
    const numPizzas = pizzas.length;

    return (
        <main className="menu">
            <h2>Our menu</h2>

            {
                numPizzas > 0 ? (
                    <>
                        <p>
                            Authentic Italian cuisine. 6 creative dishes to choose from. All
                            from our stone oven, all organic, all delicious.
                        </p>

                        <ul className="pizzas">
                            {pizzas.map((pizza) => (
                                <Pizza
                                    pizza={pizza}
                                    key={pizza.name}
                                />
                            ))}
                        </ul>
                    </>
                ) : null
            }
        </main>
    );
}

function Pizza({pizza}) {
    return (
        <li className={`pizza ${pizza.soldOut ? "sold-out" : ""}`}>
            <img src={pizza.photoName} alt={pizza.name}/>
            <h3>{pizza.name}</h3>
            <p>{pizza.ingredients}</p>
            {pizza.soldOut ? "SOLD OUT" : <span>{pizza.price}</span>}
        </li>
    );
}

function Footer() {
    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;

    return (
        <footer className="footer">
            {
                isOpen ? <Order openHour={openHour} closeHour={closeHour} /> : (
                    <p>
                        We're happy to welcome you between {openHour}:00 and {closeHour}:00.
                    </p>
                )
            }
        </footer>);
}

function Order({openHour, closeHour}) {
    return (
        <div className="order">
            <p>
                We're open from {openHour} to {closeHour}:00. Come visit us or order online.
            </p>
            <button className="btn">Order</button>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<
        React.StrictMode>
        <App/>
    </React.StrictMode>
);