import { TestioPage } from './app.po';

describe('testio App', function() {
  let page: TestioPage;

  beforeEach(() => {
    page = new TestioPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
