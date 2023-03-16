describe("Search Item Suite", () => {
  it("Search Item Test", async () => {
    await browser.url("/");
    await $("#twotabsearchtextbox").setValue("desktop keyboard");
    await $("#nav-search-submit-button").click();

    browser.$(selector)
  });
});
