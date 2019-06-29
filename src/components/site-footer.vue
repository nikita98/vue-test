<template>
  <footer class="site-footer">
    <div class="site-footer__legal">
      © 2018
      <a
        href="https://themeforest.net/item/remark-responsive-bootstrap-admin-template/11989202"
      >Remark</a>
    </div>
    <div class="site-footer__right">
      Crafted with
      <i class="icon site-footer__icon">
        <cards-heart-icon/>
      </i> by
      <a href="https://themeforest.net/user/creation-studio">Creation Studio</a>
    </div>
  </footer>
</template>

<script>
</script>

<style scoped lang="scss">
.site-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 44px;
  padding: 10px 30px;
  background-color: rgba(0, 0, 0, 0.02);
  border-top: 1px solid #e0e0e0;
  font-size: 14px;
  font-weight: 300;
  color: #757575;
  &__icon {
    transform: translateY(0%);
    color: red;
  }
}
</style>
