import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Olá, Gildemberg Santos/i);
  expect(linkElement).toBeInTheDocument();
});
