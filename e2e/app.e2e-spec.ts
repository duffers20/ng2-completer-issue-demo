import { Ng2CompleterIssueDemoPage } from './app.po';

describe('ng2-completer-issue-demo App', () => {
  let page: Ng2CompleterIssueDemoPage;

  beforeEach(() => {
    page = new Ng2CompleterIssueDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
