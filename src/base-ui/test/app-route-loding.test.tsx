import { render, screen } from '@testing-library/react';
import AppRouteLoading from '@/base-ui/loading/app-route-loading';

test('test app-link component', () => {
  render(<AppRouteLoading />);
  expect(screen.getByTestId('app-route-loading')).toBeInTheDocument;
});
