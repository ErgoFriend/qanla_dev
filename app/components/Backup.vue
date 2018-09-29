<template>
	<Page actionBarHidden="false">
    <ActionBar title="Application Settings" flat="true">
      <GridLayout columns="auto, *">
        <android>
        <Image row="0" col="0" src="~/assets/images/ic_back.png" width="24" verticalAlignment="center" @tap="$navigateTo(Home)" />
        </android>
        <Label class="title" text="バックアップと復元" row="0" col="1" colSpan="2" />
      </GridLayout>
		</ActionBar>
    <User/>
	</Page>
</template>
<script>
import Home from './Home';
import User from './User';

export default {
  name: 'SettingApp',
  methods: {},
  data() {
    return {
      Home: Home
    };
  },
  components: {
    Home,
    User
  }
};
</script>
<style scoped>
ActionBar {
  background-color: white;
}
.title {
  text-align: center;
  padding-right: 30;
  color: black;
}
</style>