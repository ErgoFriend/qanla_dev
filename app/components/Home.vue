<template>
	<Page actionBarHidden="false">
    <ActionBar title="時間割" flat="true">
			<GridLayout columns="30, auto, *">
				<Image row="0" col="0" src="~/assets/images/ic_menu.png" verticalAlignment="center" @tap="$refs.drawer.nativeView.showDrawer()" />
				<Label class="title" text="Timetable" fontSize="24" row="0" col="1" colSpan="2" />
			</GridLayout>
		</ActionBar>
		<GridLayout rows="*">
			<RadSideDrawer ref="drawer">
				<StackLayout ~drawerContent backgroundColor="white">
					<StackLayout>
						<Label text="統計" padding="30 10 10" />
						<Label text="時間割" padding="10" @tap="$refs.drawer.nativeView.closeDrawer()" />
						<Label text="科目一覧" padding="10" @tap="$navigateTo(Subjects)" />
						<Label text="時間割設定" padding="30 10 10" />
						<Label text="通知設定" padding="10" />
						<Label text="バックアップと復元" padding="10" @tap="$navigateTo(Backup)" />
					</StackLayout>
					<Label text="Close" color="gray" padding="10" style="horizontal-align: center" @tap="$refs.drawer.nativeView.closeDrawer()" />
				</StackLayout>
				<StackLayout ~mainContent>
					<Timetable />
				</StackLayout>
			</RadSideDrawer>
		</GridLayout>
	</Page>
</template>
<script>
import Timetable from './Timetable';
import Subjects from './Subjects';
import Backup from './Backup';

export default {
  name: 'Home',
  methods: {},

  data() {
    return {
      Subjects: Subjects,
      Backup: Backup
    };
  },

  components: {
    Timetable,
    Subjects,
    Backup
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
  padding-right: 30;
}
</style>