<template>
  <div>
    <loader v-if="isLoading" />
    <v-form @submit.prevent="submitHandler">
      <v-text-field clearable label="Фамилия" name='lastName' v-model="form.lastName" />
      <v-text-field clearable label="Имя" name='firstName' v-model="form.firstName" />
      <v-text-field clearable label="Отчество" name='middleName' v-model="form.middleName" />
      <v-text-field type="date" label="Дата рождения" name='birthDate' v-model="form.birthDate" />
      <v-text-field clearable label="Воинское звание" name='militaryRank' v-model="form.militaryRank" />
      <v-text-field clearable label="Воинская должность" name='militaryPosition' v-model="form.militaryPosition" />
      <btn type="submit">Сохранить</btn>
    </v-form>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import Btn from '@/components/Button';
import Loader from '@/components/Loader';

export default {
  components: {
    Btn,
    Loader
  },
  data: () => {
    return {
      form: {
        firstName: '',
        middleName: '',
        lastName: '',
        militaryRank: '',
        militaryPosition: '',
        birthDate: '',
      }
    }
  },
  computed: {
    ...mapState(['isLoading']),
  },
  methods: {
    ...mapActions(['addHero']),
    submitHandler() {
      this.form.birthDate = new Date(this.form.birthDate);
      this.addHero(this.form);
    }
  }
}
</script>