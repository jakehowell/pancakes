import { WeaveCodeTestPage } from './app.po';

describe('weave-code-test App', () => {
  let page: WeaveCodeTestPage;

  beforeEach(() => {
    page = new WeaveCodeTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
