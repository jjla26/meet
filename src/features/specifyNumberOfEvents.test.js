import { mount } from 'enzyme';
import { loadFeature, defineFeature } from 'jest-cucumber'

import App from '../components/app/App'
const feature = loadFeature('./src/features/specifyNumberOfEvents.feature')

defineFeature(feature, test => {
  test('When a user hasn’t specific a number, 32 is the default number', ({ given, when, then }) => {
    let AppWrapper
    given('the main page is loaded', () => {
      AppWrapper = mount(<App />)
    });

    when('the user gets the list of events', () => {
      AppWrapper.update()
    });

    then('the list of events should have 32 events by default.', () => {
      expect(AppWrapper.find('.event')).toHaveLength(32)
      AppWrapper.unmount();
    });
  });

  test('User can change the number of events they want to see.', ({ given, when, then }) => {
    let AppWrapper
    given('the user wanted to see more/less events', () => {
      AppWrapper = mount(<App />)
    });

    when('the user changes the number of events', () => {
      const event = { target: { value: 15 }}
      AppWrapper.find('.numberOfEvents').simulate('change', event)
    });

    then('the list of events should be as long as the number specify by the user', () => {
      AppWrapper.update()
      expect(AppWrapper.find('.event')).toHaveLength(AppWrapper.state('numberOfEvents'))
      AppWrapper.unmount();
    });
  });

})