describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have welcome screen', async () => {
    await expect(element(by.id('welcome'))).toBeVisible();
  });

  it('starts getting time messages once you press the button', async () => {
    await expect(element(by.id('time'))).toBeNotVisible();
    const button = element(by.id('getTime'));
    await button.tap();
    await expect(element(by.id('time'))).toBeVisible();
  });
});
