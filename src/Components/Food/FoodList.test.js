import { render, screen } from '@testing-library/react';
import FoodList from "./FoodList";

test('renders FoodList item for Pizza Margherita', () => {
    render(<FoodList category={'beliebt'} />);
    const textElement = screen.getByText(/Pizza Margherita/i);
    expect(textElement).toBeInTheDocument();
});
