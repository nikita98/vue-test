<template>
  <div class="panel">
    <div class="tabs panel__inner">
      <ul class="tabs__links">
        <li class="tabs__link-wrap">
          <a class="tabs__link" @click="setActive(0)" :class="{'active': activeTab === 0}">
            Activities
            <span
              class="badge badge-pill badge-danger"
              v-if="newActivities"
            >{{newActivities}}</span>
          </a>
        </li>
        <li class="tabs__link-wrap">
          <a class="tabs__link" @click="setActive(1)" :class="{'active': activeTab === 1}">
            Profile
            <span class="badge badge-pill badge-danger" v-if="newProfile">{{newProfile}}</span>
          </a>
        </li>
        <li class="tabs__link-wrap">
          <a class="tabs__link" @click="setActive(2)" :class="{'active': activeTab === 2}">
            Messages
            <span class="badge badge-pill badge-danger" v-if="newMessages">{{newMessages}}</span>
          </a>
        </li>
      </ul>
      <div class="tabs__content">
        <div class="tabs__tab" v-if="activeTab === 0">
          <div class="post-list">
            <post
              avatar="./img/2.jpg"
              name="Terrance arnold"
              description="posted an updated"
              online="active 14 minutes ago"
              text="“Check if it can be corrected with overflow : hidden”"
            ></post>
            <post
              avatar="./img/3.jpg"
              name="Julius"
              :imgSrc="['./img/animal-2.jpg', './img/animal-3.jpg', './img/animal-4.jpg', './img/animal-5.jpg']"
              description="uploaded 4 photos"
              online="active 14 minutes ago"
            ></post>
            <post
              avatar="./img/3.jpg"
              name="Owen Hunt"
              description="posted a new note"
              online="active 14 minutes ago"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa"
            ></post>
            <post
              avatar="./img/5.webp"
              name="Terrance Arnold"
              description="uploaded 4 photos"
              :imgSrc="['./img/animal-1.webp']"
              online="active 14 minutes ago"
              title="Getting Started"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris."
            ></post>
          </div>
          <div class="panel__footer">
            <a href="#" class="btn btn-block btn_gray">Show more</a>
          </div>
        </div>
        <div class="tabs__tab" v-if="activeTab === 1">
          <div class="post-list">
            <post
              avatar="./img/5.webp"
              name="Terrance Arnold"
              description="uploaded 4 photos"
              :imgSrc="['./img/animal-1.webp']"
              online="active 14 minutes ago"
              title="Getting Started"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris."
            ></post>
            <post
              avatar="./img/3.jpg"
              name="Julius"
              :imgSrc="['./img/animal-2.jpg', './img/animal-3.jpg', './img/animal-4.jpg', './img/animal-5.jpg']"
              description="uploaded 4 photos"
              online="active 14 minutes ago"
            ></post>
            <post
              avatar="./img/2.jpg"
              name="Terrance arnold"
              description="posted an updated"
              online="active 14 minutes ago"
              text="“Check if it can be corrected with overflow : hidden”"
            ></post>
            <post
              avatar="./img/3.jpg"
              name="Owen Hunt"
              description="posted a new note"
              online="active 14 minutes ago"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa"
            ></post>
          </div>
          <div class="panel__footer">
            <a href="#" class="btn btn-block btn_gray">Show more</a>
          </div>
        </div>
        <div class="tabs__tab" v-if="activeTab === 2">
          <div class="post-list">
            <post
              avatar="./img/5.webp"
              name="Terrance Arnold"
              description="uploaded 4 photos"
              :imgSrc="['./img/animal-1.webp']"
              online="active 14 minutes ago"
              title="Getting Started"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris."
            ></post>
            <post
              avatar="./img/2.jpg"
              name="Terrance arnold"
              description="posted an updated"
              online="active 14 minutes ago"
              text="“Check if it can be corrected with overflow : hidden”"
            ></post>
            <post
              avatar="./img/3.jpg"
              name="Owen Hunt"
              description="posted a new note"
              online="active 14 minutes ago"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa"
            ></post>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
 
<script>
import post from "./post.vue";

export default {
  name: "panel",
  data() {
    return {
      activeTab: 0
    };
  },
  props: {
    newActivities: {
      default: 5,
      type: Number
    },
    newProfile: Number,
    newMessages: Number
  },
  methods: {
    setActive(num) {
      this.activeTab = num;
    }
  },
  components: {
    post
  }
};
</script>

<style scoped lang="scss">
.panel {
  margin-bottom: 30px;
  background-color: #fff;
  border: 0 solid transparent;
  border-radius: 0.286rem;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
  &__inner {
    padding: 30px;
  }
}

.tabs {
  &__links {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    border-bottom: 1px solid #e0e0e0;
  }
  &__link-wrap {
    margin-bottom: -1px;
    display: flex;
  }
  &__link {
    cursor: pointer;
    color: #757575;
    transition: 0.25s;
    padding: 0.715rem 1.429rem;
    border-bottom: 2px solid transparent;
    &:hover {
      border-bottom-color: #bdbdbd;
    }
    &.active {
      color: #2196f3;
      border-bottom: 2px solid #2196f3;
      &:hover {
        color: #2196f3;
        border-bottom: 2px solid #2196f3;
      }
    }
  }
}
</style>
