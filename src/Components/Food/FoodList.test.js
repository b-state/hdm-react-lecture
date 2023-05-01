import {fireEvent, render, screen} from '@testing-library/react';
import FoodList from "./FoodList";
import * as foodAPI from '../../utils/foodAPI';





describe('Correct items in FoodList', () => {

    test("Renders category 'beliebt' and food 'Pizza Margaretha'", () => {
        render(<FoodList category={'beliebt'}/>);
        const textElement = screen.getByText(/Pizza Margherita/i);
        expect(textElement).toBeInTheDocument();
    });

    test.each([
        ['beliebt', 'Pizza Margherita'],
        ['beliebt', 'Pasta alla Panna'],
        ['pizza', 'Pizza Roma'],
        ['salate', 'Gemischter Salat'],
    ])("Renders category '%s' and food '%s'", (category, expected) => {
        render(<FoodList category={category}/>);
        const textElement = screen.getByText(expected);
        expect(textElement).toBeInTheDocument();
    })
})

describe('Modal test', () => {
    test('Renders modal after click on plus button', () => {
        render(<FoodList category={'beliebt'}/>);
        const firstButton = screen.getAllByAltText(/Zum Warenkorb hinzufügen/i)[0]
        fireEvent.click(firstButton)
        const modal = screen.getByText(/Wähle eine Größe:/i)
        expect(modal).toBeInTheDocument()
    })
})

describe('API calls test', () => {

    test('should render with an empty food list', () => {

        foodAPI.fetchFood = jest.fn().mockReturnValue({
            "beliebt": [
                {
                    "title": "Pizza Margherita",
                    "ing": "der italienische Klassiker mit milder Tomatensauce und leckerem Edamer Käse",
                    "size": "Wahl aus: Medium, Ø 26cm, Large, Ø 32cm, X-Large, Ø 40cm oder XX-Large, Ø 50cm.",
                    "price": 10.49,
                    "img": "https://res.cloudinary.com/tkwy-prod-eu/image/upload/ar_1:1,c_thumb,h_120,w_120/f_auto/q_auto/dpr_2.0/v1680004728/static-takeaway-com/images/chains/de/pizza_pasta/products/2023_01_pizza_marghetira"
                },
                {
                    "title": "Pasta alla Panna",
                    "ing": "mit Hinterschinken und Käse-Sahnesauce",
                    "size": "Wahl aus: mit Penne, mit Spaghetti, mit Tortellini und mit extra Käse überbacken.",
                    "price": 11.49,
                    "img": "https://res.cloudinary.com/tkwy-prod-eu/image/upload/ar_1:1,c_thumb,h_120,w_120/f_auto/q_auto/dpr_1.0/v1680004728/static-takeaway-com/images/chains/de/pizza_pasta/products/2023_01_pasta_alla_panna"
                },
                {
                    "title": "Caesar Salat",
                    "ing": "gemischter Salat mit feinem Hähnchenfilet, frisch gehobeltem Grana Padano und Croûtons",
                    "size": "Wahl aus: Klein oder Groß",
                    "price": 6.99,
                    "img": "https://previews.123rf.com/images/baibaz/baibaz2001/baibaz200100016/138828046-bowl-of-healthy-vegetable-salad-isolated-on-white-background-top-view.jpg"
                }
            ],
            "pizza": [
                {
                    "title": "Pizza Margherita",
                    "ing": "mit milder Tomatensauce und leckerem Edamer Käse",
                    "size": "Wahl aus: Medium, Ø 26cm, Large, Ø 32cm, X-Large, Ø 40cm oder XX-Large, Ø 50cm.",
                    "price": 10.49,
                    "img": "https://res.cloudinary.com/tkwy-prod-eu/image/upload/ar_1:1,c_thumb,h_120,w_120/f_auto/q_auto/dpr_2.0/v1680004728/static-takeaway-com/images/chains/de/pizza_pasta/products/2023_01_pizza_marghetira"
                },
                {
                    "title": "Pizza Roma",
                    "ing": "mit saftiger Salami und frischen Champignons auf milder Tomatensauce und leckerem Edamer Käse",
                    "size": "Wahl aus: Medium, Ø 26cm, Large, Ø 32cm, X-Large, Ø 40cm oder XX-Large, Ø 50cm.",
                    "price": 11.99,
                    "img": "https://res.cloudinary.com/tkwy-prod-eu/image/upload/ar_1:1,c_thumb,h_120,w_120/f_auto/q_auto/dpr_2.0/v1680004728/static-takeaway-com/images/chains/de/pizza_pasta/products/2023_01_pizza_roma"
                },
                {
                    "title": "Pizza Alaska",
                    "ing": "mit saftigem Thunfisch und roten Zwiebeln auf milder Tomatensauce und leckerem Edamer Käse",
                    "size": "Wahl aus: Medium, Ø 26cm, Large, Ø 32cm, X-Large, Ø 40cm oder XX-Large, Ø 50cm.",
                    "price": 11.99,
                    "img": "https://res.cloudinary.com/tkwy-prod-eu/image/upload/ar_1:1,c_thumb,h_120,w_120/f_auto/q_auto/dpr_2.0/v1680004728/static-takeaway-com/images/chains/de/pizza_pasta/products/2023_01_pizza_alaska"
                }
            ],
            "pasta": [
                {
                    "title": "Pasta Bolognese",
                    "ing": "mit frischer Rinder-Hackfleischsauce",
                    "size": "Wahl aus: mit Penne, mit Spaghetti, mit Tortellini und mit extra Käse überbacken.",
                    "price": 11.49,
                    "img": "https://res.cloudinary.com/tkwy-prod-eu/image/upload/ar_1:1,c_thumb,h_120,w_120/f_auto/q_auto/dpr_2.0/v1680361829/static-takeaway-com/images/chains/de/pizza_pasta/products/2023_01_pasta_bolognese"
                },
                {
                    "title": "Pasta alla Panna",
                    "ing": "mit Hinterschinken und Käse-Sahnesauce",
                    "size": "Wahl aus: mit Penne, mit Spaghetti, mit Tortellini und mit extra Käse überbacken.",
                    "price": 11.49,
                    "img": "https://res.cloudinary.com/tkwy-prod-eu/image/upload/ar_1:1,c_thumb,h_120,w_120/f_auto/q_auto/dpr_1.0/v1680004728/static-takeaway-com/images/chains/de/pizza_pasta/products/2023_01_pasta_alla_panna"
                },
                {
                    "title": "Pasta Arrabbiata (scharf)",
                    "ing": "mit feuriger Tomatensauce und Peperoni",
                    "size": "Wahl aus: mit Penne, mit Spaghetti, mit Tortellini und mit extra Käse überbacken.",
                    "price": 11.49,
                    "img": "https://res.cloudinary.com/tkwy-prod-eu/image/upload/ar_1:1,c_thumb,h_120,w_120/f_auto/q_auto/dpr_2.0/v1680361829/static-takeaway-com/images/chains/de/pizza_pasta/products/2023_01_pasta_arrabiata"
                }
            ],
            "salate": [
                {
                    "title": "Gemischter Salat",
                    "ing": "Salate der Saison mit Cherrytomaten, Gurken, Karotten, Mais und roten Zwiebeln",
                    "size": "Wahl aus: Klein oder Groß",
                    "price": 3.99,
                    "img": "https://previews.123rf.com/images/baibaz/baibaz2001/baibaz200100016/138828046-bowl-of-healthy-vegetable-salad-isolated-on-white-background-top-view.jpg"
                },
                {
                    "title": "Caesar Salat",
                    "ing": "gemischter Salat mit feinem Hähnchenfilet, frisch gehobeltem Grana Padano und Croûtons",
                    "size": "Wahl aus: Klein oder Groß",
                    "price": 6.99,
                    "img": "https://previews.123rf.com/images/baibaz/baibaz2001/baibaz200100016/138828046-bowl-of-healthy-vegetable-salad-isolated-on-white-background-top-view.jpg"
                },
                {
                    "title": "Hirten Salat",
                    "ing": "gemischter Salat mit Hirtenkäse, Peperoni, schwarzen Oliven und Paprika",
                    "size": "Wahl aus: Klein oder Groß",
                    "price": 6.99,
                    "img": "https://previews.123rf.com/images/baibaz/baibaz2001/baibaz200100016/138828046-bowl-of-healthy-vegetable-salad-isolated-on-white-background-top-view.jpg"
                }
            ]
        })

        render(<FoodList category={'beliebt'}/>);

        const textElement = screen.getByText(/Pizza Margherita/i);
        expect(textElement).toBeInTheDocument();
    });
})