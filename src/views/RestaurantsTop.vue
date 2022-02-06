// ./src/views/RestaurantsTop.vue
<template>
  <div class="container py-5">
    <!-- 使用 NavTabs 元件 -->
    <NavTabs />
    <h1 class="mt-5">人氣餐廳</h1>
    <RestaurantTopCard
      v-for="restaurant in restaurants"
      :key="restaurant.id"
      :initial-restaurant="restaurant"
    />
  </div>
</template>

<script>
import NavTabs from "./../components/NavTabs";
import RestaurantTopCard from "./../components/RestaurantTopCard";

const dummyData = {
  restaurants: [
    {
      id: 50,
      name: "Lonie Dietrich",
      tel: "785.259.7153 x35874",
      address: "949 Bode Crest",
      opening_hours: "08:00",
      description: "perferendis odit facere",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=57.297790162952666",
      viewCounts: 0,
      createdAt: "2022-01-30T18:12:28.000Z",
      updatedAt: "2022-01-30T18:12:28.000Z",
      CategoryId: 4,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 49,
      name: "Herminia McClure I",
      tel: "1-947-231-4959",
      address: "709 Hudson Crossroad",
      opening_hours: "08:00",
      description: "Libero est consectetur nihil voluptas quis. Non ea",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=3.573630766594782",
      viewCounts: 0,
      createdAt: "2022-01-30T18:12:28.000Z",
      updatedAt: "2022-01-30T18:12:28.000Z",
      CategoryId: 4,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 48,
      name: "Bernhard Lesch DDS",
      tel: "294-346-4030 x343",
      address: "05782 Graham Greens",
      opening_hours: "08:00",
      description: "Natus pariatur asperiores consequatur quae eum inc",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=36.61941164331688",
      viewCounts: 0,
      createdAt: "2022-01-30T18:12:28.000Z",
      updatedAt: "2022-01-30T18:12:28.000Z",
      CategoryId: 4,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 47,
      name: "Leone Predovic",
      tel: "957.711.3580",
      address: "48245 Aracely Fields",
      opening_hours: "08:00",
      description: "Sunt labore consequatur similique fugit modi.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=49.722810114825734",
      viewCounts: 0,
      createdAt: "2022-01-30T18:12:28.000Z",
      updatedAt: "2022-01-30T18:12:28.000Z",
      CategoryId: 4,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 46,
      name: "Louvenia Strosin Sr.",
      tel: "(388) 904-9079 x6244",
      address: "83083 Schneider Knolls",
      opening_hours: "08:00",
      description: "Odio vero voluptas magni ut. Dolorum est ad illum ",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=29.592724109711654",
      viewCounts: 0,
      createdAt: "2022-01-30T18:12:28.000Z",
      updatedAt: "2022-01-30T18:12:28.000Z",
      CategoryId: 3,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 45,
      name: "Emie Ankunding",
      tel: "112.912.5834 x82633",
      address: "170 Tommie Walk",
      opening_hours: "08:00",
      description: "Nobis quia totam sapiente quasi omnis quos nobis i",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=54.529819696699214",
      viewCounts: 0,
      createdAt: "2022-01-30T18:12:28.000Z",
      updatedAt: "2022-01-30T18:12:28.000Z",
      CategoryId: 2,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 44,
      name: "Arturo Fritsch",
      tel: "(269) 311-6702 x853",
      address: "09093 Austen Junctions",
      opening_hours: "08:00",
      description: "Reprehenderit hic possimus id tempora aut dolor il",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=4.69153111311198",
      viewCounts: 0,
      createdAt: "2022-01-30T18:12:28.000Z",
      updatedAt: "2022-01-30T18:12:28.000Z",
      CategoryId: 2,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 43,
      name: "Daren Stanton",
      tel: "649.586.6325 x440",
      address: "65570 Annabelle Mission",
      opening_hours: "08:00",
      description: "Velit qui veniam facere. Officia perspiciatis ut q",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=55.54113954504349",
      viewCounts: 0,
      createdAt: "2022-01-30T18:12:28.000Z",
      updatedAt: "2022-01-30T18:12:28.000Z",
      CategoryId: 4,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 42,
      name: "Carlotta Padberg",
      tel: "745.437.0525",
      address: "0721 Wuckert Lake",
      opening_hours: "08:00",
      description: "Qui doloremque cumque et possimus accusantium et f",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=0.17718771287840163",
      viewCounts: 0,
      createdAt: "2022-01-30T18:12:28.000Z",
      updatedAt: "2022-01-30T18:12:28.000Z",
      CategoryId: 5,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 41,
      name: "Melisa Macejkovic",
      tel: "1-254-540-9954 x305",
      address: "04343 DuBuque Crossing",
      opening_hours: "08:00",
      description: "Et voluptas incidunt et accusantium molestias aspe",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=47.629377805005866",
      viewCounts: 0,
      createdAt: "2022-01-30T18:12:28.000Z",
      updatedAt: "2022-01-30T18:12:28.000Z",
      CategoryId: 5,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
  ],
};

export default {
  name: "restaurantTopCard",
  components: {
    NavTabs,
    RestaurantTopCard,
  },
  data() {
    return {
      restaurants: [],
    };
  },
  created() {
    this.fetchRestaurantTopCard();
  },
  methods: {
    fetchRestaurantTopCard() {
      const { restaurants } = dummyData;
      this.restaurants = restaurants;
    },
  },
};
</script>