import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../components/NumberOfEvents/NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsWrapper
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents value={32} />)
  })

  test('should render the input to change the number of events', () => {
    expect(NumberOfEventsWrapper.find('.numberOfEvents')).toHaveLength(1);
  })  

  test('should render value 32 events by default', () => {
    expect(NumberOfEventsWrapper.find('.numberOfEvents').prop('value')).toBe(32);
  })

  test('should change when someone change the number', () => {
    NumberOfEventsWrapper.setProps({ value: 10 })
    expect(NumberOfEventsWrapper.find('.numberOfEvents').prop('value')).toBe(10);
  })

});