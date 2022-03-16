import { apiHelper } from "../utils/apiHelpers";

export default {
  getTopRestaurants() {
    return apiHelper.get(`/restaurants/top`)
  },
  addFavorite({ restaurantId }) {
    return apiHelper.post(`/favorite/${restaurantId}`, null)
  },
  deleteFavorite({ restaurantId }) {
    return apiHelper.delete(`/favorite/${restaurantId}`)
  }

}