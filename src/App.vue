<template>
  <div class="wrapper">
    <top-nav/>
    <div class="content">
      <div class="contaiber-fluid main">
        <div class="row">
          <div class="col-lg-3">
            <card
              avatar="./img/Terrance arnold.webp"
              name="Terrance arnold"
              job="Art director"
              text="Hi! I'm Adrian the Senior UI Designer at AmazingSurge. We hope you enjoy the design and quality of Social."
              follower="260"
              following="180"
              tweets="2000"
            ></card>
          </div>
          <div class="col-lg-9">
            <panel/>
          </div>
        </div>
      </div>
    </div>
    <site-footer/>
  </div>
</template>

<script>
import card from "./components/card.vue";
import panel from "./components/panel.vue";
import topNav from "./components/topNav.vue";
import siteFooter from "./components/site-footer.vue";

export default {
  name: "app",
  components: {
    card,
    panel,
    topNav,
    siteFooter
  }
};
</script>


<style lang="scss">
* {
  box-sizing: border-box;
}
html,
body {
  height: 100%;
  font-size: 14px;
}
body {
  color: #757575;
  font-family: "Roboto", sans-serif !important;
}
.wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.content {
  flex: 1 0 auto;
  min-height: 100%;
  margin-top: 65px;
  background: #f1f4f5;
}
.main {
  padding: 30px;
}
.site-footer {
  flex: 0 0 auto;
}
.green-bg {
  background-color: #43a047;
}
.blue-bg {
  background-color: #1e88e5;
}
.avatar {
  position: relative;
  display: block;
  border-radius: 70%;
  &__i {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 8px;
    height: 8px;
    background-color: #4caf50;
    border-radius: 100%;
    border: 2px solid #fff;
    &_gray {
      background-color: #616161;
      color: #1e88e5;
    }
    &_orange {
      background-color: #ff9800;
    }
  }
  &__sm {
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__img {
    width: 100%;
    border-radius: 100%;
  }
}
.flag-icon {
  height: 14px;
  width: 18px;
  background-position: center;
  background-size: cover;
}

.icon {
  font-size: 18px;
  transform: translateY(-15%);
  color: #b9b9b9;
}
.badge_up {
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(105%, -105%);
}
.btn {
  &.btn_primary {
    color: #fff;
    padding: 6px 15px;
    background-color: #2196f3;
    border-color: #2196f3;
    &:hover {
      background-color: #42a5f5;
      border-color: #42a5f5;
    }
  }
  &_gray {
    color: #1e88e5 !important;
    background-color: #eee !important;
    &:hover {
      color: #757575 !important;
      background-color: #f5f5f5 !important;
    }
  }
}
.switch {
  margin: 30px 0 40px;
  &__header {
    color: #424242;
    text-shadow: rgba(0, 0, 0, 0.15) 0 0 1px;
    margin: 11px 0;
  }
  &__text {
    color: #757575 !important;
  }
}
.slide-panel {
  @media (max-width: 767.98px) {
		width: 100vw;
	}
  height: calc(100vh - 65px);
  overflow-y: auto;
  position: absolute;
  z-index: 1;
  right: 0;
  top: 100%;
  background-color: #fff;
  width: 300px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.2);
  &__inner {
    padding: 20px 30px;
    width: 100%;
  }
  &__title {
    text-shadow: rgba(0, 0, 0, 0.15) 0 0 1px;
    color: #424242;
    margin: 11px 0;
    font-size: 14px;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  &__title-right {
    display: flex;
    justify-content: space-between;
    width: 40px;
    font-size: 14px;
  }
  &__search-wrap {
    margin: 20px 0;
  }
}
.search {
  width: 100%;
  position: relative;
  &__icon {
    position: absolute;
    top: 50%;
    left: 15px;
    transform: translateY(-45%);
    font-size: 16px;
    color: #757575;
  }
  &__input {
    width: 100%;
    padding: 0.429rem 1.072rem;
    padding-left: 3.109rem;
    line-height: 1.571429;
    margin: 0;
    border-radius: 200px;
    color: #757575;
    background: #f5f5f5;
    outline: none;
    border: 1px solid #e0e0e0;
    transition: box-shadow 0.25s linear, border 0.25s;
    &:focus {
      border-color: #2196f3;
      background-color: #fff;
    }
  }
  &__input-close {
    position: absolute;
    position: absolute;
    color: #b9b9b9;
    top: 50%;
    right: 15px;
    transform: translateY(-40%);
    font-size: 14px;
    border: 0;
    outline: none;
    background-color: inherit;
  }
}
.tabs {
  &__links {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: flex-start;
    border-bottom: 1px solid #e0e0e0;
  }
  &__link-wrap {
    margin-bottom: -1px;
    display: flex;
    &_big {
      width: 100%;
    }
  }
  &__link {
    cursor: pointer;
    color: #757575;
    transition: 0.25s;
    padding: 0.715rem 1.429rem;
    border-bottom: 2px solid transparent;
    &_big {
      width: 50%;
      height: 93px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #757575 !important;
    }
    &:hover {
      border-bottom-color: #bdbdbd;
    }
    &.active {
      color: #2196f3 !important;
      border-bottom: 2px solid #2196f3;
      &:hover {
        color: #2196f3;
        border-bottom: 2px solid #2196f3;
      }
    }
  }
}
</style>
