<template>
	<Page actionBarHidden="false">
    <ActionBar title="時間割" flat="true">
<android>
	<NavigationButton icon="res://ic_menu" tap="onOpenDrawerTap" />
</android>
<ios>
	<ActionItem icon="res://ic_menu" ios.position="left" tap="onOpenDrawerTap" />
</ios>
<!-- <DockLayout stretchLastChild="true">
			<Image src="res://ic_menu" dock="left" width="30" verticalAlignment="center" @tap="onOpenDrawerTap" />
			<Label  text="時間割" dock="top" fontSize="20" horizontalAlignment="stretch" verticalAlignment="center" />
</DockLayout> -->
		</ActionBar>
		<GridLayout rows="*">
			<RadSideDrawer ref="drawer">
				<StackLayout ~drawerContent backgroundColor="white">
					<StackLayout height="56" style="text-align: center; vertical-align: center;">
						<Label text="Navigation Menu" />
					</StackLayout>
					<User />
					<StackLayout>
						<Label text="統計" padding="10" @tap="onButtonTap(0)" />
						<Label text="時間割" padding="10" @tap="onButtonTap(0)" />
						<Label text="科目一覧" padding="10" @tap="onButtonTap(1)" />
						<Label text="TODO" padding="10" @tap="onButtonTap(2)" />
						<Label text="アプリ設定" padding="20 10 10" @tap="$navigateTo(SettingApp)" />
						<Label text="時間割設定" padding="10" @tap="$navigateTo(SettingTimetable)"/>
						<Label text="通知設定" padding="10" />
					</StackLayout>
					<Label text="Close" color="gray" padding="10" style="horizontal-align: center" @tap="onCloseDrawerTap" />
				</StackLayout>
				<StackLayout ~mainContent>
					<!-- <TabView :selectedIndex="tab_page">
						<TabViewItem title="時間割">
							<Timetable />
						</TabViewItem>
						<TabViewItem title="科目一覧">
              <SubjectsAll />
							<Label text="ssssssss" />
						</TabViewItem>
					</TabView> -->
				<DockLayout stretchLastChild="true">
							<SegmentedBar dock="bottom" width="100%" selectedIndex="selected_page" @selectedIndexChange="onSelectedIndexChange">
									<SegmentedBarItem title="一覧" />
									<SegmentedBarItem title="追加" />
							</SegmentedBar>
							<!-- <Timetable v-if="selected_page" />
							<SubjectsAll v-else /> -->
					</DockLayout>
				</StackLayout>
			</RadSideDrawer>
		</GridLayout>
	</Page>
</template>
<script>
require("nativescript-vue").registerElement(
  "RadSideDrawer",
  () => require("nativescript-ui-sidedrawer").RadSideDrawer
);

import Notification from "./Notification";
import Timetable from "./Timetable";
import SubjectsAll from "./SubjectsAll";
import SettingTimetable from "./SettingTimetable";
import SettingApp from "./SettingApp";
import User from "./User";

export default {
  methods: {
    onButtonTap(n) {
      this.tab_page = n;
      this.$refs.drawer.nativeView.closeDrawer();
    },

    onOpenDrawerTap() {
      this.$refs.drawer.nativeView.showDrawer();
    },
    onCloseDrawerTap() {
      this.$refs.drawer.nativeView.closeDrawer();
    },
    onSelectedIndexChange() {
      this.selected_page = !this.selected_page;
    }
  },

  data() {
    return {
      selected_page: 0
    };
  },

  components: {
    // Notification,
    Timetable,
    SubjectsAll,
    // Subjects,
    SettingTimetable,
    User
  }
};
</script>
<style scoped>
ActionBar {
  background-color: #3c5afd;
  color: white;
}
</style>