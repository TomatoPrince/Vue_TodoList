<template>
  <nav class="navbar bar navbar-expand mb-3" style="background-color: #4a90e2;">
    <div class="d-flex justify-content-center flex-fill">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: 'mytask' }">My Task</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: 'inprogress' }">In Progress</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: 'completed' }">Completed</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bar {
  padding: 0;
}
.bar a {
  color: #ffffff;
  font-weight: bold;
  font-size: 20px;
  width: 200px;
  padding: 20px 0;
}
</style>
