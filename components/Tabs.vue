<template>
  <v-tabs background-color="orange lighten-4" color="#000">
    <v-tab
      v-for="tab in tabs"
      :key="tab.name"
      :to="`#${tab.id}`"
    >
      {{ tab.name }}
    </v-tab>
    <v-tab-item
      v-for="tab in tabs"
      :key="tab.name"
      :id="tab.id"
    >
      <component :is="tab.component" :data="tab.props" />
    </v-tab-item>
  </v-tabs>
</template>

<script>
export default {
  name: 'Tabs',
  props: {
    tabs: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="less">
  .v-tabs-items {
    background-color: transparent !important;
  }

  .v-tabs-bar {
    margin-bottom: 15px;
  }
</style>