import { apiHelper } from "./../utils/apiHelpers";


export default {
  getRestaurant({ restaurantId }) {
    return apiHelper.get(`/restaurants/${restaurantId}`)
  },
  getRestaurants({ page, categoryId }) {
    const searchParams = new URLSearchParams({ page, categoryId })
    return apiHelper.get(`/restaurants?${searchParams.toString()}`)
  },
  getFeeds() {
    return apiHelper.get(`/restaurants/feeds`)

  }
}
