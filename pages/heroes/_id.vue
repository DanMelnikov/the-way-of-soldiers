<template>
  <section class="hero">
    <h1>{{ `${lastName} ${firstName} ${middleName}` }}</h1>

    <tabs :tabs="tabs" />
  </section>
</template>

<script>
import Tabs from '../../components/Tabs.vue';
import HeroCard from '../../components/HeroCard.vue';
import Way from './way.vue';
import Gallery from './gallery.vue';

export default {
  validate({params}) {
    return /^\d+$/.test(params.id);
  },
  components: {
    Tabs,
    HeroCard,
    Way,
    Gallery
  },
  data() {
    return {
      firstName: 'Леонид',
      middleName: 'Федорович',
      lastName: 'Кипров',
      militaryRank: 'гвардии мл. сержант',
      militaryPosition: 'связист',
      birthDate: new Date(1924, 8, 21).toLocaleDateString(),
      avatar: {
        isUploaded: false,
        src: '/assets/avatar.jpg',
      },
      biography: `Мой прадед родился 24 сентября 1924 года в семье крестьян. Родители работали в колхозе, дома держали скотину и, маленькому Лёне пришлось помогать маме. В 12 лет умирает отец, и вся мужская работа по дому ложится на плечи ребёнка. Он вынужден был бросить школу, хотя и учился хорошо. Теперь в колхозе ему приходится работать за взрослого мужика.
Вскоре начинается война (на начало войны ему не исполнилось ещё и 16 лет), поэтому добровольцем на фронт он уходит летом 1942 года из Котельничского призывного пункта. 
Четырежды был ранен: в руку, ногу, голову и живот. Осколок, засевший в колене, он носил в себе аж до 60-го года. Воевал связистом. Роль связистов в войне была очень большой, ведь куда армия без связи.
Не раз был прадед буквально на волоске от смерти. В 1942 году группе связистов вместе с моим прадедом надо было тянуть связь через реку. Дело было поздней осенью, на реке уже стоял лёд. Было холодно. Вся река простреливалась немцами, поэтому лёд был похож на решето.
Прадеда ранили в руку, его напарника убили, после чего он, не заметив проруби, провалился под лёд (связисты работали вдвоём, один из них был помощником, а второй тянул катушку с проводом). Прадед скинул с себя сапоги, выплыл через несколько секунд из другой дыры во льду и стал пробираться к берегу. Там он нашёл земляной навес, под который и спрятался, перевязал руку, укрылся шинелью и стал ждать. 
Просидел так 7 часов, пока не был обнаружен второй сменой связистов, которая доставила его в госпиталь, где он пролежал полгода с тяжелым воспалением лёгких и фурункулёзом.
На фронт после госпиталя Леонид Фёдорович попал в самое пекло: на Курскую дугу, форсировал Днепр. 
Курская битва занимает в Великой Отечественной войне особое место. Она продолжалась 50 дней и ночей, с 5 июля по 23 августа 1943 года По своему ожесточению  эта битва не имеет себе равных. В ходе нее было разгромлено 30 отборных дивизий противника. Немецко-фашистские войска потеряли около 500 тыс. человек, 1500 танков, 3 тыс. орудий и 3700 самолетов.
После ожесточённых боёв на Курской дуге ещё освобождал Польшу, Германию. В 1945-ом гвардии младший сержант 25-ой механизированной, ордена Богдана Хмельницкого, ордена Красного Знамени бригады Леонид Фёдорович Кипров взятием чехословацкого города Прага завершил войну. Награждён медалями: «За отвагу», «За освобождение Праги», орденом Отечественной войны II степени и медалью Жукова.
После войны младший сержант Кипров снова ринулся в бой, возглавил бригаду в колхозе, встретил свою любовь, с которой прожил более 60 лет. Вместе с супругой воспитал 3 дочерей. Есть 3 внука, 5 правнуков.
Случилось так, что средняя из дочерей родилась в День Победы. А старшая большую часть своей жизни посвятила связи.`
    }
  },
  computed: {
    tabs() {
      return [
        { 
          component: HeroCard,
          props: {
            firstName: this.firstName,
            middleName: this.middleName,
            lastName: this.lastName,
            militaryRank: this.militaryRank,
            militaryPosition: this.militaryPosition,
            birthDate: this.birthDate,
            avatar: this.avatar
          },
          id: 'main-info', name: 'Основная информация'
        },
        { 
          component: Way,
          props: { biography: this.biography },
          id: 'the-way', name: 'Боевой путь'
        },
        { component: Gallery, id: 'gallery', name: 'Галерея' },
      ];
    }
  },
  async mounted() {
    const options = { urlBase: '/api/heroes' };
    const url = `${options.urlBase}/${this.$route.params.id}`;
    const response = await fetch(url);
    const data = await response.json();
    }
}
</script>

<style lang="less" scoped>
  h1 {
    text-align: center;
  }
</style>