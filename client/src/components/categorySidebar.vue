<template>
    <div>
        <div class="side-bar">
        <ul>
            <li class="list-heading"><h3>Categories</h3></li>
            <li><a href="#">Food</a></li>
            <li><a href="#">Fashion</a></li>
            <li><a href="#">Tools</a></li>

            <div v-if="this.$store.state.isLogin">
              <li class="list-heading"><h3>Manage</h3></li>
              <li><a href="#">Account</a></li>
              <li><router-link to="/myproducts">My products</router-link></li>
              <li><router-link to="/add-product">Add new product</router-link></li>
              <li><router-link to="/cart">Cart</router-link></li>
            </div>
        </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Sidebar"
    }
</script>

<style scoped>
li {
  list-style: none;
}

.side-bar {
  background: #2c3e50;
  color: white;
  width: 250px;
  top: 60px;
  height: calc(100vh - 60px);
  position: fixed;
  overflow-y: auto;
  text-align: left;
  line-height: 40px;
}

li.list-heading {
  margin-left: -15px;
  margin-top: 30px;
  font-family: 'Lucida Sans', 'Lucida Sans Regular',
  'Lucida Grande', 'Lucida Sans Unicode',
  Geneva, Verdana, sans-serif;
}
</style>