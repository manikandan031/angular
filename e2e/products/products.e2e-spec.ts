import { AppPage } from "../app.po";
import { browser, element, by } from "protractor";
import { LoginHelper } from "../app.e2e-helper";

describe('Product List', () => {

    beforeEach(() => {
        LoginHelper.login();
    });
    it('should update url', () => {
        expect(browser.getCurrentUrl()).toMatch('/products');
    });
    it('should display product list title', () => {
        expect(element(by.css('div.panel-heading'))).not.toBeNull();
        expect(element(by.css('div.panel-heading')).getText()).toMatch('Product List');
    });
    it('should display one or more products', () => {
      
        let productsEl = element.all(by.css('a[href*="/products/"]'));
        productsEl.count().then((count) => {
            console.log('product count' + count);
        });
        expect(productsEl.count()).toBeGreaterThan(0);
    });

    afterAll(() => {
        LoginHelper.logout();
    });
});