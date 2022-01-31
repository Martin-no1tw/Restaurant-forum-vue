<template>
  <div id="restaurant-forum">
    <main class="mt-5 bg-white">
      <Navbar />
    </main>
    <router-view />
  </div>
</template>

<script>
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar.vue";

// seed data

export default {
  components: {
    Navbar,
  },
};
</script>


