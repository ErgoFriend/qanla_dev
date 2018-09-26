<template>
	<Page class="Application Settings">
        <ActionBar title="Application Settings" flat="true">
            <NavigationButton text="Go Back" android.systemIcon="ic_menu_back" tap="$navigateTo(Home)"/>
        </ActionBar>
        <User/>
	</Page>
</template>
<script>
import Home from "./Home";
import User from "./User";

export default {
  methods: {},

  data() {
    return {};
  },

  components: {
    Home,
    User
  }
};
</script>
<style scoped>
</style>