import './App.css';
import FoodList from "./Components/Food/FoodList";

function App(props) {
  return (
      <div className="App">

        {/* Linke Seite zur Auswahl des Essens */}
        <div className="food-side">

          {/* Obere Hälfte der Seite: Bild und Menü */}
          <div className="upperhalf">

            {/* Großes Bild */}
            <div className="hero-image">
              <img src="https://res.cloudinary.com/tkwy-prod-eu/image/upload/ar_40:9,c_thumb,w_1020/f_auto/q_auto/dpr_2.0/v1679476682/static-takeaway-com/images/restaurants/de/O3NRRRN1/headers/header" alt="Pizza"></img>
            </div>

            {/* Text unter Bild: Titel des Shops sowie Menü */}
            <div className="hero-text">
              {/* Titel des Shops sowie Info-Text*/}
              <div className="menu-text">
                <h1>Pizza + Pasta</h1>
                <p>20-45 Minuten | 1,49€ Liefergebühren | Mindestbestellwert 25,00€ | Kostenlose Lieferung ab 30,00€</p>
              </div>
              {/* Menü: Suche und Buttons für vers. Gerichte */}
              <div className="menu-buttons">
                <button className="search-button">
                  <img className="search-button-img" src="./images/search-icon.png" alt="Suche"></img>
                </button>
                <button className="food-buttons">
                  Beliebt
                </button>
                <button className="food-buttons">
                  Pizza
                </button>
                <button className="food-buttons">
                  Pasta
                </button>
                <button className="food-buttons">
                  Salate
                </button>
              </div>
            </div>
          </div>

          {/* Untere Hälfte der linken Seite: Auswahl Gerichte*/}
          <div className="bottomhalf">
            {/* Section Header */}
            <div className="foodsection-header">
              <h2>Beliebt</h2>
            </div>
            {/* Liste der angezeigten Elemente: Hier Pizza */}
            <FoodList/>
          </div>
        </div>

        {/* Rechte Seite für Warenkorb */}
        <div className="cart-side">
          {/* Titel */}
          <div className="cart-header">
            <h1>Warenkorb</h1>
          </div>
          {/* Inhalt, aktuell Bild und Text, keine Food-Elemente */}
          <div className="cart-content">
            <img className="shopping-img" src="./images/shop-icon.png" alt="Shopping-Cart"></img>
            <p>
              Füge einige leckere Gerichte aus der Speisekarte hinzu und bestelle dein Essen.
            </p>
          </div>
        </div>
      </div>
  );
}

export default App;
