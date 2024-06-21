import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
        <div class="hero">
            <picture>
                <source media="(max-width: 600px)" srcset="../images/heros/hero-small.jpg" type="image/jpg">
                <img src='../images/heros/hero-large.jpg' alt="hero" loading="lazy">
            </picture>
            <div class="hero__inner">
                <h1 class="hero__title">Recommended Restaurant</h1>
                <p class="hero__tagline">Nikmatnya santapan, sejuta kesan</p>
            </div>
        </div>
        <section id="main-content" class="content">
        <div class="explore">
            <h1 class="explore__label">Your Favorited Restaurant</h1>
        </div>
        <div id="posts" class="posts">
        </div>
    `;
  },

  async afterRender() {
    const retos = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#posts');

    retos.forEach((restaurants) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurants);
    });
  },
};

export default Favorite;
