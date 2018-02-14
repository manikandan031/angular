import { AppPage } from './app.po';
import { browser, element, By, by } from 'protractor';

describe('apm App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display heading', () => {
    page.navigateTo();
    expect(page.getHeadingText()).toEqual('Acme Product Management');
  });

  it('should navigate to login page on clicking product list without logging in', () => {
    page.navigateTo();
    //Click on DOM element with href=/products
    //element(by.css('[href="/products"]')).click(); - Better option below
    element(by.linkText('Product List')).click();
    //Wait for Angular to load the page
    browser.waitForAngular();
    //Expect url to update 
    expect(browser.getCurrentUrl()).toContain('login');
    //Get DOM element with ngModel
  });
});
