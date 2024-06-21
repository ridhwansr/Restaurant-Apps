import { createLikeMovieButtonTemplate, createUnlikeMovieButtonTemplate } from '../views/templates/template-creator';

const LikeButtonPresenter = {
  async init({ likeButtonContainer, favoriteRestaurants, restaurants }) {
    this._likeButtonContainer = likeButtonContainer;
    this._restaurants = restaurants;
    this._favoriteRestaurants = favoriteRestaurants;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurants;

    if (await this._isRestaurantExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isRestaurantExist(id) {
    const restaurants = await this._favoriteRestaurants.getRestaurant(id);
    return !!restaurants;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeMovieButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await this._favoriteRestaurants.putRestaurant(this._restaurants);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createUnlikeMovieButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await this._favoriteRestaurants.deleteRestaurant(this._restaurants.id);
      this._renderButton();
    });
  },
};

export default LikeButtonPresenter;
