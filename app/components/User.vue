<template>
  <StackLayout>
    <StackLayout v-if="user">
        <Image :src="user.profileImageURL" style="width:50; height:50; border-radius:50%;" />
        <Label :text="user.name" style="text-align: center;" />
        <Button width="50%" text="ログアウト" @tap="logout" class="btn btn-rounded-lg" />
        <Button width="50%" text="バックアップ" @tap="logout" />
        <Button width="50%" text="バックアップから復元する" @tap="logout" />
    </StackLayout>
    <StackLayout v-else>
      <Label  text="no user" style="text-align: center;" />
      <Button class="btn  btn-rounded-lg" width="50%" text="ログイン" @tap="login" />
    </StackLayout>
  </StackLayout>
</template>
<script>
import store from '../store';
import Firebase from '../firebase';
export default {
  computed: {
    user() {
      return store.getters.user;
    }
  },
  methods: {
    login() {
      Firebase.login();
    },
    logout() {
      Firebase.logout();
    }
  }
};
</script>