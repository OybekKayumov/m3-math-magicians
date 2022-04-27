import React from 'react';
import renderer from 'react-test-renderer';
import Quote from '../../components/Quote';

it('render correctly when there are no items', () => {
  const quote = renderer.create(<Quote />).toJSON();

  expect(quote).toMatchSnapshot();
});
