Feature: Show/hide event details

Scenario: An event element is collapsed by default
Given the main page is opened 
When the user gets the list of events 
Then the events should be collapsed by default

Scenario: User can expand an event to see its details
Given the user chose an event 
When the user clicks on “see events details” button 
Then they should get a details box showing the details of the specific event

Scenario: User can collapse an event to hide its details.
Given the user already got the details he wanted 
When the user clicks on collapse event details 
Then the event should collapse and hide the details