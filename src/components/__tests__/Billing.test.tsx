import { render, screen } from '@testing-library/react';
import Billing from '../Billing';

describe("Billing.tsx", () => {
  const component = render(<Billing />);

  test('renders billing component', () => {
    screen.debug();
    expect(true).toBeTruthy();
  })

})
