<template>
  <section>
    <h1>Users</h1>
    <ul>
      <li v-for="(user, index) in users" :key="index">
        <a href="#" @click.prevent="goTo(user)"> User {{ user }} </a>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      users: [1, 2, 3, 4, 5],
    };
  },
  methods: {
    goTo(user) {
      this.$router.push("/users/" + user);
      console.log(user);
    },
  },
};
</script>
