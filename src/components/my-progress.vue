<template>
  <div class="my-progress">
    <div class="my-progress__content">
      <div class="my-progress__text">{{text}}</div>
      <div class="my-progress__percent">{{percent}}%</div>
    </div>
    <div
      class="my-progress__line"
      :class="{ 
				'my-progress__line_0': percent === 0, 
				'my-progress__line_1': percentRound === 1, 
				'my-progress__line_2': percentRound === 2, 
				'my-progress__line_3': percentRound === 3, 
				'my-progress__line_4': percentRound === 4, 
				'my-progress__line_5': percentRound === 5, 
				'my-progress__line_6': percentRound === 6, 
				'my-progress__line_7': percentRound === 7, 
				'my-progress__line_8': percentRound === 8, 
				'my-progress__line_9': percentRound === 9, 
				'my-progress__line_10': percentRound === 10,
				'my-progress__line_green': lineColor === 'green'}"
    ></div>
  </div>
</template>

<script>
export default {
  props: {
    percent: {
      type: Number,
      default: 0
    },
    lineColor: String,
    text: String
  },
  computed: {
    percentRound: function() {
      return Math.round(+this.percent / 10);
    }
  }
};
</script>

<style scoped lang="scss">
.my-progress {
  margin-bottom: 20px;
  &__content {
    display: flex;
    justify-content: space-between;
    color: #757575;
  }
  &__line {
    height: 2px;
    margin: 5px 0;
    background-color: #e0e0e0;
		position: relative;
    &:before {
      content: "";
      background-color: #1e88e5;
			position: absolute;
			left: 0;
			top: 0;
			height: 100%;
    }
		&_green{
			&:before {
				background-color: #43a047;
      }
		}
    &_0 {
      &:before {
				width: 0%;
      }
    }
		&_1 {
      &:before {
				width: 10%;
      }
    }
		&_2 {
      &:before {
				width: 20%;
      }
    }
		&_3 {
      &:before {
				width: 30%;
      }
    }
		&_4 {
      &:before {
				width: 40%;
      }
    }
		&_5 {
      &:before {
				width: 50%;
      }
    }
		&_6 {
      &:before {
				width: 60%;
      }
    }
		&_7 {
      &:before {
				width: 70%;
      }
    }
		&_8 {
      &:before {
				width: 80%;
      }
    }
		&_9 {
      &:before {
				width: 90%;
      }
    }
		&_10 {
      &:before {
				width: 100%;
      }
    }
  }
}
</style>
