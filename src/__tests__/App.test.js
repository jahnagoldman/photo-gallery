import App from '../App';
import React from 'react';
import renderer from 'react-test-renderer';

test('renders App component', () => {
  const component = renderer.create(<App/>);
  let app = component.toJSON();
  expect(app).toMatchSnapshot();
});