<template>
  <div class="creator-wrapper">
    <div class="content-wrapper">
      <div class="main-content-wrapper">
        <component :is="currentStep"></component>
      </div>
      <div class="info-wrapper">
        <p>extra info about currently hovered/active option</p>
      </div>
    </div>
    <div class="step-tracker-wrapper">
      <p>creator step tracker</p>
      <button @click="nextStep">Next step</button>
    </div>
  </div>
</template>

<script>
  import Species from './steps/Species';
  import Name from './steps/Name';

  export default {
    name: 'creator',
    data: function() {
      return {
        currentStep: Species,
        allSteps: [Species, Name],
      };
    },
    methods: {
      nextStep: function() {
        const currentStepIndex = this.allSteps.indexOf(this.currentStep);
        const nextStepIndex = currentStepIndex + 1;
        this.currentStep = this.allSteps[nextStepIndex%this.allSteps.length];
      }
    }
  }
</script>

<style lang="scss" scoped>
  %bordered-section {
    border: 1px solid #121212;
    border-radius: 15px;
    padding: 5px;
  }

  .creator-wrapper {
    width: 80%;
    display: flex;
    flex-direction: column;

    .content-wrapper {
      @extend %bordered-section;
      display: flex;
      flex-grow: 1;

      .main-content-wrapper {
        flex-grow: 2;
        flex-basis: 80%;
      }

      .info-wrapper {
        flex-grow: 0.5;
        @extend %bordered-section;
      }
    }

    .step-tracker-wrapper {
      margin-top: 5px;
      @extend %bordered-section;
      flex-grow: 0;
    }
  }
</style>
