import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders Home nav link without crashing', () => {
  render(<App />);
  expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument();
});
