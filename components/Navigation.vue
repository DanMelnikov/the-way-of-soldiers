

<template>
  <v-card>
    <v-navigation-drawer
      permanent
      left
      color="orange lighten-4"
      width="300px"
      height="100vh"
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="main-navigation__title">
            Путь солдат
          </v-list-item-title>
          <v-list-item-subtitle class="main-navigation__subtitle">
            subtext
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :exact="item.isExact"
          :to="item.to"
        >
          <v-list-item-content>
            <v-list-item-title>
              {{ item.title }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>


<script>
export default {
  data () {
    return {
      items: [
        { title: 'Главная', to: '/', isExact: true },
        { title: 'Герои', to: '/heroes', isExact: false },
        { title: 'О сайте', to: '/about', isExact: false },
      ],
    }
  },
}
</script>