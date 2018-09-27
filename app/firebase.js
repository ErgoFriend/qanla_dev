import firebase from "nativescript-plugin-firebase";

import store from "./store";

export default {
  init() {
    firebase.init({
      onAuthStateChanged: function (data) {
        store.commit("onAuthStateChanged", data.user);
        console.log(
          data.loggedIn ? "Logged in to firebase" : "Logged out from firebase"
        );

        // if (data.loggedIn) {
        //   // timetableDocument
        //   const timetableDocument = firebase.firestore
        //     .collection("userData")
        //     .doc(data.user.uid);
        //   timetableDocument.get().then(doc => {
        //     if (doc.exists) {
        //       const data = doc.data();
        //       store.commit("onTimetableStateChanged", data.timetable);
        //     } else {
        //       console.log("No such document!");
        //     }
        //   });

        //   // classData = {sdfafeas:{name:'ss', room:'3205'},lskslsks:{}}
        //   const classData = firebase.firestore
        //     .collection("userData")
        //     .doc(store.getters.user.uid)
        //     .collection("subjects");
        //   classData.get().then(querySnapshot => {
        //     querySnapshot.forEach(doc => {
        //       store.commit("addSubjectsState", {
        //         id: doc.id,
        //         subject: doc.data()
        //       });
        //     });
        //   });
        // }
      }
    });
  },
  login() {
    firebase
      .login({
        type: firebase.LoginType.GOOGLE,
        prompt: "select_account"
      })
      .then(
        function (result) {
          console.log(JSON.stringify(result));
        },
        function (errorMessage) {
          console.log(errorMessage);
        }
      );
  },
  logout() {
    firebase.logout();
  }
};