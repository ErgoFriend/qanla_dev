import 'nativescript-localstorage';

import store from "./store";
import {
    labelImageCloud
} from 'nativescript-plugin-firebase/mlkit/imagelabeling';

export default {
    initialized() {
        const bool = localStorage.getItem('initialized');
        if (bool) {
            return true;
        } else {
            return false;
        }
    },
    saveStorage() {
        const savingSubjects = store.getters.subjects;
        const savingTimetable = store.getters.timetable;
        localStorage.setItem('subjects', savingSubjects);
        localStorage.setItem('timetable', savingTimetable);
    },
    loadStorage() {
        const savedSubjects = localStorage.getItem('subjects')
        const savedTimetable = localStorage.getItem('timetable')
        store.commit('saveSubjects', savedSubjects);
        store.commit('saveTimetable', savedTimetable);
    },
    backupFromFirebase() {
        const savedSubjects = localStorage.getItem('subjects')
        const savedTimetable = localStorage.getItem('timetable')
        const savingData = {
            subjects: savedSubjects,
            timetable: savedTimetable
        };
    },
    backupFromfirebase() {

    }
}