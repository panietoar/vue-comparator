<template>
  <div class="comparator-container">
    <div class="labels-container">
      <header class="column-title">
        <span>{{featuresLabel}}</span>
      </header>
      <span v-for="label in comparisonData.labels" :key="label"> {{label}} </span>
    </div>
    <div class="values-container" v-for="index in 5" :key="index">
      <div v-if="comparisonData.items[index - 1]" @click="removeItem(index)" >
        <header class="column-title">
          <span>{{ comparisonData.items[index - 1].title }}</span>
        </header>
        <span v-for="value in comparisonData.items[index - 1].values" :key="value" > {{value}} </span>
      </div>
      <div v-else class="add-item-placeholder" @click="addItem">
        <span>Add Item</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['comparisonData', 'featuresLabel'],
  methods: {
    removeItem (index) {
      this.$emit('itemRemoved', index)
    },
    addItem () {
      this.$emit('itemAdded')
    }
  }
}
</script>

<style scoped lang="scss">
.comparator-container {
  text-align: left;
  display: flex;
  width: 100%;
  flex-direction: row;
  align-content: flex-end;
  margin: 2em 1em;

  .labels-container,
  .values-container {
    width: 16.67%;
    display: flex;
    flex-direction: column;

    .column-title {
      margin-bottom: 1.5em;
      font-weight: bold;
    }

    span {
      margin-bottom: 0.3em;
      display: block;
      padding: 10px 5px;
    }

  }

  .labels-container {
    font-weight: bold;
  }

  .values-container {
    text-align: center;
    cursor: pointer;
    border-radius: 3px;
  }

  .add-item-placeholder {
    background-color: #ddd;

    span {
      margin: 50% 0;
    }
  }

}
</style>
