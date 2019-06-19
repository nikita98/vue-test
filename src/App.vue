<template>
  <div class="wrapper">
    <top-nav></top-nav>
    <div class="contaiber-fluid content">
      <div class="row">
        <div class="col-lg-3">
          <card
            avatar="./img/5.webp"
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
    <div class="footer">футер</div>
  </div>
</template>

<script>
import card from "./components/card.vue";
import panel from "./components/panel.vue";
import topNav from "./components/topNav.vue";

export default {
  name: "app",
  // data: {},
  data() {
    return {
      users: [
        { id: "0", name: "Terrance arnold", online: "", avatar: "img/5.webp" },
        { id: "1", name: "Owen Hunt", online: "", avatar: "img/4.webp" },
        { id: "2", name: "Ida Fleming", online: "", avatar: "img/2.jpg" },
        {
          id: "3",
          name: "Julius",
          online: "10 minutes ago",
          avatar: "img/3.jpg"
        }
      ]
    };
  },
  components: {
    card,
    panel,
    topNav
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
  background: #f1f4f5;
  padding: 30px;
}
.footer {
  flex: 0 0 auto;
}
.avatar {
  position: relative;
  display: block;
  border-radius: 70%;
  &__i {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 10px;
    height: 10px;
    background-color: #4caf50;
    border-radius: 100%;
    border: 2px solid #fff;
    &_gray {
      background-color: #616161;
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
.waves-effect {
  position: relative;
  z-index: 1;
  display: inline-block;
  overflow: hidden;
  cursor: pointer;
  user-select: none;
}
.material-design-icon {
  transform: translateY(-15%);
}
.icon {
  color: #b9b9b9;
}
.badge_up {
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(105%, -105%);
}
</style>
