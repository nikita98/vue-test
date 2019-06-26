<template>
  <nav class="top-nav container-fluid">
    <ul class="top-nav__inner">
      <li class="top-nav__item">
        <a class="top-nav__link" href="#" @click="setActive(1)" :class="{ active: active === 1}">
          <span class="flag-icon" style="background-image: url(./img/flags/us.svg);"></span>
        </a>
        <div class="nav-dropdown top-nav__dropdown" v-if="active === 1">
          <a class="nav-dropdown__item" href="#">
            <span
              class="flag-icon nav-dropdown__flag-icon"
              style="background-image: url(./img/flags/us.svg);"
            ></span> English
          </a>
          <a class="nav-dropdown__item" href="#">
            <span
              class="flag-icon nav-dropdown__flag-icon"
              style="background-image: url(./img/flags/fr.svg);"
            ></span> French
          </a>
          <a class="nav-dropdown__item" href="#">
            <span
              class="flag-icon nav-dropdown__flag-icon"
              style="background-image: url(./img/flags/cn.svg);"
            ></span> Chinese
          </a>
          <a class="nav-dropdown__item" href="#">
            <span
              class="flag-icon nav-dropdown__flag-icon"
              style="background-image: url(./img/flags/de.svg);"
            ></span> German
          </a>
          <a class="nav-dropdown__item" href="#">
            <span
              class="flag-icon nav-dropdown__flag-icon"
              style="background-image: url(./img/flags/nl.svg);"
            ></span> Dutch
          </a>
        </div>
      </li>

      <li class="top-nav__item">
        <a class="top-nav__link" href="#" @click="setActive(2)" :class="{ active: active === 2}">
          <span class="avatar avatar__sm">
            <img class="avatar__img" src="./assets/5.webp" alt>
            <i class="avatar__i"></i>
          </span>
        </a>
        <div class="nav-dropdown top-nav__dropdown" v-if="active === 2">
          <a class="nav-dropdown__item" href="#">
            <div class="nav-dropdown__icon">
              <account-icon/>
            </div>Profile
          </a>
          <a class="nav-dropdown__item" href="#">
            <div class="nav-dropdown__icon">
              <account-icon/>
            </div>Billing
          </a>
          <a class="nav-dropdown__item" href="#">
            <div class="nav-dropdown__icon">
              <settings-icon/>
            </div>Setting
          </a>
          <a class="nav-dropdown__item nav-dropdown__item_border-top" href="#">
            <div class="nav-dropdown__icon">
              <account-icon/>
            </div>Logout
          </a>
        </div>
      </li>

      <li class="top-nav__item">
        <a class="top-nav__link" href="#" @click="setActive(3)" :class="{ active: active === 3}">
          <bell-icon/>
          <span class="badge badge-pill badge-danger badge_up">5</span>
        </a>
        <div class="nav-notification top-nav__notification" v-if="active === 3">
          <div class="nav-notification__header" href="#">
            NOTIFICATIONS
            <span class="badge badge-round badge-danger">New 5</span>
          </div>
          <div class="nav-notification__items">
            <a class="nav-notification__item" href="#">
              <div class="nav-notification__left">
                <account-icon/>
              </div>
              <div class="nav-notification__item-content">
                <div class="nav-notification__item-title">A new order has been placed</div>
                <div class="nav-notification__item-time">5 hours ago</div>
              </div>
            </a>
            <a class="nav-notification__item" href="#">
              <div class="nav-notification__left nav-notification__left_green">
                <account-icon/>
              </div>
              <div class="nav-notification__item-content">
                <div class="nav-notification__item-title">Completed the task</div>
                <div class="nav-notification__item-time">2 days ago</div>
              </div>
            </a>
            <a class="nav-notification__item" href="#">
              <div class="nav-notification__left">
                <settings-icon/>
              </div>
              <div class="nav-notification__item-content">
                <div class="nav-notification__item-title">Settings updated</div>
                <div class="nav-notification__item-time">2 days ago</div>
              </div>
            </a>
            <a class="nav-notification__item" href="#">
              <div class="nav-notification__left nav-notification__left_blue">
                <account-icon/>
              </div>
              <div class="nav-notification__item-content">
                <div class="nav-notification__item-title">Event started</div>
                <div class="nav-notification__item-time">3 days ago</div>
              </div>
            </a>
          </div>
          <div class="nav-notification__footer">
            <a class="nav-notification__footer-link" href="#">All notifications</a>
            <settings-icon/>
          </div>
        </div>
      </li>

      <li class="top-nav__item">
        <a class="top-nav__link" href="#" @click="setActive(4)" :class="{ active: active === 4}">
          <email-icon/>
          <span class="badge badge-pill badge-info badge_up">3</span>
        </a>
        <div class="nav-notification top-nav__notification" v-if="active === 4">
          <div class="nav-notification__header" href="#">
            MESSAGES
            <span class="badge badge-round badge-info">New 3</span>
          </div>
          <div class="nav-notification__items">
            <nav-message
              avatar="./img/2.jpg"
              title="Mary Adams"
              time="30 minutes ago"
              text="Anyways, i would like just do it"
            />
            <nav-message
              avatar="./img/3.jpg"
              online="1"
              title="Caleb Richards"
              time="12 hours ago"
              text="Anyways, i would like just do it"
            />
            <nav-message
              avatar="./img/4.jpg"
              online="2"
              title="June Lane"
              time="2 days ago"
              text="Anyways, i would like just do it"
            />
          </div>
          <div class="nav-notification__footer">
            <a class="nav-notification__footer-link" href="#">All notifications</a>
            <settings-icon/>
          </div>
        </div>
      </li>

      <li class="nav-item dropdown">
        <a
          class="nav-link"
          data-toggle="dropdown"
          href="javascript:void(0)"
          title="Messages"
          aria-expanded="false"
          data-animation="scale-up"
          role="button"
        >
          <i class="icon md-email" aria-hidden="true"></i>
        </a>
        <div class="dropdown-menu dropdown-menu-right dropdown-menu-media" role="menu">
          <div class="dropdown-menu-header" role="presentation">
            <h5>MESSAGES</h5>
            <span class="badge badge-round badge-info">New 3</span>
          </div>
        </div>
      </li>
			
      <li class="nav-item" id="toggleChat">
        <a
          class="nav-link"
          data-toggle="site-sidebar"
          href="javascript:void(0)"
          title="Chat"
          data-url="../site-sidebar.tpl"
        >
          <i class="icon md-comment" aria-hidden="true"></i>
        </a>
      </li>
    </ul>
  </nav>
</template>
 
<script>
import navMessage from "./nav-message.vue";

export default {
  data() {
    return {
      active: {
        type: Number,
        default: 0
      }
    };
  },
  methods: {
    setActive(number) {
      if (this.active === number) {
        this.active = 0;
      } else {
        this.active = number;
      }
    }
  },
  components: {
    navMessage
  }
};
</script>

<style lang="scss">
.top-nav {
  display: flex;
  justify-content: flex-end;
  font-size: 14px;
  background-color: #2196f3;
  &__inner {
    display: flex;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
  }
  &__item {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__link {
    color: #fff;
    height: 66px;
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 22px;
    padding: 10px 15px;
    &.active {
      color: #fff;
      background-color: rgba(0, 0, 0, 0.1);
    }
    &:hover {
      color: #fff;
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
}
.nav-dropdown {
  background-color: #fff;
  transition: 0.25s;
  position: absolute;
  top: 100%;
  right: 0;
  z-index: 1200;
  min-width: 160px;
  padding: 5px 0;
  margin: 5px 0 0;
  font-size: 1rem;
  color: #757575;
  list-style: none;
  border: 1px solid #e0e0e0;
  border-radius: 0.215rem;
  display: flex;
  flex-direction: column;
  &__item {
    text-decoration: none;
    display: flex;
    align-items: center;
    overflow: hidden;
    cursor: pointer;
    color: #757575;
    background: 0 0;
    border: 0;
    width: 100%;
    padding: 8px 18px;
    border-radius: 0.215rem;
    transition: background-color 0.25s;
    &_border-top {
      margin-top: 0.5715rem 0;
      border-top: 1px solid #e0e0e0;
    }
  }
  &__icon {
    display: flex;
    align-items: flex-start;
    height: 1.2em;
    padding: 0 10px 4px 0;
    width: 25px;
  }
  &__flag-icon {
    margin-right: 8px;
  }
}
.nav-notification {
  position: absolute;
  top: 100%;
  right: 0;
  z-index: 1200;
  width: 360px;
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  color: #666;
  font-size: 1rem;
  list-style: none;
  border: 1px solid #e0e0e0;
  transition: 0.25s;
  &__items {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 20px;
  }
  &__item {
    color: #424242;
    padding: 15px 0;
    text-decoration: none;
    display: flex;
    border: 0;
    border-bottom: 1px solid #e0e0e0;
    text-decoration: none;
    &:last-child {
      border-bottom: 0;
    }
    &:hover {
      text-decoration: none;
    }
  }
  &__item-title {
    font-weight: 500;
    color: #424242;
    margin-bottom: 5px;
  }
  &__item-time {
    font-size: 12px;
    color: #424242;
    margin-bottom: 5px;
  }
  &__item-text {
    color: #757575;
    font-weight: 300;
    font-size: 12px;
  }
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    margin: 0;
    width: 100%;
    font-weight: 500;
    border-bottom: 1px solid #e0e0e0;
  }
  &__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 20px;
    margin: 0;
    width: 100%;
    font-weight: 500;
    border-top: 1px solid #e0e0e0;
    background-color: #eee;
    color: #9e9e9e;
  }
  &__footer-link {
    color: #9e9e9e;
    font-weight: 400;
    &:hover {
      text-decoration: none;
    }
  }
  &__left {
    height: 24px;
    width: 24px;
    min-width: 24px;
    margin-right: 10px;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #e53935;
    color: #fff;
    &_avatar {
      background-color: inherit;
      width: 30px;
      min-width: 30px;
      height: 30px;
    }
    &_green {
      background-color: #43a047;
    }
    &_blue {
      background-color: #1e88e5;
    }
  }
  .badge {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2.5px 5px;
    border-radius: 100px;
    font-weight: 500;
  }
}
</style>
