import { render, screen } from '@testing-library/react';
import App from './App';

describe("App.tsx", () => {
  it("Vitest is working", () => {
    expect(true).toBeTruthy();
  })

  it('renders app component', () => {
    render(<App />)
    screen.debug();
    expect(true).toBeTruthy();
  })
})

