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

  static async fetchDishes(filter?: string) {
    const url = filter
      ? `/api/v1/dishes?${filter}&page=1&limit=10`
      : `/api/v1/dishes?page=1&limit=10`;
    const response = await axios.get(url);
    return response.data;
  }

  static async fetchCart(config: any) {
    const url = `/api/v1/cart`;
    const response = await axios.get(url, config);
    return response.data;
  }
  static async addCartItems(payload: any, config: any) {
    const url = `/api/v1/cart`;
    const response = await axios.post(url, payload, config);
    return response.data;
  }
  static async removeCartItems(payload: any, config: any) {
    const url = `/api/v1/cart`;
    const response = await axios.put(url, payload, config);
    return response.data;
  }
  static async fetchAddress(config: any) {
    const url = `/api/v1/users/addresses`;
    const response = await axios.get(url, config);
    return response.data;
  }

  static async createAddress(payload: any, config: any) {
    const url = `/api/v1/users/addresses`;
    const response = await axios.post(url, payload, config);
    return response.data;
  }

  static async createPayment({ cart }: any, config: any) {
    const response = await axios.post("/api/v1/payments", cart, config);
    return response.data;
  }

  static async updatePayment({ cart }: any, config: any) {
    const response = await axios.put("/api/v1/payments", cart, config);
    return response.data;
  }

  static async updatePaymentStatusSuccess({ cart }: any, config: any) {
    const response = await axios.put("/api/v1/payments", { status: "success", ...cart }, config);
    return response.data;
  }

  static async updatePaymentStatusFailed({ cart }: any, config: any) {
    const response = await axios.put("/api/v1/payments", { status: "failure", ...cart }, config);
    return response.data;
  }

  static async createOrder({ cart }: any, config: any) {
    const response = await axios.post("/api/v1/orders", cart, config);
    return response.data;
  }
}
