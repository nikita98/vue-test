<template>
  <a class="nav-notification__item" href="#">
    <div class="nav-notification__left nav-notification__left_avatar" v-if="avatar">
      <span class="avatar avatar__sm">
        <img class="avatar__img" :src="avatar" alt="avatar">
        <i class="avatar__i" v-if="online == 0"></i>
        <i class="avatar__i avatar__i_gray" v-if="online == 1"></i>
        <i class="avatar__i avatar__i_orange" v-if="online == 2"></i>
      </span>
    </div>

    <div class="nav-notification__left" v-if="!avatar">
      <settings-icon />
    </div>

    <div class="nav-notification__item-content">
      <div class="nav-notification__item-title">{{title}}</div>
      <div class="nav-notification__item-time">{{time}}</div>
      <div class="nav-notification__item-text">{{text}}</div>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    avatar: {
      type: String,
      default: ''
		},
		online: {
      type: Number,
      default: 0
		},
    title: String,
    time: String,
    text: String
  }
};
</script>

<style scoped lang="scss">
</style>
