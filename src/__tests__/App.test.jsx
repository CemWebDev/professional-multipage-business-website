import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders first Logo nav link to root ("/")', () => {
  render(<App />);

  const logoLinks = screen.getAllByRole('link', { name: /logo/i });
  expect(logoLinks.length).toBeGreaterThan(0);

  const firstLogo = logoLinks[0];
  expect(firstLogo).toBeInTheDocument();
  expect(firstLogo).toHaveAttribute('href', '/');
});
