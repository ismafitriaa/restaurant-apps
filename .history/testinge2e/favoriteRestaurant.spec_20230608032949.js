// const { Scenario } = require('codeceptjs');
const assert = require('assert');

Scenario('favoriting one restaurant', async ({ I }) => {
  I.seeElement('#resto-list');
  I.see('Tidak ada restaurant untuk ditampilkan', '#resto-item__not__found');

  I.amOnPage('/');
  I.wait(5);

  I.waitForElement('.post-item');
  I.seeElement('.post-item a');

  const firstResto = locate('.post-item a').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);
  I.wait(5);

  I.seeElement('.favorite');
  I.click('.favorite');
  I.wait(5);

  I.amOnPage('/#/favorite');
  I.wait(5);
  I.seeElement('.post-item');
  const favoritedRestoTitle = await I.grabTextFrom('#post-item__title');

  assert.strictEqual(firstRestoTitle, favoritedRestoTitle);
});