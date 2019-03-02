<template>
  <div class="career-wrapper">
    <div class="selection-type-wrapper">
      <transition name="step-change-fade" appear mode="out-in">
        <keep-alive>
          <component :is="currentSelectionType"/>
        </keep-alive>
      </transition>
    </div>
  </div>
</template>

<script>
import ManualCareerSelection from './ManualCareerSelection.vue';
import RandomCareerSelection from './RandomCareerSelection.vue';

export default {
  name: 'Career',
  data() {
    return {
      currentSelectionType: ManualCareerSelection,
      selectionTypes: [ManualCareerSelection, RandomCareerSelection],
    };
  },
};
</script>

<style lang="scss" scoped>
  .step-change-fade-enter-active, .step-change-fade-leave-active {
    transition: opacity .5s ease-in;
  }

  .step-change-fade-enter, .step-change-fade-leave-to {
    opacity: 0;
  }
</style>
