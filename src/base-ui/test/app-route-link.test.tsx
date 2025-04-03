import { render, screen } from '@testing-library/react';
import AppRouteLink from '../link/app-route-link';

test('test app-link component', () => {
  render(<AppRouteLink to='/discover' title="hello world"/>);
  const linkElement = screen.getByText(/hello world/i);
  expect(linkElement).toBeInTheDocument;
});
