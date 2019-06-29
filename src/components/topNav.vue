<template>
  <nav class="top-nav">
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
            <img class="avatar__img" src="./assets/Terrance arnold.webp" alt>
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
              <div class="nav-notification__left green-bg">
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
              <div class="nav-notification__left nav-notification__left blue-bg">
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
              avatar="./img/Mary Adams.jpg"
              title="Mary Adams"
              time="30 minutes ago"
              text="Anyways, i would like just do it"
            />
            <nav-message
              avatar="./img/Caleb Richards.jpg"
              online="1"
              title="Caleb Richards"
              time="12 hours ago"
              text="Anyways, i would like just do it"
            />
            <nav-message
              avatar="./img/June Lane.jpg"
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
      <li class="nav-item top-nav__item">
        <a class="top-nav__link" href="#" @click="setActive(5)" :class="{ active: active === 5}">
          <chat-icon/>
        </a>
        <div class="slide-panel top-nat__slide-panel" v-if="active === 5">
          <ul class="tabs__links">
            <li class="tabs__link-wrap tabs__link-wrap_big">
              <a
                class="tabs__link tabs__link_big"
                @click="setActive(0, true)"
                :class="{'active': activeTab === 0}"
              >
                <chat-icon/>
              </a>
              <a
                class="tabs__link tabs__link_big"
                @click="setActive(1, true)"
                :class="{'active': activeTab === 1}"
              >
                <account-icon/>
              </a>
              <a
                class="tabs__link tabs__link_big"
                @click="setActive(2, true)"
                :class="{'active': activeTab === 2}"
              >
                <settings-icon/>
              </a>
            </li>
          </ul>
          <div class="tabs__content">
            <div class="tabs__tab" v-if="activeTab === 0">
              <div class="slide-panel__inner">
                <div class="slide-panel__header">
                  <div class="slide-panel__title">
                    <div>FRIEND LIST</div>
                    <div class="slide-panel__title-right">
                      <a href="#" class="icon">
                        <plus-icon/>
                      </a>
                      <a href="#" class="icon">
                        <more-icon/>
                      </a>
                    </div>
                  </div>
                  <form class="slide-panel__search-wrap" role="search">
                    <div class="search">
                      <div class="icon search__icon">
                        <magnify-icon/>
                      </div>
                      <input
                        type="text"
                        class="search__input"
                        name="search"
                        placeholder="Search Pages"
                      >
                      <button type="button" class="search__input-close">
                        <close-icon/>
                      </button>
                    </div>
                  </form>
                </div>
                <div class="friends">
                  <div class="friends__friend">
                    <nav-message
                      avatar="./img/Mary Adams.jpg"
                      title="Mary Adams"
                      text="Anyways, i would like just do it"
                    />
                  </div>
                  <div class="friends__friend">
                    <nav-message
                      online="1"
                      avatar="./img/Caleb Richards.jpg"
                      title="Caleb Richards"
                      text="Anyways, i would like just do it"
                    />
                  </div>
                  <div class="friends__friend">
                    <nav-message
                      online="2"
                      avatar="./img/Crystal Bates.jpg"
                      title="Crystal Bates"
                      text="Anyways, i would like just do it"
                    />
                  </div>
                  <div class="friends__friend">
                    <nav-message
                      online="2"
                      avatar="./img/Heather Harper.jpg"
                      title="Heather Harper"
                      text="Anyways, i would like just do it"
                    />
                  </div>
                  <div class="friends__friend">
                    <nav-message
                      avatar="./img/Ida Fleming.jpg"
                      title="Ida Fleming"
                      text="Anyways, i would like just do it"
                    />
                  </div>
                  <div class="friends__friend">
                    <nav-message
                      online="2"
                      avatar="./img/June Lane.jpg"
                      title="June Lane"
                      text="Anyways, i would like just do it"
                    />
                  </div>
                  <div class="friends__friend">
                    <nav-message
                      avatar="./img/Mary Adams.jpg"
                      title="Mary Adams"
                      text="Anyways, i would like just do it"
                    />
                  </div>
                  <div class="friends__friend">
                    <nav-message
                      online="1"
                      avatar="./img/Nathan Watts.jpg"
                      title="Nathan Watts"
                      text="Anyways, i would like just do it"
                    />
                  </div>
                  <div class="friends__friend">
                    <nav-message
                      online="1"
                      avatar="./img/Willard Wood.jpg"
                      title="Willard Wood"
                      text="Anyways, i would like just do it"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="tabs__tab" v-if="activeTab === 1">
              <div class="slide-panel__inner">
                <div class="slide-panel__header">
                  <div class="slide-panel__title">
                    <div>RECENT ACTIVITY</div>
                  </div>
                </div>
                <div class="activities">
                  <div class="activities__item" href="#">
                    <div class="activities__left">
                      <a href="#" class="activities__icon-wrap">
                        <cards-heart-icon/>
                      </a>
                    </div>
                    <div class="activities__content">
                      <div class="activities__time">6 minutes ago</div>
                      <div class="activities__text">Melissa liked your activity Drinks At My Place.</div>
                    </div>
                  </div>
                  <div class="activities__item" href="#">
                    <div class="activities__left">
                      <a href="#" class="activities__icon-wrap green-bg">
                        <chat-icon/>
                      </a>
                    </div>
                    <div class="activities__content">
                      <div class="activities__time">10 minutes ago</div>
                      <div class="activities__text">
                        Tina is attending your activity Coffee
                        <br>@Starbucks
                      </div>
                    </div>
                  </div>
                  <div class="activities__item" href="#">
                    <div class="activities__left">
                      <a href="#" class="activities__icon-wrap green-bg">
                        <email-icon/>
                      </a>
                    </div>
                    <div class="activities__content">
                      <div class="activities__time">15 minutes ago</div>
                      <div class="activities__text">Melissa liked your activity Drinks At My Place</div>
                    </div>
                  </div>
                  <div class="activities__item" href="#">
                    <div class="activities__left">
                      <a href="#" class="activities__icon-wrap blue-bg">
                        <plus-icon/>
                      </a>
                    </div>
                    <div class="activities__content">
                      <div class="activities__time">20 minutes ago</div>
                      <div class="activities__text">Josh is now following you</div>
                    </div>
                  </div>
                </div>
                <div class="slide-panel__header">
                  <div class="slide-panel__title">
                    <div>RECENT ACTIVITY</div>
                  </div>
                </div>
                <my-progress percent="70" text="Features development"/>
                <my-progress percent="30" text="Uploading files" lineColor="green"/>
                <my-progress percent="90" text="Traffc Margins"/>
              </div>
            </div>
            <div class="tabs__tab" v-if="activeTab === 2">
              <div class="slide-panel__inner">
                <div class="slide-panel__header">
                  <div class="slide-panel__title">
                    <div>GENERAL SETTINGS</div>
                  </div>
                </div>
                <div class="switch">
                  <div class="switch__header">Notifications</div>
                  <div
                    class="switch__text"
                  >Our very own image-less pure CSS and retina compatible check box.</div>
                </div>
                <div class="switch">
                  <div class="switch__header">Show your emails</div>
                  <div
                    class="switch__text"
                  >Our very own image-less pure CSS and retina compatible check box.Our very own image-less pure CSS and retina .</div>
                </div>
                <div class="switch">
                  <div class="switch__header">Show recent activity</div>
                  <div class="switch__text">Our very own image-less pure CSS and retina .</div>
                </div>
                <div class="switch">
                  <div class="switch__header">Show recent activity</div>
                  <div
                    class="switch__text"
                  >Our very own image-less pure CSS and retina compatible check box.</div>
                </div>
                <div class="switch">
                  <div class="switch__header">Show Task statistics</div>
                  <div class="switch__text">Our very own image-less pure CSS and retina .</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </nav>
</template>

<script>
import navMessage from "./nav-message.vue";
import myProgress from "./my-progress.vue";

export default {
  data() {
    return {
      active: {
        type: Number,
        default: 0
      },
      activeTab: {
        type: Number,
        default: 0
      }
    };
  },
  methods: {
    setActive(index, tab) {
      if (tab) {
        if (this.activeTab === index) {
          this.activeTab = 0;
        } else {
          this.activeTab = index;
        }
      } else {
        if (this.active === index) {
          this.active = 0;
        } else {
          this.active = index;
        }
      }
    }
  },
  created: function() {
    this.activeTab = 0;
  },
  components: {
    navMessage,
    myProgress
  }
};
</script>

<style lang="scss">
.top-nav {
  position: fixed;
  width: 100%;
  z-index: 1;
  display: flex;
  justify-content: flex-end;
  font-size: 14px;
  background-color: #2196f3;
  border-color: rgba(0, 0, 0, 0.1);
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.1);
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
    font-size: 14px;
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
    //123321
    height: 24px;
    width: 24px;
    min-width: 24px;
    margin-right: 10px;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    text-align: center;
    padding-bottom: 4px;
    background-color: #e53935;
    color: #fff;

    &_avatar {
      background-color: inherit;
      width: 30px;
      min-width: 30px;
      height: 30px;
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
.activities {
  position: relative;
  padding: 10px 0;
  margin-bottom: 40px;
  &:before {
    content: "";
    position: absolute;
    height: 100%;
    width: 1.2px;
    background-color: #e0e0e0;
    top: 0;
    left: 20px;
    z-index: -1;
  }
  &__item {
    display: flex;
    z-index: 100;
    color: #757575;
    margin-bottom: 40px;
    &:last-child {
      margin-bottom: 5px;
    }
  }
  &__left {
    padding-left: 6px;
    padding-right: 15px;
  }
  &__icon-wrap {
    display: block;
    height: 30px;
    width: 30px;
    background-color: #fff;
    background-color: #d81b60;
    border-radius: 100%;
    color: #fff;
    text-align: center;
    line-height: 30px;
    &:hover {
      color: #fff;
    }
  }
  &__time {
    font-size: 12px;
  }
}
</style>
