import { SimPage } from './app.po';

describe('sim App', () => {
  let page: SimPage;

  beforeEach(() => {
    page = new SimPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
