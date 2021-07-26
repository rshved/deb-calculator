<template>
  <v-app dark class="bg">
    <!-- <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer> -->
    <v-app-bar :clipped-left="clipped" fixed app>
      <!-- <v-app-bar-nav-icon @click.stop="drawer = !drawer" /> -->
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>

    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      // drawer: false,
      fixed: false,
      // items: [
      //   {
      //     icon: 'mdi-apps',
      //     title: 'Welcome',
      //     to: '/',
      //   },
      //   {
      //     icon: 'mdi-chart-bubble',
      //     title: 'Inspire',
      //     to: '/inspire',
      //   },
      // ],
      // miniVariant: false,
    }
  },
}
</script>

<style scoped>
.bg {
  background: radial-gradient(
      circle,
      transparent 20%,
      slategray 20%,
      slategray 80%,
      transparent 80%,
      transparent
    ),
    radial-gradient(
        circle,
        transparent 20%,
        slategray 20%,
        slategray 80%,
        transparent 80%,
        transparent
      )
      50px 50px,
    linear-gradient(#a8b1bb 8px, transparent 8px) 0 -4px,
    linear-gradient(90deg, #a8b1bb 8px, transparent 8px) -4px 0;
  background-color: slategray;
  background-size: 100px 100px, 100px 100px, 50px 50px, 50px 50px;
}
</style>
