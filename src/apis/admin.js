// ./src/apis/admin.js
import { apiHelper } from "../utils/apiHelpers";

export default {
  categories: {
    get() {
      return apiHelper.get('/admin/categories')
    }
  },
  restaurants: {
    getDetail({ restaurantId }) {
      return apiHelper.get(`/admin/restaurants/${restaurantId}`)
    },
    create({ formData }) {
      return apiHelper.post('/admin/restaurants', formData)
    },
    update({ restaurantId, formData }) {
      return apiHelper.put(`/admin/restaurants/${restaurantId}`, formData)
    },
  },
  users: {
    get() {
      return apiHelper.get('/admin/users')
    },
    update({ userId, isAdmin }) {
      return apiHelper.put(`/admin/users/${userId}`, { isAdmin })
    }
  }
}