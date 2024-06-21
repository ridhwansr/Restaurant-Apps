/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurants');

Scenario('Liking and unLiking one Restaurant', async ({ I }) => {
    I.amOnPage('/');

    I.seeElement('.post-item__title a');
    const firstRestaurant = locate('.post-item__title a').first();
    const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
    console.log(firstRestaurantTitle);

    I.click(firstRestaurant);

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');
    I.seeElement('.post-item__title a');
    const FavoriteRestaurantTitle = await I.grabTextFrom('.post-item__title a');

    assert.strictEqual(firstRestaurantTitle, FavoriteRestaurantTitle);

    I.seeElement('.post-item');
    const favouredRestaurant = locate('.post-item__title a').first();
    I.click(favouredRestaurant);

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');
    I.dontSee(firstRestaurantTitle);
});
