import { browser, element, by } from "protractor";
import { LoginHelper } from "../app.e2e-helper";

describe('Product Edit', () => {
    beforeEach(() => {
        LoginHelper.login();
        let productEditBtn = element.all(by.buttonText('Edit')).first();
        productEditBtn.click();
    });
    it('should update url', () => {
        expect(browser.getCurrentUrl()).toMatch('/edit');
    });
    afterAll(() => {
        LoginHelper.logout();
    });
});