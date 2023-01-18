import {expect, element, device, by} from 'detox';
describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should show intro screen', async () => {
    await expect(element(by.text('Detox Issue Repro'))).toBeVisible();
  });
});
