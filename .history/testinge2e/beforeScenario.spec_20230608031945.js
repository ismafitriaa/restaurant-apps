// const { Before } = require('codeceptjs');
const assert = require('assert');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});