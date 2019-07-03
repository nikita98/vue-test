<template>
  <div class="login-page">
    <div class="wrapper wrapper_center">
      <div class="login-page__content">
        <div class="form form_login">
          <div class="brand form__brand">
            <div class="brand__logo">
              <img src="./components/assets/logo.webp" alt>
            </div>
            <div class="brand__title">Remark</div>
          </div>
          <div class="form__content">
            <!--  -->
            <div class="form__field">
              <input type="email" class="form__control" name="email">
              <label class="form__float-label">Email</label>
            </div>
            <!--  -->
            <div class="form__field">
              <input type="password" class="form__control" name="password">
              <label class="form__float-label">Password</label>
            </div>
            <!--  -->
            <div class="form__field">
              <div class="form__checkbox-wrap">
                <input class="form__checkbox" type="checkbox" id="inputCheckbox" name="remember">
                <div class="form__checkbox-label-before">
                  <check-icon/>
                </div>
                <div class="form__checkbox-label-after"></div>
                <label class="form__checkbox-label" for="inputCheckbox">Remember me</label>
              </div>
              <a class="form__link" href="forgot-password.html">Forgot password?</a>
            </div>
            <!--  -->
            <button type="submit" class="btn btn-primary btn-lg btn-block form__btn">Sign in</button>
          </div>
          <div class="form__footer">
            Still no account? Please go to
            <a href="#" class="form__link">Sign up</a>
          </div>
        </div>
      </div>
      <footer class="login-page__footer">
        <p>WEBSITE BY Creation Studio</p>
        <p>© 2018. All RIGHT RESERVED.</p>
        <div class="login-page__footer-social">
          <a href="#" class="icon">
            <twitter-icon/>
          </a>
          <a href="#" class="icon">
            <facebook-icon/>
          </a>
          <a href="#" class="icon">
            <google-plus-icon/>
          </a>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        users: [],
        userName: '',
        userPass: ''
      }
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
}
body {
  font-size: 14px;
  font-family: "Roboto", sans-serif !important;
}
.wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
  &_center {
    justify-content: center;
    align-items: center;
  }
}

.form {
  color: #757575;
  font-size: 14px;
  width: 100%;
  padding: 50px 40px 40px;
  background: #fff;
  border-radius: 0.286rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  &__link {
    color: #1e88e5;
    &:hover {
      color: #1e88e5;
    }
  }

  &__content {
    margin: 45px 0 30px;
    width: 100%;
  }
  &__field {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 30px;
    margin-bottom: 20px;
    &:first-child {
      margin-top: 0px;
    }
  }

  &__control {
    background-size: 100% 1px;
    background-position: bottom;
    background-repeat: no-repeat;
    padding: 0.429rem 0;
    margin: 0;
    border: 0;
    outline: 0;
    display: block;
    width: 100%;
    color: #757575;
    transition: 0.3s;
    background-image: linear-gradient(#e0e0e0, #e0e0e0);
    &:focus {
      background-size: 100% 2px;
      background-image: linear-gradient(#2196f3, #2196f3);
    }
  }
  &__float-label {
    position: absolute;
    top: 0.571429rem;
    font-size: 14px;
    color: #a3afb7;
    transition: 0.3s;
  }
  &__control:focus + &__float-label {
    color: #2196f3;
    font-weight: 500;
    top: -0.8rem;
    font-size: 12px;
  }

  &__checkbox-wrap {
    display: flex;
    align-items: center;
    min-height: 24px;
    cursor: pointer;
  }
  &__checkbox-label {
  }

  &__checkbox-label-before {
    color: #fff;
    position: absolute;
    left: 0;
    top: 0;
    width: 24px;
    height: 24px;
    background-color: #2196f3;
    border: 1px solid #e0e0e0;
    border-radius: 0.215rem;
    transition: all 0.3s ease-in-out 0s;
    text-align: center;
  }
  &__checkbox-label-after {
    position: absolute;
    top: 0;
    left: 0;
    color: #fff;
    background-color: #fff;
    width: 24px;
    height: 24px;
    border-radius: 0.215rem;
    transition: all 0.3s ease-in 0s;
    border: 1px solid #e0e0e0;
  }
  &__checkbox:checked ~ &__checkbox-label-after {
    opacity: 0.2;
    transform: scale(0, 0);
  }

  &__checkbox {
    width: 24px;
    min-width: 24px;
    height: 24px;
    z-index: 1;
    cursor: pointer;
    opacity: 0;
    padding: 0;
    margin-right: 12px;
  }
  &__btn {
    margin-top: 50px;
		font-size: 18px !important;
    background-color: #2196f3 !important;
    border-color: #2196f3 !important;
  }
  &__footer {
    text-align: center;
  }
  // .checkbox-primary input[type=checkbox]:checked+label::before
}
.brand {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 18px;
  text-shadow: rgba(0, 0, 0, 0.15) 0 0;
  color: #424242;
  &__title {
    margin: 8px 0 0;
  }
}
.login-page {
  height: 100%;
  background-image: -webkit-linear-gradient(top, #3949ab 0, #283593 100%);
  &__content {
    width: 400px;
    max-width: 85%;
  }
  &__footer {
    color: #fff;
    margin-top: 60px;
    font-size: 12px;
    letter-spacing: 1px;
  }
  &__footer-social {
    color: fff;
    margin: 14px;
    display: flex;
    justify-content: center;
  }
}
.icon {
  width: 36px;
  min-width: 36px;
  height: 36px;
  min-height: 36px;
  padding: 10px;
  color: #fff;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    color: rgba(255, 255, 255, 0.8);
  }
}
</style>
