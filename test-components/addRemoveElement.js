import { expect } from 'chai'

describe('add and remove', () => {

    let url = "https://the-internet.herokuapp.com/";

    before(async () => {
        await browser.url(url)
    });


    it('add element', async () => {
        let addDeleteElement = await $(
          '//div[@id="content"]//a[text()="Add/Remove Elements"]'
        );
        await addDeleteElement.click()
        let addButton = $('//button[text()="Add Element"]');
        await addButton.click()


        let deleteButton = $('//div[@id="elements"]//button[text()="Delete"]');
        let isDelBtnDisplayed = await deleteButton.isDisplayed()

        expect(isDelBtnDisplayed).to.be.true;

        browser.getWindowHandles


    });
});