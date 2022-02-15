<template>
  <div class="header-list">
    <ul class="nav-list">
      <li class="nav-items"><nuxt-link to="/home">Home</nuxt-link></li>
      <li class="nav-items"><nuxt-link to="/memo">Watch Memos</nuxt-link></li>
      <li class="nav-items">
        <nuxt-link to="/newmemo">Create Memos</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TheHeader",
};
</script>

<style scoped>
.header-list {
  height: 40px;
}
.navlist li {
  text-decoration: none;
}
.nav-items {
  color: white;
  display: inline-block;
  padding: 10px;
  text-decoration: none;
}
</style>
