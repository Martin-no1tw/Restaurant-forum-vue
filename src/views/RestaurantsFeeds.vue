// ./src/views/RestaurantsFeeds.vue
<template>
  <div class="container py-5">
    <NavTabs />
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

const dummyData = {
  restaurants: [
    {
      id: 1,
      name: "Mr. Santa Willms",
      tel: "772-157-0829 x24274",
      address: "62481 Rippin Summit",
      opening_hours: "08:00",
      description:
        "Numquam eaque vero. Alias quam dolorum et voluptatem officiis. Voluptatibus architecto voluptatem doloribus.",
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
    },
    {
      id: 4,
      name: "Fausto Boyer",
      tel: "(594) 223-9831 x0344",
      address: "3025 Rogers Valleys",
      opening_hours: "08:00",
      description:
        "Veritatis veritatis vel inventore nihil. Sit veritatis magnam est tenetur id ut qui. A commodi sequi necessitatibus qui sed magni autem et sapiente. Nihil distinctio perspiciatis consectetur dignissimos saepe. Officia ut iusto sed debitis dolorum aperiam.\n \rAd et deserunt eum voluptas voluptate sed pariatur. Et molestiae incidunt id et. Et quae qui non placeat quo nostrum repellendus excepturi. At quisquam aut incidunt nulla. Dolor saepe dolorum porro similique a aut facere.\n \rBeatae et quis accusantium. Magnam debitis numquam amet facilis. Deserunt at consequatur. Cumque nobis ex eos ex occaecati. Consequatur magnam unde laudantium delectus quas est. Autem vitae reiciendis voluptas fuga eligendi adipisci quis ut delectus.",
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
    },
    {
      id: 5,
      name: "Emmy Braun II",
      tel: "779.804.8383 x025",
      address: "84682 Elvie Stream",
      opening_hours: "08:00",
      description:
        "Earum reprehenderit consequatur. Consectetur delectus consequatur repellendus dolor aspernatur eveniet molestias voluptatum eum. Nemo et omnis aut quis.\n \rEarum exercitationem totam fugit. Voluptatem labore in voluptatem non quod et rerum laboriosam ut. Quis veritatis dolores aut voluptatum ipsam qui est. Expedita nisi commodi provident sunt mollitia et et id. Quis nulla mollitia magni aut necessitatibus omnis possimus.\n \rQuas saepe velit non ullam est. Veritatis ullam eveniet accusantium et nihil. Est et nulla. Illum quam voluptatibus et voluptatem autem inventore vel quos ut.",
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
    },
    {
      id: 6,
      name: "Ayana Strosin",
      tel: "289.117.6801 x8142",
      address: "79146 Tierra Land",
      opening_hours: "08:00",
      description:
        "Eum consequatur architecto ut libero sunt dolor mollitia voluptas magni. Aut voluptatem non sunt in delectus tempore saepe pariatur. Doloremque ut molestiae aliquam maiores repellendus fugiat impedit rerum debitis. Expedita dolorum velit odit iusto ut qui ratione necessitatibus id.\n \rReprehenderit dolorem necessitatibus reiciendis qui et qui laudantium. Natus pariatur ut et iste eligendi id sint est. Repellat quos at et qui blanditiis et voluptatem ab magni. Sed minus consequatur sed. Dolore doloremque nulla et velit vel et eligendi.\n \rAdipisci sunt corrupti debitis aut consequatur. Sed aut molestiae iusto eos ut eius. Facere dolor qui dolores rerum iusto. Dolor dolorem magnam exercitationem.",
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
    },
    {
      id: 8,
      name: "Consuelo Skiles",
      tel: "361-145-2978 x873",
      address: "575 Larson Island",
      opening_hours: "08:00",
      description:
        "Inventore cumque quaerat eos quia repellat. Aliquid soluta pariatur. Qui consequuntur doloribus eum eos id libero. Voluptate repellendus quae quo. Nihil consequuntur tempora minima deleniti quia minima optio placeat.\n \rQuia perspiciatis alias dolorem ea error quis. Ipsam sunt non. Est dolorem hic.\n \rMaxime aut non autem enim maiores pariatur. Et blanditiis voluptas sit itaque. Voluptatem quidem autem voluptatem natus enim sint.",
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
    },
    {
      id: 9,
      name: "Alvera Mraz",
      tel: "1-069-130-5844",
      address: "6618 Walsh Rue",
      opening_hours: "08:00",
      description:
        "Officia ea fugit ut. Eius et eaque vel. Sequi voluptas voluptatem eaque saepe.\n \rOccaecati officiis sit ratione quam nam placeat consequatur labore. Veniam doloribus saepe praesentium iusto expedita. Rem blanditiis aut sed.\n \rQuaerat recusandae aut eius maiores ut. Doloribus necessitatibus dolores magni ipsam laudantium mollitia quo soluta. Vero ipsum ut hic quibusdam. Maiores minima vel incidunt eius aut officiis earum. Quia sunt atque doloribus blanditiis placeat.",
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
    },
    {
      id: 10,
      name: "Thea Harvey Sr.",
      tel: "1-611-415-7226 x5702",
      address: "66892 Corine Glen",
      opening_hours: "08:00",
      description:
        "Itaque eligendi sed aliquam quam ut illo. Dolorum porro perferendis placeat aut quasi et qui. Hic quis id facilis assumenda ea dignissimos. Consectetur ea ut animi aliquam facere est aut reiciendis.\n \rLaudantium blanditiis repellat maiores veniam fugiat facere consequatur dolorem. Recusandae enim et quos blanditiis ducimus id placeat expedita. Quae quis saepe cupiditate veniam eum praesentium.\n \rNesciunt dolores tempora. Quia et nesciunt cumque ut ut velit. Ullam explicabo fugiat non harum. Nemo et placeat distinctio aut alias libero fuga maxime et. Culpa pariatur id aliquid.",
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
    },
  ],
  comments: [
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
      Restaurant: {
        id: 1,
        name: "Mr. Santa Willms",
        tel: "772-157-0829 x24274",
        address: "62481 Rippin Summit",
        opening_hours: "08:00",
        description:
          "Numquam eaque vero. Alias quam dolorum et voluptatem officiis. Voluptatibus architecto voluptatem doloribus.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=33.197567533362694",
        viewCounts: 0,
        createdAt: "2022-01-30T18:12:28.000Z",
        updatedAt: "2022-01-30T18:12:28.000Z",
        CategoryId: 2,
      },
    },
    {
      id: 2,
      text: "Odio quia et id.",
      UserId: 1,
      RestaurantId: 2,
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
      Restaurant: {
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
      },
    },
    {
      id: 3,
      text: "Harum quia soluta vitae voluptate aut ullam quia.",
      UserId: 3,
      RestaurantId: 3,
      createdAt: "2022-01-30T18:12:28.000Z",
      updatedAt: "2022-01-30T18:12:28.000Z",
      User: {
        id: 3,
        name: "user2",
        email: "user2@example.com",
        password:
          "$2a$10$dqPorTXJkTFIr4Zx5aGLkO8ax0mNWEOIfK48x94ZJmxaSeIpNyDAG",
        isAdmin: false,
        image: null,
        createdAt: "2022-01-30T18:12:28.000Z",
        updatedAt: "2022-01-30T18:12:28.000Z",
      },
      Restaurant: {
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
      },
    },
    {
      id: 4,
      text: "Adipisci non ipsam odit.",
      UserId: 1,
      RestaurantId: 4,
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
      Restaurant: {
        id: 4,
        name: "Fausto Boyer",
        tel: "(594) 223-9831 x0344",
        address: "3025 Rogers Valleys",
        opening_hours: "08:00",
        description:
          "Veritatis veritatis vel inventore nihil. Sit veritatis magnam est tenetur id ut qui. A commodi sequi necessitatibus qui sed magni autem et sapiente. Nihil distinctio perspiciatis consectetur dignissimos saepe. Officia ut iusto sed debitis dolorum aperiam.\n \rAd et deserunt eum voluptas voluptate sed pariatur. Et molestiae incidunt id et. Et quae qui non placeat quo nostrum repellendus excepturi. At quisquam aut incidunt nulla. Dolor saepe dolorum porro similique a aut facere.\n \rBeatae et quis accusantium. Magnam debitis numquam amet facilis. Deserunt at consequatur. Cumque nobis ex eos ex occaecati. Consequatur magnam unde laudantium delectus quas est. Autem vitae reiciendis voluptas fuga eligendi adipisci quis ut delectus.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=66.32521242108278",
        viewCounts: 0,
        createdAt: "2022-01-30T18:12:28.000Z",
        updatedAt: "2022-01-30T18:12:28.000Z",
        CategoryId: 2,
      },
    },
    {
      id: 5,
      text: "Et dignissimos quam repudiandae veniam itaque eaque recusandae.",
      UserId: 2,
      RestaurantId: 5,
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
      Restaurant: {
        id: 5,
        name: "Emmy Braun II",
        tel: "779.804.8383 x025",
        address: "84682 Elvie Stream",
        opening_hours: "08:00",
        description:
          "Earum reprehenderit consequatur. Consectetur delectus consequatur repellendus dolor aspernatur eveniet molestias voluptatum eum. Nemo et omnis aut quis.\n \rEarum exercitationem totam fugit. Voluptatem labore in voluptatem non quod et rerum laboriosam ut. Quis veritatis dolores aut voluptatum ipsam qui est. Expedita nisi commodi provident sunt mollitia et et id. Quis nulla mollitia magni aut necessitatibus omnis possimus.\n \rQuas saepe velit non ullam est. Veritatis ullam eveniet accusantium et nihil. Est et nulla. Illum quam voluptatibus et voluptatem autem inventore vel quos ut.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=66.3187782112065",
        viewCounts: 0,
        createdAt: "2022-01-30T18:12:28.000Z",
        updatedAt: "2022-01-30T18:12:28.000Z",
        CategoryId: 5,
      },
    },
    {
      id: 6,
      text: "Qui natus quia.",
      UserId: 1,
      RestaurantId: 6,
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
      Restaurant: {
        id: 6,
        name: "Ayana Strosin",
        tel: "289.117.6801 x8142",
        address: "79146 Tierra Land",
        opening_hours: "08:00",
        description:
          "Eum consequatur architecto ut libero sunt dolor mollitia voluptas magni. Aut voluptatem non sunt in delectus tempore saepe pariatur. Doloremque ut molestiae aliquam maiores repellendus fugiat impedit rerum debitis. Expedita dolorum velit odit iusto ut qui ratione necessitatibus id.\n \rReprehenderit dolorem necessitatibus reiciendis qui et qui laudantium. Natus pariatur ut et iste eligendi id sint est. Repellat quos at et qui blanditiis et voluptatem ab magni. Sed minus consequatur sed. Dolore doloremque nulla et velit vel et eligendi.\n \rAdipisci sunt corrupti debitis aut consequatur. Sed aut molestiae iusto eos ut eius. Facere dolor qui dolores rerum iusto. Dolor dolorem magnam exercitationem.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=54.18998949812266",
        viewCounts: 0,
        createdAt: "2022-01-30T18:12:28.000Z",
        updatedAt: "2022-01-30T18:12:28.000Z",
        CategoryId: 2,
      },
    },
    {
      id: 7,
      text: "Non magni et minus qui quo voluptatibus fugit ea nam.",
      UserId: 2,
      RestaurantId: 7,
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
      Restaurant: {
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
      },
    },
    {
      id: 8,
      text: "Consequatur aspernatur velit ad.",
      UserId: 1,
      RestaurantId: 8,
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
      Restaurant: {
        id: 8,
        name: "Consuelo Skiles",
        tel: "361-145-2978 x873",
        address: "575 Larson Island",
        opening_hours: "08:00",
        description:
          "Inventore cumque quaerat eos quia repellat. Aliquid soluta pariatur. Qui consequuntur doloribus eum eos id libero. Voluptate repellendus quae quo. Nihil consequuntur tempora minima deleniti quia minima optio placeat.\n \rQuia perspiciatis alias dolorem ea error quis. Ipsam sunt non. Est dolorem hic.\n \rMaxime aut non autem enim maiores pariatur. Et blanditiis voluptas sit itaque. Voluptatem quidem autem voluptatem natus enim sint.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=0.5815137332684239",
        viewCounts: 0,
        createdAt: "2022-01-30T18:12:28.000Z",
        updatedAt: "2022-01-30T18:12:28.000Z",
        CategoryId: 4,
      },
    },
    {
      id: 9,
      text: "Molestiae debitis architecto blanditiis odit sequi cupiditate.",
      UserId: 1,
      RestaurantId: 9,
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
      Restaurant: {
        id: 9,
        name: "Alvera Mraz",
        tel: "1-069-130-5844",
        address: "6618 Walsh Rue",
        opening_hours: "08:00",
        description:
          "Officia ea fugit ut. Eius et eaque vel. Sequi voluptas voluptatem eaque saepe.\n \rOccaecati officiis sit ratione quam nam placeat consequatur labore. Veniam doloribus saepe praesentium iusto expedita. Rem blanditiis aut sed.\n \rQuaerat recusandae aut eius maiores ut. Doloribus necessitatibus dolores magni ipsam laudantium mollitia quo soluta. Vero ipsum ut hic quibusdam. Maiores minima vel incidunt eius aut officiis earum. Quia sunt atque doloribus blanditiis placeat.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=59.69054853441165",
        viewCounts: 0,
        createdAt: "2022-01-30T18:12:28.000Z",
        updatedAt: "2022-01-30T18:12:28.000Z",
        CategoryId: 4,
      },
    },
    {
      id: 10,
      text: "Possimus itaque beatae.",
      UserId: 2,
      RestaurantId: 10,
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
      Restaurant: {
        id: 10,
        name: "Thea Harvey Sr.",
        tel: "1-611-415-7226 x5702",
        address: "66892 Corine Glen",
        opening_hours: "08:00",
        description:
          "Itaque eligendi sed aliquam quam ut illo. Dolorum porro perferendis placeat aut quasi et qui. Hic quis id facilis assumenda ea dignissimos. Consectetur ea ut animi aliquam facere est aut reiciendis.\n \rLaudantium blanditiis repellat maiores veniam fugiat facere consequatur dolorem. Recusandae enim et quos blanditiis ducimus id placeat expedita. Quae quis saepe cupiditate veniam eum praesentium.\n \rNesciunt dolores tempora. Quia et nesciunt cumque ut ut velit. Ullam explicabo fugiat non harum. Nemo et placeat distinctio aut alias libero fuga maxime et. Culpa pariatur id aliquid.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=89.64967561135072",
        viewCounts: 0,
        createdAt: "2022-01-30T18:12:28.000Z",
        updatedAt: "2022-01-30T18:12:28.000Z",
        CategoryId: 1,
      },
    },
  ],
};

export default {
  name: "restaurantfeeds",
  components: {
    NavTabs,
    NewestRestaurants,
    NewestComments,
  },
  data() {
    return {
      restaurants: [],
      comments: [],
    };
  },
  created() {
    this.fetchFeeds();
  },
  methods: {
    fetchFeeds() {
      const { restaurants, comments } = dummyData;
      this.restaurants = restaurants;
      this.comments = comments.filter((comment) => comment.Restaurant);
    },
  },
};
</script>