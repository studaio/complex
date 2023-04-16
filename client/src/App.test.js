import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Fibonacci Calculator', () => {
  render(<App />);
  const linkElement = screen.getByText(/Fibonacci Calculator/i);
  expect(linkElement).toBeInTheDocument();
});
