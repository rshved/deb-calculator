<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="9" md="9" class="pa-0">
      <v-card light class="px-4 py-10 mt-8 gradient" raised>
        <p class="text-center text-h2 font-weight-bold">Игра</p>
        <v-row>
          <v-col v-if="showGP" class="offset-md-2" cols="12" md="8">
            <v-row>
              <v-col cols="12" md="8" class="offset-md-2"
                ><v-text-field
                  v-model="points"
                  type="number"
                  placeholder="Введите общее количество очков"
                ></v-text-field
              ></v-col>
              <v-btn class="mx-auto btnColor" @click="setGamePoints()"
                >Подтвердить</v-btn
              >
            </v-row>
          </v-col>
          <v-col v-else cols="12">
            <v-row>
              <v-col cols="12"
                ><p class="text-center text-h4">{{ gamePoints }}</p></v-col
              >
              <v-btn class="mx-auto mb-5 btnColor" @click="resetGamePoints"
                >Новая раздача</v-btn
              >
            </v-row>
          </v-col>
        </v-row>

        <v-row class="mt-15">
          <v-col cols="5">
            <p class="text-center text-h5 font-weight-medium">Team 1</p>
            <!-- <v-text-field
              v-model="firstTeam"
              placeholder="Введите название команды 1"
            ></v-text-field>
            <v-btn>Сохранить</v-btn> -->
            <v-text-field
              v-model="scoreOne"
              type="number"
              placeholder="Введите очки"
            ></v-text-field>
            <v-btn class="px-1 bgBtn" @click="calculatScoreTeamOne"
              >Подтвердить</v-btn
            >
          </v-col>

          <v-col cols="5" class="offset-2">
            <p class="text-center text-h5 font-weight-medium">Team 2</p>
            <!-- <v-text-field
              v-model="secondTeam"
              placeholder="Введите название команды 2"
            ></v-text-field>
            <v-btn>Сохранить</v-btn> -->
            <v-text-field
              v-model="scoreTwo"
              type="number"
              placeholder="Введите очки"
            ></v-text-field>
            <v-btn class="px-1 bgBtn" @click="calculateScoreTeamTwo"
              >Подтвердить</v-btn
            >
          </v-col>
        </v-row>
        <v-row class="mt-15">
          <v-col cols="5"
            ><p class="font-weight-medium">
              Общий счет команды 1: {{ totalOne }}
            </p></v-col
          >
          <v-col cols="5" class="offset-2"
            ><p class="font-weight-medium">
              Общий счет команды 2: {{ totalTwo }}
            </p></v-col
          >

          <v-btn class="mx-auto my-5 btnColor" @click="newGame"
            >Новая игра</v-btn
          >
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      points: null,
      firstTeam: null,
      secondTeam: null,
      showGP: true,
      totalOne: null,
      totalTwo: null,
      scoreOne: null,
      scoreTwo: null,
      // showNameOne: true,
      // showNameTwo: true,
    }
  },
  computed: {
    ...mapState('game', ['gamePoints']),
  },
  methods: {
    newGame() {
      this.totalOne = null
      this.totalTwo = null
      this.resetGamePoints()
    },
    resetGamePoints() {
      this.$store.commit('game/resetPoints')
      this.showGP = true
    },
    setGamePoints() {
      this.$store.commit('game/setPoints', this.points)
      this.points = null
      this.showGP = false
    },
    calculatScoreTeamOne() {
      if (this.scoreOne) {
        this.totalOne = +this.scoreOne + this.totalOne
        this.totalTwo = this.totalTwo + (this.gamePoints - this.scoreOne)
        this.scoreOne = null
      } else {
        this.totalOne = this.gamePoints - this.scoreTwo
        this.totalTwo = this.scoreTwo
      }
    },
    calculateScoreTeamTwo() {
      if (this.scoreTwo) {
        this.totalTwo = +this.scoreTwo + this.totalTwo
        this.totalOne = this.totalOne + (this.gamePoints - this.scoreTwo)
        this.scoreTwo = null
      } else {
        this.totalTwo = this.gamePoints - this.scoreOne
        this.totalOne = this.scoreOne
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.gradient {
  background: -webkit-linear-gradient(
    45deg,
    rgb(234, 194, 194),
    rgb(210, 246, 247)
  );
  background: -moz-linear-gradient(
    45deg,
    rgb(234, 194, 194),
    rgb(210, 246, 247)
  );
  background: linear-gradient(45deg, rgb(234, 194, 194), rgb(210, 246, 247));
}

.btnColor {
  background: -webkit-linear-gradient(
    45deg,
    rgb(229, 157, 157),
    rgb(171, 149, 163)
  );
  background: -moz-linear-gradient(
    45deg,
    rgb(229, 157, 157),
    rgb(171, 149, 163)
  );
  background: linear-gradient(45deg, rgb(229, 157, 157), rgb(171, 149, 163));
}

.bgBtn {
  background: -webkit-linear-gradient(
    45deg,
    rgb(242, 232, 232),
    rgb(178, 160, 160)
  );
  background: -moz-linear-gradient(
    45deg,
    rgb(242, 232, 232),
    rgb(178, 160, 160)
  );
  background: linear-gradient(45deg, rgb(242, 232, 232), rgb(178, 160, 160));
}
</style>
