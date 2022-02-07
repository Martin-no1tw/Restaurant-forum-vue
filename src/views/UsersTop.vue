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
import usersAPI from "./../apis/users";
import { Toast } from "./../utils/apiHelpers";

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
    this.fetchTopUsers();
  },
  methods: {
    async fetchTopUsers() {
      try {
        const { data } = await usersAPI.getTopUsers();

        this.users = data.users.map((user) => ({
          id: user.id,
          name: user.name,
          image: user.image,
          followerCount: user.FollowerCount,
          isFollowed: user.isFollowed,
        }));
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "無法取得美食達人，請稍後再試",
        });
      }
    },
  },
};
</script>