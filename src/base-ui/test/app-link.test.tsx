import { render, screen } from '@testing-library/react';
import AppLink from '../link/app-link';

test('test app-link component', () => {
  render(<AppLink title="hello world"/>);
  const linkElement = screen.getByText(/hello world/i);
  expect(linkElement).toBeInTheDocument;
});
