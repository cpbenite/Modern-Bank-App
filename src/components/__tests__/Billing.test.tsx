import { render, screen } from '@testing-library/react';
import Billing from '../Billing';

describe("Billing.tsx", () => {
  it('renders billing component', () => {
    render(<Billing />)
    screen.debug();
    expect(true).toBeTruthy();
  })
})
