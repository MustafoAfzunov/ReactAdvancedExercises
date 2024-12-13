import { render, screen } from '@testing-library/react';
import App from './App.tsx';

test('renders learn react link', () => {
  render(<App.tsx />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
