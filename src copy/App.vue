<script>
import PageHeader from './components/PageHeader.vue'
import MainContent from './components/MainContent.vue'
import PageFooter from './components/PageFooter.vue'
import Card from './components/Card.vue'


export default {
  name: 'App',
  components: {
    PageHeader,
    MainContent,
    PageFooter,
    Card
  },
  data() {
    return {

    }
  }
}
</script>

<template>
  <PageHeader />
  <MainContent />
  <PageFooter />
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
}

ul,
li,
menu,
a {
  list-style: none;
  text-decoration: none;
  color: white;
}

.row {
  display: flex;
  flex-wrap: wrap;
}

.card {
  flex-basis: calc((100% /12) * 4);
  padding: 5px;
}
</style>