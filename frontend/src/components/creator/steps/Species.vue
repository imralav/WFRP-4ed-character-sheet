<template>
  <div class="species-wrapper">
    <h1>Firstly, you need to select your species:</h1>
    <div class="species-selection-buttons">
      <button @click="selectSpecies(raceName)" @mouseover="updateInfo(raceData.info)" v-bind:key="raceName"
              v-for="(raceData, raceName) in species" v-bind:class="{selected: currentSpecies.name === raceData.name}">
        {{raceData.name}}
      </button>
    </div>
    <h2>or roll a die and let the destiny make the choice for you:</h2>
    <div class="species-roll-wrapper">
      <button @click="rollSpeciesOnce" @mouseover="updateInfo(rollSpeciesInfo)">Roll</button>
      <h3>{{rollStatus}}</h3>
    </div>
    <div class="species-confirmation-wrapper">
      <button @click="confirmSpeciesSelection()" :disabled="currentSpeciesNotSelected">I want to be a {{currentSpecies.name || '...'}}</button>
    </div>
  </div>
</template>

<script>
import species from './species.json';
import roller from './../../dice/roller';

const rollSpeciesInfo = `
<table>
  <thead>
    <tr>
      <th>1d100</th><th>Species</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>01-90</td><td>Human</td>
    </tr>
    <tr>
      <td>91-94</td><td>Halfling</td>
    </tr>
    <tr>
      <td>95-98</td><td>Dwarf</td>
    </tr>
    <tr>
      <td>99</td><td>High Elf</td>
    </tr>
    <tr>
      <td>00</td><td>Wood Elf</td>
    </tr>
  </tbody>
</table>
`;

export default {
  name: 'species',
  data: function () {
    return {
      currentSpecies: {},
      species,
      rollSpeciesInfo,
      rollStatus: '',
    };
  },
  computed: {
    currentSpeciesNotSelected: function() {
        return Object.keys(this.currentSpecies).length === 0;
    },
  },
  methods: {
    selectSpecies: function (selectedSpecies) {
      this.currentSpecies = this.species[selectedSpecies];
    },
    confirmSpeciesSelection: function () {
      if (!this.currentSpeciesNotSelected) {
        this.$emit('input', this.currentSpecies);
        this.$emit('next-step');
      }
    },
    updateInfo: function (info) {
      this.$emit('update-info', info);
    },
    rollSpeciesOnce: function () {
      this.rollStatus = 'Rolling...';
      const result = roller.rollDie(100);
      const newSpecies = this.selectSpeciesFromRoll(result);
      this.selectSpecies(newSpecies);
      this.rollStatus = `(${result}) ${this.currentSpecies.name}`;
      this.updateInfo(this.currentSpecies.info);
    },
    rollSpeciesContinuously: function (times) {
      this.updateInfo(this.currentSpecies.info);
    },
    selectSpeciesFromRoll: function(roll) {
      if(roll === 0) {
        return 'woodElf';
      } else if(roll === 99) {
        return 'highElf';
      } else if(roll >= 1 && roll <= 90) {
        return 'human';
      } else if(roll >= 91 && roll <= 94) {
        return 'halfling';
      } else {
        return 'dwarf';
      }
    },
  },
};
</script>

<style lang="scss" scoped>
  .species-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;

    h1, h2 {
      text-align: center;
    }

    .species-selection-buttons {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
    }

    .species-roll-wrapper {
      display: flex;
      align-items: center;
    }

    button {
      background: none;
      background-color: white;
      border: 1px solid #111111;
      border-radius: 15px;
      padding: 15px;
      margin: 10px;
      font-size: 20px;
      font-family: 'Dosis', sans-serif;

      &:focus {
        outline: none;
      }

      &:hover:not(:disabled) {
        background-color: #efefef;
        border-color: #5a5a5a;
        box-shadow: -1px 0 5px #efcdd4, 0 1px #efcdd4, 1px 0 #efcdd4, 0 -1px #efcdd4;
      }

      &:disabled {
        background-color: #c7c7c7;
      }

      &.selected {
        box-shadow: -1px 0 5px #8d1a25, 0 1px #8d1a25, 1px 0 #8d1a25, 0 -1px #8d1a25;
      }
    }

    .species-confirmation-wrapper {
      button:not(:disabled) {
        background-color: #c9efce;
      }
    }
  }
</style>
