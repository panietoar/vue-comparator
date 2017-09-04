<template>
  <div id="app">
    <img src="./assets/logo.png">
    <vue-comparator :comparisonData="comparisonData" featuresLabel="Features"></vue-comparator>
  </div>
</template>

<script>
import VueComparator from './components/Comparator.vue'

export default {
  name: 'app',
  data () {
    return {
      comparisonData: {
        labels: [
          'Screen Size',
          'Processor',
          'OS',
          'Price'
        ],
        items: [
          {
            title: 'Item #1',
            values: ['800x600', 'Snapdragon 500', 'Android 5.0', '$299']
          },
          {
            title: 'Item #2',
            values: ['1280x900', 'Snapdragon 600', 'Android 6.0', '$399']
          },
          {
            title: 'Item #3',
            values: ['1920x1080', 'Snapdragon 700', 'Android 7.0', '$499']
          }
        ]
      }
    }
  },
  components: {
    'vue-comparator': VueComparator
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
