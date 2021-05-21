import puppeteer from "puppeteer";

describe('show/hide an event details', () => {
  let browser;
  let page;
  jest.setTimeout(30000);
  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('.event');
  });

  afterAll(() => {
    browser.close();
  });

  test('An event element is collapsed by default', async () => {
    const eventDetails = await page.$('.event__details .display-none');
    expect(eventDetails).toBeNull();
  });

  test('User can expand an event to see its details', async () => {
    await page.click('.event .event__button');
    const eventDetails = await page.$('.event__details .display-none');
    expect(eventDetails).toBeDefined();
  });

  test('User can collapse an event to hide its details', async () => {
    await page.click('.event .event__button');
    const eventDetails = await page.$('.event__details .display-none');
    expect(eventDetails).toBeNull();
  });
});

describe('Filter events by city', () => {
  let browser;
  let page;
  jest.setTimeout(30000);
  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('.city');
  });

  afterAll(() => {
    browser.close();
  });
  
  test('the user should see the list of upcoming events.', async () => {
    const event = await page.$('.event')
    expect(event).toBeDefined()
  });

  test('should show a list of suggestion when the user types', async () => {
    await page.focus('.city')
    await page.keyboard.type('Berlin')
    let suggestions = await page.$$('.suggestions li')
    expect(suggestions).toHaveLength(2)
  });

  test('the city should be changed and the list of events updated', async () => {
    let  selectedSuggestion = await page.$('.suggestions li')
    selectedSuggestion = await selectedSuggestion.evaluate(el => el.textContent)
    await page.click('.suggestions li')
    const events = await page.$$('.event__location')
    for(const element of events){
      let text 
      text = await element.evaluate(el => el.textContent)
      expect(text).toBe(selectedSuggestion)
    }
  });

});