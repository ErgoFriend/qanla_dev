// Firebase firestore & LocalStorage

import 'nativescript-localstorage';
import 'shortid';

export default {
    addSubjects(subject) {
        const uid = shortid.generate();
        let savedSubjects = localStorage.getItem('subjects');
        savedSubjects.uid = subject;
        localStorage.setItem('subjects', savedSubjects);
    },
    getSubjects() {
        const savedSubjects = localStorage.getItem('subjects')
        return savedSubjects;
    }
}