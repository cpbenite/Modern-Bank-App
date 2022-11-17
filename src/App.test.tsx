import { render, screen } from '@testing-library/react';
import App from './App';

describe("App.tsx", () => {
  test("Vitest is working", () => {
    expect(true).toBeTruthy();
  })

  test('renders app component', () => {
    render(<App />)
    screen.debug();
    expect(true).toBeTruthy();
  })

  
})

