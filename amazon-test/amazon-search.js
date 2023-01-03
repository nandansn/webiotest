import {expect} from 'chai'

describe('', () => {

    before(async () => {
        await browser.url('/')
    });

    it('', async () => {
        let searchTxtBx = await $('#twotabsearchtextbox')
        let isSrcTxBxDisplayed = await searchTxtBx.isDisplayed()

        expect(isSrcTxBxDisplayed).to.be.true

        searchTxtBx.setValue('macbook')
    })

});