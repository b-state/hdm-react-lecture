import './App.css';

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
            <div className="food-list">
              <ul>
                {/* Erstes Element: Pizza Margherita */}
                <li className="food-item">
                  {/* Item Titel */}
                  <div className="food-item-title">
                    <h2>
                      Pizza Margherita
                    </h2>
                    {/* Item Zutaten */}
                    <p className="food-item-ing">
                      mit milder Tomatensauce und leckerem Edamer Käse
                    </p>
                    {/* Item Größen */}
                    <p className="food-item-size">
                      Wahl aus: Medium, Ø 26cm, Large, Ø 32cm, X-Large, Ø 40cm oder XX-Large, Ø 50cm.
                    </p>
                    {/* Item Preis */}
                    <p className="food-item-price">
                      10,49€
                    </p>
                  </div>
                  {/* Item Bild */}
                  <div className="food-item-img">
                    <img src="https://res.cloudinary.com/tkwy-prod-eu/image/upload/ar_1:1,c_thumb,h_120,w_120/f_auto/q_auto/dpr_2.0/v1680004728/static-takeaway-com/images/chains/de/pizza_pasta/products/2023_01_pizza_marghetira" alt="Pizza Margherita">
                    </img>
                  </div>
                  {/* Plus-Icon zum Hinzufügen */}
                  <div className="add-item">
                    <button className="add-item-button">
                      <img className="add-item-img" src="./images/add-icon.png" alt="Zum Warenkorb hinzufügen"></img>
                    </button>
                  </div>
                </li>
                {/* Nächstes Food Item analog zum ersten */}
                <li className="food-item">
                  <div className="food-item-title">
                    <h2>
                      Pizza Roma
                    </h2>
                    <p className="food-item-ing">
                      mit saftiger Salami und frischen Champignons auf milder Tomatensauce und leckerem Edamer Käse
                    </p>
                    <p className="food-item-size">
                      Wahl aus: Medium, Ø 26cm, Large, Ø 32cm, X-Large, Ø 40cm oder XX-Large, Ø 50cm.
                    </p>
                    <p className="food-item-price">
                      11,99€
                    </p>
                  </div>
                  <div className="food-item-img">
                    <img src="https://res.cloudinary.com/tkwy-prod-eu/image/upload/ar_1:1,c_thumb,h_120,w_120/f_auto/q_auto/dpr_2.0/v1680004728/static-takeaway-com/images/chains/de/pizza_pasta/products/2023_01_pizza_roma" alt="Pizza Margherita">
                    </img>
                  </div>
                  <div className="add-item">
                    <button className="add-item-button">
                      <img className="add-item-img" src="./images/add-icon.png" alt="Zum Warenkorb hinzufügen"></img>
                    </button>
                  </div>
                </li>
                {/* Nächstes Food Item analog zum ersten */}
                <li className="food-item">
                  <div className="food-item-title">
                    <h2>
                      Pizza Alaska
                    </h2>
                    <p className="food-item-ing">
                      mit saftigem Thunfisch und roten Zwiebeln auf milder Tomatensauce und leckerem Edamer Käse
                    </p>
                    <p className="food-item-size">
                      Wahl aus: Medium, Ø 26cm, Large, Ø 32cm, X-Large, Ø 40cm oder XX-Large, Ø 50cm.
                    </p>
                    <p className="food-item-price">
                      11,99€
                    </p>
                  </div>
                  <div className="food-item-img">
                    <img src="https://res.cloudinary.com/tkwy-prod-eu/image/upload/ar_1:1,c_thumb,h_120,w_120/f_auto/q_auto/dpr_2.0/v1680004728/static-takeaway-com/images/chains/de/pizza_pasta/products/2023_01_pizza_alaska" alt="Pizza Margherita">
                    </img>
                  </div>
                  <div className="add-item">
                    <button className="add-item-button">
                      <img className="add-item-img" src="./images/add-icon.png" alt="Zum Warenkorb hinzufügen"></img>
                    </button>
                  </div>
                </li>
              </ul>
            </div>
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
