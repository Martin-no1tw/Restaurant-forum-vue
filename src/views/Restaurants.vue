// ./src/views/Restaurants.vue
<template>
  <div class="container py-5">
    <NavTabs />
    <!-- 餐廳類別標籤 RestaurantsNavPills -->
    <RestaurantsNavPills :categories="categories" />

    <div class="row">
      <!-- 餐廳卡片 RestaurantCard-->
      <RestaurantCard
        v-for="restaurant in restaurants"
        :key="restaurant.id"
        :initial-restaurant="restaurant"
      />
    </div>

    <!-- 分頁標籤 RestaurantPagination -->
    <RestaurantsPagination
      v-if="totalPage.length > 1"
      :current-page="currentPage"
      :total-page="totalPage"
      :category-id="categoryId"
      :previous-page="previousPage"
      :next-page="nextPage"
    />
  </div>
</template>

<script>
import NavTabs from "./../components/NavTabs";
import RestaurantCard from "./../components/RestaurantCard";
import RestaurantsNavPills from "./../components/RestaurantsNavPills";
import RestaurantsPagination from "./../components/RestaurantsPagination";

const dummyData = {
  restaurants: [
    {
      id: 1,
      name: "Mr. Santa Willms",
      tel: "772-157-0829 x24274",
      address: "62481 Rippin Summit",
      opening_hours: "08:00",
      description: "Numquam eaque vero. Alias quam dolorum et voluptat",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=33.197567533362694",
      viewCounts: 0,
      createdAt: "2022-01-30T18:12:28.000Z",
      updatedAt: "2022-01-30T18:12:28.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-01-30T18:12:28.000Z",
        updatedAt: "2022-01-30T18:12:28.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 2,
      name: "Ila McLaughlin",
      tel: "603-183-1124 x41475",
      address: "985 Lakin Highway",
      opening_hours: "08:00",
      description: "esse",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=66.20883626734408",
      viewCounts: 0,
      createdAt: "2022-01-30T18:12:28.000Z",
      updatedAt: "2022-01-30T18:12:28.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-01-30T18:12:28.000Z",
        updatedAt: "2022-01-30T18:12:28.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 3,
      name: "Antonetta Thompson",
      tel: "1-652-869-7384",
      address: "23443 Kirlin Isle",
      opening_hours: "08:00",
      description: "temporibus doloribus iste",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=34.83002599039911",
      viewCounts: 0,
      createdAt: "2022-01-30T18:12:28.000Z",
      updatedAt: "2022-01-30T18:12:28.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-01-30T18:12:28.000Z",
        updatedAt: "2022-01-30T18:12:28.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 4,
      name: "Fausto Boyer",
      tel: "(594) 223-9831 x0344",
      address: "3025 Rogers Valleys",
      opening_hours: "08:00",
      description: "Veritatis veritatis vel inventore nihil. Sit verit",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=66.32521242108278",
      viewCounts: 0,
      createdAt: "2022-01-30T18:12:28.000Z",
      updatedAt: "2022-01-30T18:12:28.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-01-30T18:12:28.000Z",
        updatedAt: "2022-01-30T18:12:28.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 5,
      name: "Emmy Braun II",
      tel: "779.804.8383 x025",
      address: "84682 Elvie Stream",
      opening_hours: "08:00",
      description: "Earum reprehenderit consequatur. Consectetur delec",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=66.3187782112065",
      viewCounts: 0,
      createdAt: "2022-01-30T18:12:28.000Z",
      updatedAt: "2022-01-30T18:12:28.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-01-30T18:12:28.000Z",
        updatedAt: "2022-01-30T18:12:28.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 6,
      name: "Ayana Strosin",
      tel: "289.117.6801 x8142",
      address: "79146 Tierra Land",
      opening_hours: "08:00",
      description: "Eum consequatur architecto ut libero sunt dolor mo",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=54.18998949812266",
      viewCounts: 0,
      createdAt: "2022-01-30T18:12:28.000Z",
      updatedAt: "2022-01-30T18:12:28.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-01-30T18:12:28.000Z",
        updatedAt: "2022-01-30T18:12:28.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 7,
      name: "Benny Cruickshank",
      tel: "174.717.3229",
      address: "431 Ronaldo Coves",
      opening_hours: "08:00",
      description: "eos",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=46.129426001330074",
      viewCounts: 0,
      createdAt: "2022-01-30T18:12:28.000Z",
      updatedAt: "2022-01-30T18:12:28.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-01-30T18:12:28.000Z",
        updatedAt: "2022-01-30T18:12:28.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 8,
      name: "Consuelo Skiles",
      tel: "361-145-2978 x873",
      address: "575 Larson Island",
      opening_hours: "08:00",
      description: "Inventore cumque quaerat eos quia repellat. Aliqui",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=0.5815137332684239",
      viewCounts: 0,
      createdAt: "2022-01-30T18:12:28.000Z",
      updatedAt: "2022-01-30T18:12:28.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-01-30T18:12:28.000Z",
        updatedAt: "2022-01-30T18:12:28.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 9,
      name: "Alvera Mraz",
      tel: "1-069-130-5844",
      address: "6618 Walsh Rue",
      opening_hours: "08:00",
      description: "Officia ea fugit ut. Eius et eaque vel. Sequi volu",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=59.69054853441165",
      viewCounts: 0,
      createdAt: "2022-01-30T18:12:28.000Z",
      updatedAt: "2022-01-30T18:12:28.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-01-30T18:12:28.000Z",
        updatedAt: "2022-01-30T18:12:28.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 10,
      name: "Thea Harvey Sr.",
      tel: "1-611-415-7226 x5702",
      address: "66892 Corine Glen",
      opening_hours: "08:00",
      description: "Itaque eligendi sed aliquam quam ut illo. Dolorum ",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=89.64967561135072",
      viewCounts: 0,
      createdAt: "2022-01-30T18:12:28.000Z",
      updatedAt: "2022-01-30T18:12:28.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-01-30T18:12:28.000Z",
        updatedAt: "2022-01-30T18:12:28.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
  ],
  categories: [
    {
      id: 1,
      name: "中式料理",
      createdAt: "2022-01-30T18:12:28.000Z",
      updatedAt: "2022-01-30T18:12:28.000Z",
    },
    {
      id: 2,
      name: "日本料理",
      createdAt: "2022-01-30T18:12:28.000Z",
      updatedAt: "2022-01-30T18:12:28.000Z",
    },
    {
      id: 3,
      name: "義大利料理",
      createdAt: "2022-01-30T18:12:28.000Z",
      updatedAt: "2022-01-30T18:12:28.000Z",
    },
    {
      id: 4,
      name: "墨西哥料理",
      createdAt: "2022-01-30T18:12:28.000Z",
      updatedAt: "2022-01-30T18:12:28.000Z",
    },
    {
      id: 5,
      name: "素食料理",
      createdAt: "2022-01-30T18:12:28.000Z",
      updatedAt: "2022-01-30T18:12:28.000Z",
    },
    {
      id: 6,
      name: "美式料理",
      createdAt: "2022-01-30T18:12:28.000Z",
      updatedAt: "2022-01-30T18:12:28.000Z",
    },
    {
      id: 7,
      name: "複合式料理",
      createdAt: "2022-01-30T18:12:28.000Z",
      updatedAt: "2022-01-30T18:12:28.000Z",
    },
  ],
  categoryId: "",
  page: 1,
  totalPage: [1, 2, 3, 4, 5],
  prev: 1,
  next: 2,
};

export default {
  name: "restaurantCard",
  components: {
    NavTabs,
    RestaurantCard,
    RestaurantsNavPills,
    RestaurantsPagination,
  },
  data() {
    return {
      restaurants: [],
      categories: [],
      categoryId: -1,
      currentPage: 1,
      totalPage: [],
      previousPage: -1,
      nextPage: -1,
    };
  },
  created() {
    this.fetchRestaurants();
  },
  methods: {
    fetchRestaurants() {
      const {
        restaurants,
        categories,
        categoryId,
        page,
        totalPage,
        prev,
        next,
      } = dummyData;
      this.restaurants = restaurants;
      this.categories = categories;
      this.categoryId = categoryId;
      this.currentPage = page;
      this.totalPage = totalPage;
      this.previousPage = prev;
      this.nextPage = next;
    },
  },
};
</script>