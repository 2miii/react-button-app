import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('the counter starts at 0', () => {

  render(<App />);
  //screen object를 이용해서 원하는 엘레멘트에 접근.
  const counterElement = screen.getByTestId("counter");
  expect(counterElement).toHaveTextContent(0);
});

//버튼 test
test('minus button has crrect text',() => {
  render(<App/>);
  const buttonElement = screen.getByTestId("minus-button");
  expect(buttonElement).toHaveTextContent("-");
});

test('plus button has crrect text',() => {
  render(<App/>);
  const buttonElement = screen.getByTestId("plus-button");
  expect(buttonElement).toHaveTextContent("+");
});

//버튼 클릭 시 카운터
test('when the - button is pressed, the counter changes to -1',() => {
  render(<App/>);
  const buttonElement = screen.getByTestId("minus-button");
  fireEvent.click(buttonElement);
  const counterElement = screen.getByTestId("counter");
  expect(counterElement).toHaveTextContent("-1");
});

test('when the + button is pressed, the counter changes to 1',() => {
  render(<App/>);
  const buttonElement = screen.getByTestId("plus-button");
  fireEvent.click(buttonElement);
  const counterElement = screen.getByTestId("counter");
  expect(counterElement).toHaveTextContent("1");
});


//on/off 버튼
test('on/off button has blue color', () => {
  render(<App/>);
  const buttonElement = screen.getByTestId("on/off-button");
  expect(buttonElement).toHaveStyle({backgroundColor: " blue"})
});

//on/off 버튼을 클릭할 때 -,+ 버튼을 못누르게 막기
test('Prevent the -,+ button from being pressed when the on/off button is clicked',() => {
  render(<App/>);
  const onOffButtonElement = screen.getByTestId("on/off-button");
  fireEvent.click(onOffButtonElement);
  const plusButtonElement = screen.getByTestId("plus-button");
  expect(plusButtonElement).toBeDisabled();
})