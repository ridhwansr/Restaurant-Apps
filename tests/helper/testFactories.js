import LikeButtonPresenter from "../../src/scripts/utils/like-button-presenter";
import FavoriteRestaurantIdb from "../../src/scripts/data/favorite-restaurant-idb";

const createLikeButtonPresenterWithRestaurant = async (restaurants) => {
    await LikeButtonPresenter.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        favoriteRestaurants: FavoriteRestaurantIdb,
        restaurants,
    });
};
export { createLikeButtonPresenterWithRestaurant };