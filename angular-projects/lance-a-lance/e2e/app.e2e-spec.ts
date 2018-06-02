import { LanceALancePage } from './app.po';

describe('lance-a-lance App', function() {
  let page: LanceALancePage;

  beforeEach(() => {
    page = new LanceALancePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
