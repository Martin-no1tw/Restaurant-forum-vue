<template>
  <table class="table">
    <thead class="thead-dark">
      <tr>
        <th scope="col">#</th>
        <th scope="col">Category</th>
        <th scope="col">Name</th>
        <th scope="col" width="300">操作</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="restaurant in restaurants" :key="restaurant.id">
        <th scope="row">
          {{ restaurant.id }}
        </th>
        <td>{{ restaurant.Category ? restaurant.Category.name : "未分類" }}</td>
        <td>{{ restaurant.name }}</td>
        <td class="d-flex justify-content-between">
          <router-link
            :to="{ name: 'admin-restaurant', params: { id: restaurant.id } }"
            class="btn btn-link"
          >
            Show
          </router-link>

          <router-link
            :to="{
              name: 'admin-restaurant-edit',
              params: { id: restaurant.id },
            }"
            class="btn btn-link"
            >Edit</router-link
          >

          <button
            type="button"
            class="btn btn-link"
            @click.stop.prevent="deleteRestaurant(restaurant.id)"
          >
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
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
    {
      id: 11,
      name: "Keegan McGlynn PhD",
      tel: "(873) 108-0902 x8262",
      address: "20981 Randal Throughway",
      opening_hours: "08:00",
      description: "voluptatum fuga nostrum",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=51.33032151103281",
      viewCounts: 0,
      createdAt: "2022-01-30T18:12:28.000Z",
      updatedAt: "2022-01-30T18:12:28.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-01-30T18:12:28.000Z",
        updatedAt: "2022-01-30T18:12:28.000Z",
      },
    },
    {
      id: 12,
      name: "Kory Huel DVM",
      tel: "389-116-7847",
      address: "0004 Murray Tunnel",
      opening_hours: "08:00",
      description: "voluptatum eum dolorem",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=95.93341202839405",
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
      id: 13,
      name: "Bailey Brakus",
      tel: "(856) 163-1242 x683",
      address: "9928 Lynch Stream",
      opening_hours: "08:00",
      description: "architecto et temporibus",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=11.287699385978488",
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
      id: 14,
      name: "Tyra Feeney",
      tel: "368-023-8275 x926",
      address: "16859 Cartwright Cliffs",
      opening_hours: "08:00",
      description:
        "Dolorum iste quia minus. Possimus omnis sed rem labore error ducimus eveniet molestias nulla. Sequi est aut totam consequatur.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=64.25122653744737",
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
      id: 15,
      name: "Douglas Feil",
      tel: "411-171-9053 x64828",
      address: "97224 Labadie Hills",
      opening_hours: "08:00",
      description:
        "Labore nihil nobis voluptatem voluptatibus et facilis in libero. Quas autem soluta libero qui. Consequatur ipsam assumenda. Eveniet explicabo et quasi voluptatem.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=96.71593202364176",
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
    {
      id: 16,
      name: "Ashleigh Renner",
      tel: "111.285.1550",
      address: "7421 Tyshawn Turnpike",
      opening_hours: "08:00",
      description: "non",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=78.09590356083582",
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
      id: 17,
      name: "Antonetta Gerhold",
      tel: "(841) 439-1636",
      address: "9390 Brant Vista",
      opening_hours: "08:00",
      description: "eum porro rerum",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=68.1103676855318",
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
      id: 18,
      name: "Flo Cole",
      tel: "(649) 454-4578",
      address: "765 Lind Pike",
      opening_hours: "08:00",
      description:
        "Culpa suscipit aut qui aut vel repudiandae ut laudantium. Soluta ut sequi. Inventore veniam voluptatem omnis voluptatem illo.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=14.287284492623066",
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
    {
      id: 19,
      name: "Mrs. Kameron Beahan",
      tel: "1-769-230-5766",
      address: "48693 Rice Light",
      opening_hours: "08:00",
      description:
        "Non qui praesentium amet voluptatibus repellendus quas. Minima aut nisi dolorum iusto. Est maiores ut est dolor dicta est aut. Saepe eveniet optio tempora ut et possimus qui sit.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=97.24410722059534",
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
    {
      id: 20,
      name: "Deshaun Harber",
      tel: "(655) 404-0440 x37118",
      address: "944 Fausto Court",
      opening_hours: "08:00",
      description: "Delectus soluta quae sed labore minus.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=29.627675899292647",
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
      id: 21,
      name: "Miss Haylie Brekke",
      tel: "(523) 132-0369",
      address: "65978 Palma Trafficway",
      opening_hours: "08:00",
      description: "quia",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=34.50684723707062",
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
      id: 22,
      name: "Eddie Rolfson MD",
      tel: "(373) 805-2390 x068",
      address: "136 Deion Highway",
      opening_hours: "08:00",
      description: "quaerat",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=97.14225678186952",
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
    {
      id: 23,
      name: "Turner Corkery",
      tel: "827-305-4797 x2572",
      address: "163 Hartmann Key",
      opening_hours: "08:00",
      description: "rerum",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=98.22809768334557",
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
      id: 24,
      name: "Liza Olson MD",
      tel: "(842) 674-4550",
      address: "085 Madeline Passage",
      opening_hours: "08:00",
      description:
        "Quisquam sed sint qui. Omnis veniam quisquam eos distinctio nihil. Et et possimus voluptas aut a quo harum ut ab. Assumenda soluta itaque ad veniam rerum hic laudantium omnis tempora. Doloribus aliquam est sed error optio dolore unde iusto.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=40.718690081288436",
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
      id: 25,
      name: "Ms. Matilda Schaden",
      tel: "419.336.3188",
      address: "837 Rippin Tunnel",
      opening_hours: "08:00",
      description: "velit",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=63.82047647553004",
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
      id: 26,
      name: "Myrtle Smith",
      tel: "969.798.3250 x376",
      address: "090 Boyer Brook",
      opening_hours: "08:00",
      description:
        "Velit officiis earum cupiditate laborum autem veniam. Consequatur recusandae vel. Voluptatem non sapiente sit eius non ad iure quia amet. Vel ea ea et et maxime.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=81.24956529539251",
      viewCounts: 0,
      createdAt: "2022-01-30T18:12:28.000Z",
      updatedAt: "2022-01-30T18:12:28.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-01-30T18:12:28.000Z",
        updatedAt: "2022-01-30T18:12:28.000Z",
      },
    },
    {
      id: 27,
      name: "Tyshawn Turner",
      tel: "1-933-733-9154 x87982",
      address: "322 Kutch Station",
      opening_hours: "08:00",
      description:
        "Ad nihil placeat amet officia nam.\nTemporibus et omnis provident.\nVelit officia quo sunt quod ut autem cupiditate similique consequatur.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=29.679619530501846",
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
      id: 28,
      name: "Jacquelyn Emard",
      tel: "1-047-560-6999 x443",
      address: "590 Ernesto Turnpike",
      opening_hours: "08:00",
      description:
        "Unde aspernatur dicta quo. Cumque ut id non itaque praesentium qui. Autem magnam voluptatibus molestias doloremque quo dolore. Quos molestiae recusandae voluptas laudantium omnis natus.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=43.225967782656724",
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
      id: 29,
      name: "Prince Mann",
      tel: "255-117-0712 x0796",
      address: "5690 Rutherford Valley",
      opening_hours: "08:00",
      description:
        "Animi dolor et nisi provident fugit vitae quod ut. Consequuntur aut voluptas quaerat. Dicta veritatis et qui quae ratione. Vel delectus aliquid et dolor.\n \rQuia quia est accusantium alias. Praesentium omnis est illum ad provident dolor quia architecto est. Cumque totam reprehenderit eum vel alias atque dolor dignissimos praesentium. Aspernatur corporis molestiae eum est veniam quis odit sed.\n \rUnde sunt fuga rerum et et sequi. Quia harum sunt eum esse dolor nulla. Odio sint ut adipisci quis sequi necessitatibus eos. Sit mollitia aut et quasi laborum. Provident eum corporis amet hic error nam. Beatae delectus esse.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=14.353879817378301",
      viewCounts: 0,
      createdAt: "2022-01-30T18:12:28.000Z",
      updatedAt: "2022-01-30T18:12:28.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-01-30T18:12:28.000Z",
        updatedAt: "2022-01-30T18:12:28.000Z",
      },
    },
    {
      id: 30,
      name: "Miss Coby Abernathy",
      tel: "(711) 162-2759",
      address: "75296 Rubie Ways",
      opening_hours: "08:00",
      description:
        "Reprehenderit vel error.\nOmnis a sed laudantium et.\nQuia eius temporibus id occaecati.\nOdit dolorum tempore in facere quod est voluptas.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=76.8560001412145",
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
      id: 31,
      name: "Citlalli Nienow",
      tel: "911.913.1499 x31311",
      address: "962 Pagac Shoal",
      opening_hours: "08:00",
      description:
        "Quas dolorem ut sint molestias perspiciatis tempora delectus sed.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=75.03537821036358",
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
      id: 32,
      name: "Savanah Fisher III",
      tel: "188-248-8219 x0877",
      address: "7214 Daugherty Well",
      opening_hours: "08:00",
      description: "dignissimos at est",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=96.98297418354827",
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
      id: 33,
      name: "Unique Hackett",
      tel: "1-974-209-1680 x077",
      address: "272 Ena Vista",
      opening_hours: "08:00",
      description: "adipisci",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=7.070091324196981",
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
    {
      id: 34,
      name: "Eusebio Kuhic",
      tel: "390.405.2742",
      address: "62715 MacGyver Well",
      opening_hours: "08:00",
      description: "Consectetur est rem hic quae iure quis velit.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=63.87879437650798",
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
      id: 35,
      name: "Alan Treutel",
      tel: "984.808.0912 x79934",
      address: "82358 McDermott Gardens",
      opening_hours: "08:00",
      description: "quo",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=13.036507014619403",
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
      id: 36,
      name: "Brendan Smitham",
      tel: "(526) 742-9975 x6275",
      address: "5029 Mckenzie Ports",
      opening_hours: "08:00",
      description:
        "Esse enim dolor suscipit labore consectetur. Recusandae mollitia et in doloremque architecto saepe laboriosam molestiae. Qui dolores iure quod. Qui tempora ipsum id temporibus deserunt. Quisquam rerum velit dolor possimus vel deserunt qui aut est.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=26.02972733646276",
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
      id: 37,
      name: "Lydia Reichel I",
      tel: "704-601-9404 x248",
      address: "360 Lynch Islands",
      opening_hours: "08:00",
      description: "error",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=55.66768813379874",
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
    {
      id: 38,
      name: "Asha Funk",
      tel: "(459) 883-5380",
      address: "320 Titus Freeway",
      opening_hours: "08:00",
      description: "Error sed fugiat ducimus hic non non laboriosam.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=5.113667379433484",
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
    {
      id: 39,
      name: "Mrs. Dudley Miller",
      tel: "136.533.8577 x5456",
      address: "39003 Huel Extensions",
      opening_hours: "08:00",
      description:
        "Sit cupiditate ex molestiae quia voluptatem. Id voluptatem consequatur nisi nihil. Voluptatem nisi perspiciatis odit facilis consectetur.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=20.897176089836744",
      viewCounts: 0,
      createdAt: "2022-01-30T18:12:28.000Z",
      updatedAt: "2022-01-30T18:12:28.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-01-30T18:12:28.000Z",
        updatedAt: "2022-01-30T18:12:28.000Z",
      },
    },
    {
      id: 40,
      name: "Kasandra Schowalter",
      tel: "977.860.0043 x5307",
      address: "48562 Kiley Ford",
      opening_hours: "08:00",
      description:
        "Illo quia exercitationem voluptas modi quasi. Et molestiae ut amet est iure sequi sunt rerum. Alias porro ex sit in. Omnis architecto aut qui. Omnis ducimus placeat laudantium odit id labore quibusdam. Aspernatur assumenda laudantium repudiandae quos nemo veritatis eius eius aut.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=60.7879540832928",
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
    {
      id: 41,
      name: "Melisa Macejkovic",
      tel: "1-254-540-9954 x305",
      address: "04343 DuBuque Crossing",
      opening_hours: "08:00",
      description:
        "Et voluptas incidunt et accusantium molestias asperiores perferendis. Dolores ad ut minus sequi error vel odio. Dolor est perferendis doloribus et velit rem quas. Ut sed mollitia ex aut.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=47.629377805005866",
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
      id: 42,
      name: "Carlotta Padberg",
      tel: "745.437.0525",
      address: "0721 Wuckert Lake",
      opening_hours: "08:00",
      description:
        "Qui doloremque cumque et possimus accusantium et fugit cumque ullam. Ea perspiciatis rerum numquam rerum quo et molestiae quia quos. Et laboriosam delectus fugiat molestiae eius placeat ea. Fugiat facilis dolorem fugiat possimus voluptatibus beatae impedit quibusdam ullam. Libero et id qui voluptatum architecto saepe dolores blanditiis.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=0.17718771287840163",
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
      id: 43,
      name: "Daren Stanton",
      tel: "649.586.6325 x440",
      address: "65570 Annabelle Mission",
      opening_hours: "08:00",
      description:
        "Velit qui veniam facere. Officia perspiciatis ut qui praesentium ea porro. Distinctio voluptas vel corrupti sunt. Provident ut itaque libero at. Ut voluptates dolor illo.\n \rPariatur modi libero et sequi repellat est quis. Amet dolore rerum praesentium et expedita autem. Magni ducimus aut assumenda numquam possimus. Ipsa perspiciatis quis.\n \rDicta ratione maiores. Laboriosam molestiae quos iusto et aut suscipit et voluptas. Quidem rem est ut libero magni et.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=55.54113954504349",
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
      id: 44,
      name: "Arturo Fritsch",
      tel: "(269) 311-6702 x853",
      address: "09093 Austen Junctions",
      opening_hours: "08:00",
      description:
        "Reprehenderit hic possimus id tempora aut dolor illo molestiae sit.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=4.69153111311198",
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
      id: 45,
      name: "Emie Ankunding",
      tel: "112.912.5834 x82633",
      address: "170 Tommie Walk",
      opening_hours: "08:00",
      description:
        "Nobis quia totam sapiente quasi omnis quos nobis ipsam rerum. Voluptatum exercitationem qui dolore ducimus et et asperiores esse totam. Enim error facere quia corrupti eos odio. Asperiores quis perferendis reprehenderit dolores laboriosam cupiditate hic.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=54.529819696699214",
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
      id: 46,
      name: "Louvenia Strosin Sr.",
      tel: "(388) 904-9079 x6244",
      address: "83083 Schneider Knolls",
      opening_hours: "08:00",
      description:
        "Odio vero voluptas magni ut. Dolorum est ad illum ut repudiandae tenetur.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=29.592724109711654",
      viewCounts: 0,
      createdAt: "2022-01-30T18:12:28.000Z",
      updatedAt: "2022-01-30T18:12:28.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-01-30T18:12:28.000Z",
        updatedAt: "2022-01-30T18:12:28.000Z",
      },
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
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-01-30T18:12:28.000Z",
        updatedAt: "2022-01-30T18:12:28.000Z",
      },
    },
    {
      id: 48,
      name: "Bernhard Lesch DDS",
      tel: "294-346-4030 x343",
      address: "05782 Graham Greens",
      opening_hours: "08:00",
      description:
        "Natus pariatur asperiores consequatur quae eum incidunt eligendi. Maiores fugiat perferendis repellat explicabo asperiores deserunt tempore similique amet. Aut cum autem ea quidem iure facilis. Nemo ab fugiat dolore ea. Sapiente totam aut consequatur eveniet omnis iure. Rem quis fugit rerum cupiditate dolor non.\n \rUnde autem ea minus aperiam sequi neque. Suscipit molestias nihil eos aut nesciunt. Et aspernatur beatae ea libero tempora qui necessitatibus sed. Nemo dolorem itaque optio quas aperiam voluptatibus nisi. Facere sit non ab dolor a.\n \rEst ratione illum quo est sint velit quod possimus qui. Ut necessitatibus illum dolorem porro culpa delectus aut. Eius explicabo sunt voluptatibus qui vel saepe harum a. Et dignissimos atque corporis qui qui. Dolor rerum et commodi ex sunt.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=36.61941164331688",
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
      id: 49,
      name: "Herminia McClure I",
      tel: "1-947-231-4959",
      address: "709 Hudson Crossroad",
      opening_hours: "08:00",
      description:
        "Libero est consectetur nihil voluptas quis. Non ea magnam omnis ullam est voluptates. Consequatur vel animi labore voluptate necessitatibus consequatur voluptatem beatae qui. Voluptatem eos dolorem magni. Est soluta rerum optio repellendus eos aut qui.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=3.573630766594782",
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
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-01-30T18:12:28.000Z",
        updatedAt: "2022-01-30T18:12:28.000Z",
      },
    },
  ],
};

export default {
  data() {
    return {
      restaurants: [],
    };
  },
  created() {
    this.fetchRestaurants();
  },
  methods: {
    fetchRestaurants() {
      this.restaurants = dummyData.restaurants;
    },
    deleteRestaurant(restaurantId) {
      this.restaurants = this.restaurants.filter(
        (restaurant) => restaurant.id !== restaurantId
      );
    },
  },
};
</script>
