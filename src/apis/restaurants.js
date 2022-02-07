import { apiHelper } from "./../utils/apiHelpers";

const getToken = () => localStorage.getItem('token')

export default {
  getRestaurants({ page, categoryId }) {
    const searchParams = new URLSearchParams({ page, categoryId })
    return apiHelper.get(`/restaurants?${searchParams.toString()}`, { headers: { Authorization: `Bearer ${getToken()}` } })
  }
}
