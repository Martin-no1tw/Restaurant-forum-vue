<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">美食達人</h1>
    <div class="row">
      <UsersTop v-for="user in users" :key="user.id" :initial-userstop="user" />
    </div>
  </div>
</template>

<script>
import NavTabs from "./../components/NavTabs";
import UsersTop from "./../components/UsersTop";

const dummyData = {
  users: [
    {
      id: 1,
      name: "root",
      email: "root@example.com",
      password: "$2a$10$rDvRLt.QeA29/1qCWZXNS.M6MoqFKu25RpRRvV9mClEyJCvKCtiYm",
      isAdmin: true,
      image: null,
      createdAt: "2022-01-30T18:12:28.000Z",
      updatedAt: "2022-01-30T18:12:28.000Z",
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
    {
      id: 2,
      name: "user1",
      email: "user1@example.com",
      password: "$2a$10$qtSCyHQddj10rkq0O.xNJOSpUxOOexpQ1LScGpyIa21y.P0mvEZm6",
      isAdmin: false,
      image: null,
      createdAt: "2022-01-30T18:12:28.000Z",
      updatedAt: "2022-01-30T18:12:28.000Z",
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
    {
      id: 3,
      name: "user2",
      email: "user2@example.com",
      password: "$2a$10$dqPorTXJkTFIr4Zx5aGLkO8ax0mNWEOIfK48x94ZJmxaSeIpNyDAG",
      isAdmin: false,
      image: null,
      createdAt: "2022-01-30T18:12:28.000Z",
      updatedAt: "2022-01-30T18:12:28.000Z",
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
  ],
};

export default {
  name: "userstop",
  components: {
    NavTabs,
    UsersTop,
  },
  data() {
    return {
      users: [],
    };
  },
  created() {
    this.fetchUsersTop();
  },
  methods: {
    fetchUsersTop() {
      const { users } = dummyData;
      this.users = users;
    },
  },
};
</script>