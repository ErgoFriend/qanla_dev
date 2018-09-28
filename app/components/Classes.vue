<template>            
        <DockLayout stretchLastChild="true" height="17%">
            <Label dock="left" width="5%" :backgroundColor="classes.color"/>
            <StackLayout class="classes">
                <Label textWrap="true" class="title" :text="classes.name" />
                <Label textWrap="true" class="room" :text="classes.room" />
                <!-- <Label textWrap="true" class="room" :text="classes.absent" /> -->
            </StackLayout>
        </DockLayout>
</template>
 <script>
export default {
  props: ["classes"]
};
</script>
<style scoped>
.classes {
  text-align: center;
  vertical-align: center;
}
.title {
  font-size: 13%;
}
.room {
  font-size: 11%;
}
</style>
