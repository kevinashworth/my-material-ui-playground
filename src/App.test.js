import { render, screen } from '@testing-library/react';
import App from './App';

test('[was: renders learn react link]', () => {
  render(<App />);
  const linkElement = screen.getByText(/Dummy/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders MultilineFilledInput component', () => {
  render(<App />);
  const multilineInputElement = screen.getByRole('textbox');
  expect(multilineInputElement).toBeInTheDocument();
});
