const { Before } = require('codeceptjs');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});