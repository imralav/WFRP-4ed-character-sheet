<template>
  <div class="creator-wrapper">
    <div class="content-wrapper">
      <div class="main-content-wrapper">
        <transition name="step-change-fade" appear mode="out-in">
          <keep-alive>
            <component :is="currentStep" @next-step="nextStep" v-model="characterSheet.species"
                       @update-info="updateInfo"></component>
          </keep-alive>
        </transition>
      </div>
      <transition name="info-panel-fade" appear>
        <div class="info-wrapper" v-if="currentInfo">
          <div class="info-content" v-html="currentInfo">
          </div>
        </div>
      </transition>
    </div>
    <div class="step-tracker-wrapper">
      <p>creator step tracker</p>
      <button @click="nextStep">Next step</button>
    </div>
  </div>
</template>

<script>
import Species from './steps/Species.vue';
import Name from './steps/Name.vue';

export default {
  name: 'creator',
  data() {
    return {
      currentStep: Species,
      allSteps: [Species, Name],
      currentInfo: '',
      characterSheet: {
        species: '',
      },
    };
  },
  methods: {
    nextStep() {
      const currentStepIndex = this.allSteps.indexOf(this.currentStep);
      const nextStepIndex = currentStepIndex + 1;
      this.currentStep = this.allSteps[nextStepIndex % this.allSteps.length];
      this.currentInfo = '';
    },
    updateInfo(newInfo) {
      this.currentInfo = newInfo;
    },
  },
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
    overflow: hidden;

    .content-wrapper {
      @extend %bordered-section;
      display: flex;
      flex-grow: 1;
      flex-wrap: wrap;
      overflow: hidden;

      .info-wrapper {
        @extend %bordered-section;
        flex-grow: 1;
        flex-basis: 20%;
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: center;
        overflow: hidden;

        .info-content {
          display: inline-block;
          overflow-y: auto;
          max-height: 300px;
        }
      }

      .main-content-wrapper {
        flex-grow: 1;
        flex-basis: 80%;
        overflow: hidden;

        .step-change-fade-enter-active, .step-change-fade-leave-active {
          transition: opacity .5s ease-in;
        }

        .step-change-fade-enter, .step-change-fade-leave-to {
          opacity: 0;
        }
      }

      .info-panel-fade-enter-active, .info-panel-fade-leave-active {
        transition: opacity .5s ease-in-out, margin .5s ease-in-out;
      }

      .info-panel-fade-enter, .info-panel-fade-leave-to {
        opacity: 0;
        margin-right: -40%;
      }
    }

    .step-tracker-wrapper {
      @extend %bordered-section;
      margin-top: 5px;
      flex-grow: 0;
    }
  }
</style>
