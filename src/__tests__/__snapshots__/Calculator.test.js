import React from 'react';
import renderer from 'react-test-renderer';
import Calculator from '../../components/Calculator';

it('renders correctly when there are no items', () => {
  const calc = renderer.create(<Calculator />).toJSON();

  expect(calc).toMatchSnapshot();
});
