import { render, screen } from '@testing-library/react';
import App from './App';

test('the counter starts at 0', () => {

  render(<App />);
  //screen object를 이용해서 원하는 엘레멘트에 접근.
  const counterElement = screen.getByTestId("counter");
  expect(counterElement).toHaveTextContent(0);
});

test('minus button has crrect text',() => {
  render(<App/>);
  const buttonElement = screen.getByTestId("minus-button");
  expect(buttonElement).toHaveTextContent("-");
})

test('plus button has crrect text',() => {
  render(<App/>);
  const buttonElement = screen.getByTestId("plus-button");
  expect(buttonElement).toHaveTextContent("+");
})

