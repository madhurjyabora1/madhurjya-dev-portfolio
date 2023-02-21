<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="sidebar" app class="nav-draw">
      <router-link to="/">
        <!-- <v-img
          alt="Vuetify Logo"
          class="shrink logo-top"
          contain
          :src="logo"
          transition="scale-transition"
          width="180"
        /> -->
        <div class="logo-font-nav logo-top">
          MB
        </div>
      </router-link>
      <v-divider></v-divider>
      <v-list>
        <v-list-item
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path"
        >
          <v-list-item-content>{{ item.title }}</v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      app
      :color="dynamicColor"
      lighten
      :elevation="elevateNumber"
      fixed
      :class="{ 'new-color': scrollPosition > 50 }"
    >
      <v-container class="py-0 fill-height" fluid>
        <router-link to="/">
          <!-- <v-img
            alt="Vuetify Logo"
            class="shrink"
            contain
            :src="logo"
            transition="scale-transition"
            width="230"
          /> -->
          <div class="logo-font" :class="{ 'new-color': scrollPosition > 50 && scrollPosition<340 }">
            MB
          </div>
        </router-link>

        <v-spacer></v-spacer>

        <span class="d-sm-none">
          <v-app-bar-nav-icon
            :class="{ 'new-color': scrollPosition > 50 && scrollPosition<340}"
            @click.stop="sidebar = !sidebar"
          ></v-app-bar-nav-icon>
        </span>
        <v-btn
          text
          plain
          class="d-none d-sm-flex"
          :class="{ 'new-color': scrollPosition > 50 && scrollPosition<340 }"
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path"
        >
          {{ item.title }}
        </v-btn>
      </v-container>
    </v-app-bar>

    <v-main app class="">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
const logo = require("@/assets/logo.png");
export default {
  name: "App",

  data: () => ({
    //
    sidebar: false,
    logo,
    elevateNumber: 2,
    scrollPosition: null,
    dynamicColor: "white",
    menuItems: [
      { title: "Home", path: "/" },
      { title: "About", path: "/about" },
      { title: "Form", path: "/form" },
    ],
  }),
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
      if (this.scrollPosition > 50 && this.scrollPosition <340) {
        this.dynamicColor = "transparent";
        this.elevateNumber=0
      }
      if (this.scrollPosition < 50) {
        this.dynamicColor = "white";
        this.elevateNumber=2
      }
      if (this.scrollPosition >340 ) {
        this.dynamicColor = "white";
        this.elevateNumber=2
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
};
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Nabla&display=swap');

.logo-top {
  margin-top: 10px !important;
  margin-bottom: 3px;
  margin-left: 12px;
}
.logo-font {
  font-family: 'Nabla', cursive;
  color: black;
  font-size: 35px;
  text-decoration: none;
}
.logo-mid {
  font-family: 'Nabla', cursive;
  color: red;
  font-size: 35px;
  text-decoration: none;
}
.logo-mid-nav {
  font-family: 'Nabla', cursive;
  color: red;
  font-size: 28px;
  text-decoration: none;
}
.logo-font-nav {
  font-family: 'Nabla', cursive;
  color: black;
  font-size: 28px;
  text-decoration: none;
}
a {
  text-decoration: none;
}
.new-color {
  color: white !important;
}
</style>