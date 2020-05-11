<template>
  <v-card :class="['hero__card', {'hero__card_tiny': tiny}]">
    <v-avatar tile size="150" class="hero__avatar">
      <img 
        v-if="data.avatar.isUploaded"
        :src="data.avatar.src"
        alt="Hero's avatar"
      />
      <span v-else>Нет<br>фото</span>
    </v-avatar>

    <template v-if="tiny">
      <p>{{ `${data.lastName} ${data.firstName} ${data.middleName}` }}</p>
    </template>
    <div v-else class="hero__info">
      <p><b>Воинское звание: </b> {{data.militaryRank }}</p>
      <p><b>Дата рождения: </b> {{ data.birthDate }}</p>
      <p><b>Воинская должность: </b> {{ data.militaryPosition }}</p>
    </div>
  </v-card>
</template>

<script>
export default {
  name: 'HeroCard',
  props: {
    data: {
      type: Object,
      required: true
    },
    tiny: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="less" scoped>
  .hero {
    &__card {
      display: flex;
      align-items: center;
      margin-bottom: 15px;
      background-color: transparent;
      box-shadow: none;

      &_tiny {
        flex-direction: column;
        max-width: 300px;
      }
    }

    &__avatar {
      margin-right: 15px;
      background-color: #fff;
      box-shadow: 5px 2px 5px rgba(0, 0, 0, .4);
      border: 1px dashed #000;
    }

    &__card_tiny &__avatar {
      margin: 0;
      margin-bottom: 15px;
    }
  }
</style>