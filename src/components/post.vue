<template>
  <div class="post">
    <div class="post__inner">
      <div class="avatar post__avatar">
        <img class="avatar__img" :src="avatar" alt="avatar">
      </div>
      <div class="post__content">
        <div class="post__header">
          <div class="post__top">
            <span class="post__name">{{name}}</span>
            <span class="post__description">{{description}}</span>
          </div>
          <div class="post__active">{{online}}</div>
        </div>
        <div class="post__body" :class="{post__body_gallery: imgLength > 1}">
          <div class="post__solo-img" v-if="imgLength == 1">
            <img class="post__img" :src="imgSrc[0]" alt="image">
          </div>
          <div class="post__img-galerry" v-if="imgLength > 1">
            <img
              class="post__img"
              v-for="(item, index) in imgSrc"
              v-bind:key="index"
              :src="imgSrc[index]"
              alt="image"
            >
          </div>
          <div class="post__text">
            <div class="post__title">{{title}}</div>
            {{text}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
 
 
<script>
export default {
  name: "post",
  props: {
    avatar: String,
    name: String,
    description: String,
    online: {
      default: "Online",
      type: String
    },
    imgSrc: {
      type: Array,
      default: () => {}
    },
    title: String,
    text: String
  },
  computed: {
    imgLength: function() {
      return this.imgSrc ? this.imgSrc.length : 0;
    }
  }
};
</script>

<style scoped lang="scss">
.post {
  &__inner {
    margin: 25px 15px;
    display: flex;
    flex-wrap: nowrap;
    padding-bottom: 25px;
    border-bottom: 1px solid #e0e0e0;
  }
  &__avatar {
    padding-right: 20px;
    width: 70px;
    min-width: 70px;
    height: 50px;
  }
  &__top {
    margin-bottom: 5px;
  }
  &__name {
    color: #424242;
    margin-right: 0.25em;
  }
  &__description {
    color: #9e9e9e;
    font-size: 11px;
  }
  &__active {
    color: #9e9e9e;
    font-size: 11px;
    margin-bottom: 20px;
  }
  &__title {
    color: #424242;
    font-size: 18px;
  }
  &__body {
    display: flex;
		&_gallery{
			flex-wrap: wrap;
		}
  }
  &__img-galerry {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
  }
  &__img {
    width: 100%;
    max-width: 220px;
    min-width: 200px;
    max-height: 150px;
    padding: 0 20px 20px 0;
  }
  &__text {
    font-size: 14px;
    color: #757575;
  }
}
</style>
