// ./src/views/Restaurant.vue
<template>
  <div class="container py-5">
    <!-- 餐廳資訊頁 RestaurantDetail -->
    <RestaurantDetail :initial-restaurant="restaurant" />

    <!-- 餐廳評論 RestaurantComments -->
    <RestaurantComments
      :restaurant-comments="restaurantComments"
      @after-delete-comment="afterDeleteComment"
    />
    <!-- 新增評論 CreateComment -->
    <CreateComment
      :restaurant-id="restaurant.id"
      @after-create-comment="afterCreateComment"
    />
  </div>
</template>

<script>
import RestaurantDetail from "./../components/RestaurantDetail";
import RestaurantComments from "./../components/RestaurantComments";
import CreateComment from "./../components/CreateComment";

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
    updatedAt: "2022-02-05T07:09:07.853Z",
    CategoryId: 2,
    Category: {
      id: 2,
      name: "日本料理",
      createdAt: "2022-01-30T18:12:28.000Z",
      updatedAt: "2022-01-30T18:12:28.000Z",
    },
    FavoritedUsers: [],
    LikedUsers: [],
    Comments: [
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
    ],
  },
  isFavorited: false,
  isLiked: false,
};
const dummyUser = {
  currentUser: {
    id: 1,
    name: "管理者",
    email: "root@example.com",
    image: "https://i.pravatar.cc/300",
    isAdmin: true,
  },
  isAuthenticated: true,
};

export default {
  name: "restaurant",
  components: {
    RestaurantDetail,
    RestaurantComments,
    CreateComment,
  },
  data() {
    return {
      restaurant: {
        id: -1,
        name: "",
        categoryName: "",
        image: "",
        openingHours: "",
        tel: "",
        address: "",
        description: "",
        isFavorited: false,
        isLiked: false,
      },
      currentUser: dummyUser.currentUser,
      restaurantComments: [],
    };
  },
  created() {
    const { id: restaurantId } = this.$route.params;
    this.fetchRestaurant(restaurantId);
  },
  methods: {
    fetchRestaurant(restaurantId) {
      console.log("fetchRestaurant id: ", restaurantId);
      const { restaurant, isFavorited, isLiked } = dummyData;
      const {
        id,
        name,
        Category,
        image,
        opening_hours: openingHours,
        tel,
        address,
        description,
      } = restaurant;
      this.restaurant = {
        id,
        name,
        categoryName: Category ? Category.name : "未分類",
        image,
        openingHours,
        tel,
        address,
        description,
        isFavorited,
        isLiked,
      };
      this.restaurantComments = dummyData.restaurant.Comments;
    },
    afterDeleteComment(commentId) {
      // 以 filter 保留未被選擇的 comment.id
      this.restaurantComments = this.restaurantComments.filter(
        (comment) => comment.id !== commentId
      );
    },
    afterCreateComment(payload) {
      const { commentId, restaurantId, text } = payload;
      this.restaurantComments.push({
        id: commentId,
        RestaurantId: restaurantId,
        User: {
          id: this.currentUser.id,
          name: this.currentUser.name,
        },
        text,
        createdAt: new Date(),
      });
    },
  },
};
</script>