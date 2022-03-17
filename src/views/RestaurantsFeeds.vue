// ./src/views/RestaurantsFeeds.vue
<template>
  <div class="container py-5">
    <NavTabs />
    <spinner v-if="isLoading" />
    <h1 class="mt-5">最新動態</h1>
    <hr />
    <div class="row">
      <div class="col-md-6">
        <h3>最新餐廳</h3>
        <!-- 最新餐廳 NewestRestaurants -->
        <NewestRestaurants :restaurants="restaurants" />
      </div>
      <div class="col-md-6">
        <!-- 最新評論 NewestComments-->
        <h3>最新評論</h3>
        <NewestComments :comments="comments" />
      </div>
    </div>
  </div>
</template>



<script>
import NavTabs from "./../components/NavTabs";
import NewestRestaurants from "./../components/NewestRestaurants";
import NewestComments from "./../components/NewestComments";
import RestaurantFeedsAPI from "./../apis/restaurants";
import Spinner from "./../components/Spinner";
import { Toast } from "./../utils/apiHelpers";

export default {
  name: "restaurantfeeds",
  components: {
    NavTabs,
    NewestRestaurants,
    NewestComments,
    Spinner,
  },
  data() {
    return {
      restaurants: [],
      comments: [],
      isLoading: true,
    };
  },
  created() {
    this.fetchFeeds();
  },
  methods: {
    async fetchFeeds() {
      try {
        const response = await RestaurantFeedsAPI.getFeeds({
          restaurants,
          comments,
        });
        const { restaurants, comments } = response.data;
        console.log(response);
        this.restaurants = restaurants;
        this.comments = comments.filter((comment) => comment.Restaurant);
        this.isLoading = false;
        Toast.fire({
          title: "串接ok",
        });
      } catch (error) {
        this.isLoading = false;
        Toast.fire({
          icon: "error",
          title: "無法取的最新資料",
        });
      }
    },
  },
};
</script>