import { browser, element, by } from "protractor";

export class LoginHelper {

    public static login() {
        //Login Start
        browser.get('http://localhost:4200/login');
        element(by.name('userName')).sendKeys('admin');
        element(by.name('password')).sendKeys('admin');
        element(by.css('.btn-primary')).click();
        return browser.driver.wait(function () {
            return browser.driver.getCurrentUrl().then(function (url) {
                console.log(url);
                return /products/.test(url);
            });
        }, 10000);
        //Login End.
    }

    public static logout(){
        element(by.linkText('Logout')).click();
    }
}