import { shallow } from 'enzyme';
import React from 'react';
import Header from './header';

it('contains 3 NavLinks via shallow', () => {
  const numLinks = shallow(<Header />).find('NavLink').length;
  expect(numLinks).toEqual(3);
});
