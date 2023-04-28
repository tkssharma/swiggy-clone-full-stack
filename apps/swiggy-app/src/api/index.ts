import axios from "axios";

export class ExternalApis {
  static sleep() {
    return new Promise((a, b) => {
      setTimeout(() => {
        a(null);
      }, 2000);
    });
  }

  static async fetchRestaurantsDishes(id: string) {
    await this.sleep();
    const response = await axios.get(`/api/v1/restaurants/${id}`);
    return response.data;
  }

  static async fetchRestaurants() {
    const response = await axios.get(`/api/v1/restaurants/search?page=1&limit=10`);
    return response.data;
  }

  static async filterRestaurants(search_term: string) {
    const response = await axios.get(
      `/api/v1/restaurants/search?search_text=${search_term}&page=1&limit=10`
    );
    return response.data;
  }

  static async fetchDishes() {
    const response = await axios.get(
      `/api/v1/dishes?filter_type=price&order_by=ASC&page=1&limit=10`
    );
    return response.data;
  }
}
