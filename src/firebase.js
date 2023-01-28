import firebase from "firebase/app";
import "firebase/firestore";
import { ref } from "vue";

const firebaseConfig = {
    apiKey: "AIzaSyDFESQ1GXNgq8GkeAbGkZJgoU0qofxC9ms",
    authDomain: "forsake-8cd3f.firebaseapp.com",
    projectId: "forsake-8cd3f",
    storageBucket: "forsake-8cd3f.appspot.com",
    messagingSenderId: "843093314935",
    appId: "1:843093314935:web:be5b9ec90f921271ae6572",
    measurementId: "G-3XX9C692B5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();

export const getFeedbackListener = () => {
    // db.collection("Feedback").get().then((querySnapshot) => {
    //     querySnapshot.forEach((doc) => {
    //         console.log(`${doc.id} => ${doc.data()}`);
    //         console.log(doc.data())
    //     });
    // });
    const feedback = ref([]);
    db.collection("Feedback").orderBy("date", "desc")
    .onSnapshot((querySnapshot) => {
        var fb = [];

        querySnapshot.forEach((doc) => {
            fb.push({
                id: doc.id,
                 ...doc.data()
            });
        });
        feedback.value = fb;
        console.log('feedback: ', feedback.value);
    });
    return feedback;
}

export const deleteData = (id) => {
    db.collection("Feedback").doc(id).delete().then(() => {
        console.log("Document successfully deleted!");
    }).catch((error) => {
        console.error("Error removing document: ", error);
    });
}