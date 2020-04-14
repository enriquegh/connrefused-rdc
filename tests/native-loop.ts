describe("Sauce Test", () => {
    it("should take page source and screenshot", () => {

        for (let index = 0; index < 50; index++) {
            browser.getPageSource()
            browser.takeScreenshot()

            browser.pause(2000)
        }

    })

})