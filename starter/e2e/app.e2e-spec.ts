import { AppPage } from './app.po';

describe('primer App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should expect true to be true', () => {
    expect(true).toBe(true);
  });
});
