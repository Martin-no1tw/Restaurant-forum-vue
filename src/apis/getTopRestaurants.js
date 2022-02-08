import { apiHelper } from "../utils/apiHelpers";

const getToken = () => localStorage.getItem('token')

export default {
  getTopRestaurants() {
    return apiHelper.get(`/restaurants/top`, { headers: { Authorization: `Bearer ${getToken()}` } })
  },
  addFavorite({ restaurantId }) {
    return apiHelper.post(`/favorite/${restaurantId}`, null, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  deleteFavorite({ restaurantId }) {
    return apiHelper.delete(`/favorite/${restaurantId}`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  }

}