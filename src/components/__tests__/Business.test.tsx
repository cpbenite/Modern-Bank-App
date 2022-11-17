import { waitFor, render, screen, cleanup } from '@testing-library/react';
import Business from '../Business';

afterEach(() => {
  cleanup();
})

describe("Business.tsx", () => {
  
  const feature = {
    id: "feature-1",
    title: "Rewards",
    content:
      "The best credit cards offer some tantalizing combinations of promotions and prizes",
  }

  test('renders Business component', () => {
    const component = render(<Business />);
    screen.debug();
    expect(true).toBeTruthy();
  })

  test('feature map', () => {
    const component = render(<Business />);
    const featureElement = screen.queryByTestId("feature-1");
    expect(featureElement).toBeInTheDocument();
    expect(featureElement).toHaveTextContent(feature.title);
    expect(featureElement).toHaveTextContent(feature.content);
  })

})
