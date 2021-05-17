import React from 'react';
import { shallow } from 'enzyme';
import EventList from '../components/event-list/EventList';
import Event from '../components/event/Event';

describe('<EventList /> component', () => {
  test('render the correct number of events', () => {
    const EventListWrapper = shallow(<EventList events={[{ id:1 },{ id:2 },{ id:3 }]} />);
    expect(EventListWrapper.find(Event)).toHaveLength(3);
  })
});