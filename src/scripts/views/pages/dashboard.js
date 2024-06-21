import TheRestaurantDbSource from '../../data/therestaurantdb-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Dashboard = {
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
                <h1 class="explore__label">Explore Restaurant</h1>
            </div>
        <div id="posts" class="posts">
        </div>
      `;
  },

  async afterRender() {
    const restos = await TheRestaurantDbSource.dashboardRestaurant();
    const restaurantsContent = document.querySelector('#posts');
    restos.forEach((restaurants) => {
      restaurantsContent.innerHTML += createRestaurantItemTemplate(restaurants);
    });
  },
};

export default Dashboard;
