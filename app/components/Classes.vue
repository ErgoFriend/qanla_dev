<template>            
        <DockLayout stretchLastChild="true" height="17%">
            <Label dock="left" width="5%" :backgroundColor="classes.color"/>
            <StackLayout class="classes">
                <Label textWrap="true" class="title" :text="classes.title" />
                <Label textWrap="true" class="room" :text="classes.room" />
            </StackLayout>
        </DockLayout>
</template>

<script>
export default {
  props: ["id"],
  methods: {
    classes() {
      const myclass = this.$store.getters.subjects;
      return myclass.id;
    }
  }
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

