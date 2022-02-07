import { apiHelper } from "./../utils/apiHelpers";

export default {
  signIn({ email, password }) {
    return apiHelper.post('/signin', {
      email,
      password
    })
  }
}