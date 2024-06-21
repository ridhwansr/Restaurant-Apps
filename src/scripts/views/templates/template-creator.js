import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
<div class="restaurant-image">
  <img src="${CONFIG.BASE_IMAGE_URL_MEDIUM + restaurant.pictureId}" alt="Restaurant ${restaurant.name}" loading="lazy">
</div>
<div class="restaurant-info">
  <h1>${restaurant.name}</h1>
  <p><strong>Alamat:</strong> ${restaurant.address}</p>
  <p><strong>Kota:</strong> ${restaurant.city}</p>
  <p><strong>Deskripsi:</strong> ${restaurant.description}.</p>

  <div class="menu-restaurant">
    <div class="menu-section">
      <h2>Menu Makanan</h2>
      <ul>
        ${restaurant.menus.foods.reduce((show, value) => show.concat(`<li>${value.name}</li>`), '')}
      </ul>
    </div>

    <div class="menu-section">
      <h2>Menu Minuman</h2>
      <ul>
        ${restaurant.menus.foods.reduce((show, value) => show.concat(`<li>${value.name}</li>`), '')}
      </ul>
    </div>
  </div>
</div>
<div class="customer-section">
  <h2>Customer Reviews</h2>
  ${restaurant.customerReviews.reduce((show, value) => show.concat(`<br>
  <p>Nama : ${value.name}</p>
  <p>Ulasan : ${value.review}</p>
  <p>Tanggal :${value.date}</p>`), '')}
</div>
`;

const createRestaurantItemTemplate = (restaurants) => `
    <article class="post-item">
        <img class="post-item__thumbnail" src="${CONFIG.BASE_IMAGE_URL_MEDIUM + restaurants.pictureId}"
            alt="${restaurants.name}" loading="lazy"/>
        <div class="post-item__content">
            <p class="post-item__rating">
              Rating Restaurant 
            <span class="post-item__rating__author">⭐ ${restaurants.rating}</span>
            </p>
            <h1 class="post-item__title">
                <a href="/#/detail/${restaurants.id}">${restaurants.name}</a>
            </h1>
            <p class="post-item__description">${restaurants.description}</p>
        </div>
    </article>
`;

const createLikeMovieButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeMovieButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeMovieButtonTemplate,
  createUnlikeMovieButtonTemplate,
};
