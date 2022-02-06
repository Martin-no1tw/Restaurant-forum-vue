<template>
  <div class="container py-5">
    <div>
      <h1>{{ restaurant.name }}</h1>
      <span class="badge badge-secondary mt-1 mb-3">
        {{ restaurant.categoryName }}
      </span>
    </div>

    <hr />

    <ul>
      <li>評論數： {{ restaurant.commentsLength }} }</li>
      <li>瀏覽次數： {{ restaurant.viewCounts }} }</li>
    </ul>

    <button type="button" class="btn btn-link" @click="$router.back()">
      回上一頁
    </button>
  </div>
</template>

<script>
const dummyData = {
  restaurant: {
    id: 1,
    name: "Mr. Santa Willms",
    tel: "772-157-0829 x24274",
    address: "62481 Rippin Summit",
    opening_hours: "08:00",
    description:
      "Numquam eaque vero. Alias quam dolorum et voluptatem officiis. Voluptatibus architecto voluptatem doloribus.",
    image:
      "https://loremflickr.com/320/240/restaurant,food/?random=33.197567533362694",
    viewCounts: 1,
    createdAt: "2022-01-30T18:12:28.000Z",
    updatedAt: "2022-02-05T07:09:07.000Z",
    CategoryId: 2,
    Category: {
      id: 2,
      name: "日本料理",
      createdAt: "2022-01-30T18:12:28.000Z",
      updatedAt: "2022-01-30T18:12:28.000Z",
    },
    Comments: [
      {
        id: 1,
        text: "Eos ut praesentium hic voluptatem et qui.",
        UserId: 2,
        RestaurantId: 1,
        createdAt: "2022-01-30T18:12:28.000Z",
        updatedAt: "2022-01-30T18:12:28.000Z",
        User: {
          id: 2,
          name: "user1",
          email: "user1@example.com",
          password:
            "$2a$10$qtSCyHQddj10rkq0O.xNJOSpUxOOexpQ1LScGpyIa21y.P0mvEZm6",
          isAdmin: false,
          image: null,
          createdAt: "2022-01-30T18:12:28.000Z",
          updatedAt: "2022-01-30T18:12:28.000Z",
        },
      },
      {
        id: 51,
        text: "Minus nostrum dolor quidem.",
        UserId: 2,
        RestaurantId: 1,
        createdAt: "2022-01-30T18:12:28.000Z",
        updatedAt: "2022-01-30T18:12:28.000Z",
        User: {
          id: 2,
          name: "user1",
          email: "user1@example.com",
          password:
            "$2a$10$qtSCyHQddj10rkq0O.xNJOSpUxOOexpQ1LScGpyIa21y.P0mvEZm6",
          isAdmin: false,
          image: null,
          createdAt: "2022-01-30T18:12:28.000Z",
          updatedAt: "2022-01-30T18:12:28.000Z",
        },
      },
      {
        id: 101,
        text: "Culpa est culpa sapiente tempora nostrum et.",
        UserId: 1,
        RestaurantId: 1,
        createdAt: "2022-01-30T18:12:28.000Z",
        updatedAt: "2022-01-30T18:12:28.000Z",
        User: {
          id: 1,
          name: "root",
          email: "root@example.com",
          password:
            "$2a$10$rDvRLt.QeA29/1qCWZXNS.M6MoqFKu25RpRRvV9mClEyJCvKCtiYm",
          isAdmin: true,
          image: null,
          createdAt: "2022-01-30T18:12:28.000Z",
          updatedAt: "2022-01-30T18:12:28.000Z",
        },
      },
    ],
  },
};

export default {
  name: "RestaurantDashboardDetail",
  data() {
    return {
      restaurant: [],
    };
  },
  created() {
    const { id: restaurantId } = this.$route.params;
    this.fetchRestaurantDetail(restaurantId);
  },
  method: {
    fetchRestaurantDetail() {
      const { restaurant } = dummyData;
      this.restaurant = restaurant;
    },
  },
};
</script>