import { render, screen } from '@testing-library/react';
import FundList from "./components/FundList";


test('render home component', ()=> {
  render(<FundList/>)
  const textElement = screen.getByText('Funding list');
  expect(textElement).toBeInTheDocument()
})