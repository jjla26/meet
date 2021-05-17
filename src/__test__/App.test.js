import React from 'react';
import { shallow } from 'enzyme';
import App from '../components/app/App';
import EventList from '../components/event-list/EventList';
import CitySearch from '../components/citysearch/CitySearch';

describe('<App /> component', () => {
  let AppWrapper;
  beforeAll(() => {
    AppWrapper = shallow(<App />);
  })
  test('render list of events', () => {
    expect(AppWrapper.find(EventList)).toHaveLength(1);
  })

  test('render CitySearch', () => {
    expect(AppWrapper.find(CitySearch)).toHaveLength(1);
  });
});