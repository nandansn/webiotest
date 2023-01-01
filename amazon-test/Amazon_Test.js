describe("Amazon_Test", () => {
  it("tests Amazon_Test", async () => {
    await browser.setWindowSize(1119, 948)
    await browser.url("https://www.amazon.in/")
    await expect(browser).toHaveUrl("https://www.amazon.in/")
    await browser.$("//*[@id=\"nav-hamburger-menu\"]/span").click()
    await browser.$("//*[@id=\"hmenu-content\"]/ul[1]/li[9]/a").click()
    await browser.$("//*[@id=\"hmenu-content\"]/ul[3]/li[6]/a").click()
    await expect(browser).toHaveUrl("https://www.amazon.in/dp/B083VWSQJC?ref_=nav_em_nav-pc-firetvcube_0_2_3_5")
    await browser.$("#add-to-cart-button").click()
    await browser.$("//*[@id=\"abb-intl-product-view-B07PFFMP9P\"]/div[2]/div[2]/h3/a").click()
    await browser.$("//*[@id=\"abb-intl-pop-cta\"]/span[3]/span/input").click()
    await expect(browser).toHaveUrl("https://www.amazon.in/gp/product/handle-buy-box/ref=dp_start-bbf_1_glance")
  });
});
