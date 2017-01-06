import { ZAdminNg2Page } from './app.po';

describe('z-admin-ng2 App', function() {
  let page: ZAdminNg2Page;

  beforeEach(() => {
    page = new ZAdminNg2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
