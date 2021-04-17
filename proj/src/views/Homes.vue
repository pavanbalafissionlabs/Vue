<template>
  <div>
    <Header />
    <Footer />
    <SIDEBAR />
    <br />
    <br />
    <div v-if="loading">Please wait</div>
    <div v-else>
      <div v-if="users.length === 0">no data avialble</div>
      <div v-else class="tbleft">
        <!-- <table>
          <tr>
            <td>name</td>
            <td>Id</td>
            <td>email</td>
            <td>phone</td>
          </tr> -->
        <div class="center">
          <v-simple-table dark>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">Name</th>
                  <th class="text-left">id</th>
                  <th class="text-left">email</th>
                  <th class="text-left">phone</th>
                  <th class="text-left">Website</th>
                </tr>
              </thead>
              <tbody>
                <!-- <tr v-for="user in users" :key="user.id"> -->
                <tr v-for="user in filterUser" :key="user.id">
                  <td>{{ user.name | filterUser.toUpperCase() }}</td>
                  <td>{{ user.id }}</td>
                  <td>{{ user.email }}</td>
                  <td>{{ user.phone }}</td>
                  <td>{{ user.website }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </div>
        <!-- <tr v-for="(user, i) of users" :key="i">
            <td>{{ user.name }}</td>
            <td>{{ user.id }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.phone }}</td>
          </tr>
        </table> -->
      </div>
    </div>
    search a user by Name:<input
      type="text"
      v-model="search"
      placeholder="search user"
    />
  </div>
</template>

<script>
import axios from "axios";
import Header from "../components/Header";

import Footer from "../components/Footer";
import SIDEBAR from "../components/SIDEBAR";
export default {
  name: "Homes",
  components: {
    Header,
    Footer,
    SIDEBAR,
  },
  data() {
    return {
      users: [],
      search: "",
      loading: false,
    };
  },
  mounted() {
    window.console.log(this.$store.state.users);
    this.getusers();
  },
  computed: {
    filterUser: function () {
      return this.users.filter((user) => {
        return user.name.match(this.search);
      });
    },
  },
  methods: {
    async getusers() {
      this.loading = true;
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        this.users = response.data;
        console.log(this.users);
        this.$store.state.users = response.data;
        this.loading = false;
      } catch (error) {
        window.console.log(error);
      }
    },
    // async postUser(){
    //   try{
    //     const post={

    //     }
    //     const response = await axios.post(
    //       "https://jsonplaceholder.typicode.com/users"
    //     );
    //   }
    // }
  },
};
</script>

<style scoped>
/* table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
} */

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

.tbleft {
  margin-left: 20%;
}
.center {
  margin-left: auto;
  margin-right: auto;
}
</style>
