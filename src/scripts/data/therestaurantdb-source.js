import API_ENDPOINT from '../globals/api-endpoint';

class TheRestaurantDbSource {
  static async dashboardRestaurant() {
    const response = await fetch(API_ENDPOINT.DASHBOARD);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }
}

export default TheRestaurantDbSource;
