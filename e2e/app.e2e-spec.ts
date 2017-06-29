import { GFTFEAngularClientPage } from './app.po';

describe('gft-fe-angular-client App', () => {
  let page: GFTFEAngularClientPage;

  beforeEach(() => {
    page = new GFTFEAngularClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
