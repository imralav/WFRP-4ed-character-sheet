<template>
  <div class="creator-wrapper">
    <div class="content-wrapper">
      <div class="main-content-wrapper">
        <keep-alive>
          <component :is="currentStep" @next-step="nextStep" v-model="characterSheet.species"
                     @update-info="updateInfo"></component>
        </keep-alive>
      </div>
      <div class="info-wrapper" v-if="currentInfo">
        <div class="info-content" v-html="currentInfo">
        </div>
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
  data: function () {
    return {
      currentStep: Species,
      allSteps: [Species, Name],
      currentInfo: '',
      characterSheet: {
        species: ''
      },
    };
  },
  methods: {
    nextStep: function () {
      const currentStepIndex = this.allSteps.indexOf(this.currentStep);
      const nextStepIndex = currentStepIndex + 1;
      this.currentStep = this.allSteps[nextStepIndex % this.allSteps.length];
      this.currentInfo = '';
    },
    updateInfo: function (newInfo) {
      this.currentInfo = newInfo;
    }
  }
};
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
      flex-wrap: wrap;

      .info-wrapper {
        @extend %bordered-section;
        flex-grow: 1;
        flex-basis: 20%;
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: center;

        .info-content {
          display: inline-block;
        }
      }

      .main-content-wrapper {
        flex-grow: 1;
        flex-basis: 80%;
      }
    }

    .step-tracker-wrapper {
      @extend %bordered-section;
      margin-top: 5px;
      flex-grow: 0;
    }
  }
</style>
