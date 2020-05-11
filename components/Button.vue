<template>
  <v-btn
    :color="color"
    :to="to"
  >
    <slot>
      <v-icon>mdi-plus</v-icon>
    </slot>
  </v-btn>
</template>

<script>
export default {
  name: 'Button',
  props: {
    color: {
      type: String,
      default: 'orange lighten-4'
    },
    to: {
      type: String,
      default: null
    }
  }
}
</script>