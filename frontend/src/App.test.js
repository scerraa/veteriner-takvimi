import { render, screen } from '@testing-library/react';
import App from './App';

test('renders main header', () => {
  render(<App />);
  const heading = screen.getByRole('heading', { name: /Veteriner Takvimi/i });
  expect(heading).toBeInTheDocument();
});
