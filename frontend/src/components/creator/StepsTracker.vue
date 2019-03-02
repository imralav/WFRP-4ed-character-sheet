<template>
  <div class="dots-wrapper">
    <div class="dot" :class="{selected: step.name === currentStep.name}"
         v-bind:key="step.name" v-for="step in allSteps"
         @click="() => selectStep(step)"
    ></div>
  </div>
</template>

<script>
export default {
  name: 'StepsTracker',
  props: ['currentStep', 'allSteps'],
  methods: {
    selectStep(step) {
      this.$emit('selected-step', step);
    },
  },
};
</script>

<style lang="scss" scoped>
  .dots-wrapper {
    padding: 10px 0;
    display: flex;
    justify-content: space-around;

    .dot {
      height: 10px;
      width: 10px;
      background-color: #bbb;
      border-radius: 50%;
      display: inline-block;
      transition: all .5s ease-in-out;

      &:hover {
        background-color: rgba(156, 0, 0, 0.35);
        transform: scale(1.05);
      }

      &.selected {
        background-color: #f00;
        transform: scale(1.1);
      }
    }
  }
</style>
