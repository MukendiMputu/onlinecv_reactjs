import { render, screen } from '@testing-library/react';
import App from './App';

test('renders contact me link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Contact Me/i);
  expect(linkElement).toBeInTheDocument();
});
