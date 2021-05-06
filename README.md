# Meet App

### Features and Requirements

#### Key Features:
1. Filter events by city.
###### User Story: 
  * As an user, I would like to be able to filter events by city so I can see the events that are running in one city.
###### Scenarios: 
  1.  When user hasn’t searched for a city, show upcoming events from all cities.
      Given the user hasn’t searched for a city
      When the user opens the app
      Then the user should see a list of upcoming events
  2.  User should see a list of suggestions when they search for a city.
      Given the user main page is open
      When the user writes in the search box
      The user should be able to get suggestions that match what they have typed
  3.	User can select a city from the suggested list.
      Given the user typed Berlin and the list of suggested cities is showing
      When the user selects the city
      Then the city should change and show the upcoming events for that city 

2. Show/hide event details.
###### User Story: 
  * As an user, I would like to be able to show/hide event details so I can see more/less information of a specific event if i need it. 
###### Scenarios: 
  1.	An event element is collapsed by default.
      Given the user searched for a list of events
      When the user gets the list of events
      Then the events should be collapsed by default 	 
  2.	User can expand an event to see its details.
      Given the user chose an event
      When the user clicks on “see events details” button
      Then they should get a details box showing the details of the specific event
  3.	User can collapse an event to hide its details.
      Given the user already got the details he wanted
      When the user clicks on collapse event details 
      Then the event should collapse and hide the details 

3. Specify number of events.
###### User Story: 
  * As an user, I would like to specify the number of events I want to see so I can see more/fewer events in the events list.
###### Scenarios: 
  1.	When a user hasn’t specific a number, 32 is the default number.
      Given the user searched for events
      When the user gets the list of events
      Then the list of events should have 32 events by default.
  2.	User can change the number of events they want to see.
      Given the user wanted to see more/less events
      When the user changes the number of events 
      Then the list of events should be as long as the number specify by the user

4. Use the app when offline.
###### User Story: 
  * As an user, I would like to use the app when I am offline so I can see the last events that were loaded.
###### Scenarios: 
  1.	Show cached data when there is not internet connection.
      Given the user has no Internet
      When the user opens the app
      Then the user should see the last list of events loaded
  2.	Show error when user changes the settings.
      Given the user has no Internet
      When the user changes the settings (city, time range)
      Then they should get an error because they don’t have internet.

5. Add an app shortcut to the home screen.
----

6. View a chart showing the number of upcoming events by city.
###### User Story: 
  * As an user, I would like to see a chart showing the number of upcoming events by city so that I know what events are happening in specific cities.
###### Scenarios: 
  1.	Show a chart with the number of upcoming events in each city.
      Given the user wanted to see a summary of upcoming events
      When the user opens the summary sections in the app
      Then he can see the chart with the upcoming events by city 
