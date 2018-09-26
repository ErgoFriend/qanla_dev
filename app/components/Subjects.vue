<template>
	<Page actionBarHidden="false">
    <ActionBar title="時間割" flat="true">
			<GridLayout columns="30, *, 30 ,20">
				<Image row="0" col="0" src="~/assets/images/ic_menu.png"  verticalAlignment="center" @tap="$refs.drawer.nativeView.showDrawer()" />
				<Label class="title" text="Subjects" fontSize="24" row="0" col="1" />
				<Image row="0" col="2" src="~/assets/images/ic_plus.png" verticalAlignment="center" @tap="$navigateTo(Create)" />
			</GridLayout>
		</ActionBar>
		<GridLayout rows="*">
			<RadSideDrawer ref="drawer">
				<StackLayout ~drawerContent backgroundColor="white">
					<StackLayout>
						<Label text="統計" padding="30 10 10" />
						<Label text="時間割" padding="10" @tap="$navigateTo(Home)" />
						<Label text="科目一覧" padding="10" @tap="$navigateTo(Subjects)" />
						<Label text="TODO" padding="10" />
						<Label text="時間割設定" padding="30 10 10" />
						<Label text="通知設定" padding="10" />
						<Label text="バックアップと復元" padding="10" @tap="$navigateTo(Backup)" />
					</StackLayout>
					<Label text="Close" color="gray" padding="10" style="horizontal-align: center" @tap="this.$refs.drawer.nativeView.closeDrawer()" />
				</StackLayout>
				<StackLayout ~mainContent>

				</StackLayout>
			</RadSideDrawer>
		</GridLayout>
	</Page>
</template>
<script>
import Home from './Home';
import Backup from './Backup';
import Create from './Create';
export default {
  name: 'Subjects',
  methods: {},

  data() {
    return {
      Home: Home,
      Backup: Backup,
      Create: Create
    };
  },

  components: {
    Home,
    Backup,
    Create
  }
};
</script>
<style scoped>
ActionBar {
  background-color: white;
  color: #5c687c;
}
.title {
  text-align: center;
}
</style>