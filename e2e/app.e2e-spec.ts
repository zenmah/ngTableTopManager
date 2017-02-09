import { NgTtGamesPage } from './app.po';

describe('ng-tt-games App', function() {
  let page: NgTtGamesPage;

  beforeEach(() => {
    page = new NgTtGamesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
