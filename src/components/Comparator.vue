<template>
  <div class="comparator-container">
    <div class="labels-container">
      <header class="label-title">
        <span>{{featuresLabel}}</span>
      </header>
      <p v-for="label in comparisonData.labels"> {{label}} </p>
    </div>
    <div class="values-container" v-for="item in comparisonData.items" :key="item.title">
      <header class="item-title">
        <span>{{ item.title }}</span>
      </header>
      <p v-for="value in item.values"> {{value}} </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['comparisonData', 'featuresLabel']
}
</script>

<style scoped lang="scss">
.comparator-container {
  text-align: left;
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-content: flex-end;
  margin: 2em 1em;

  .labels-container {
    font-weight: bold;

    .label-title {
      margin-bottom: 1.5em;

      span {
        font-weight: bold;
        margin-bottom: 0.3em;
      }
    }
  }

  .values-container {
    text-align: center;

    .item-title {
      margin-bottom: 1.5em;

      span {
        font-weight: bold;
        margin-bottom: 0.3em;
      }
    }
  }
}
</style>
