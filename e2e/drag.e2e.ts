import {element, by, device} from 'detox';
const Page = {
  reorder: async (fromIndex: number, toIndex: number) => {
    const from = element(by.id(`item-${fromIndex}`));
    const to = element(by.id(`item-${toIndex}`));
    await from.longPressAndDrag(2000, 0.5, 0.5, to, 0.5, 0.5, 'fast', 1000);
  },
};

describe('Drag', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should drag and rearrange', async () => {
    await Page.reorder(0, 3);
  });
});
