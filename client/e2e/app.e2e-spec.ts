import { MainProjectPage } from './app.po';

describe('main-project App', () => {
  let page: MainProjectPage;

  beforeEach(() => {
    page = new MainProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
