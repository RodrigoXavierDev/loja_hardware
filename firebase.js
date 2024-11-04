import firebase from "firebase/compat/app"
import "firebase/compat/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyA76F_ti2sbBnDEgYX8aeIiQ1z-r3TkVpA",
  authDomain: "lojahardware-9246d.firebaseapp.com",
  projectId: "lojahardware-9246d",
  storageBucket: "lojahardware-9246d.firebasestorage.app",
  messagingSenderId: "751433842525",
  appId: "1:751433842525:web:e47ba1daf755fee93872b4",
  measurementId: "G-5C1NLN37H2"
};

if(!firebase.apps.length) {
    console.log(`Conectando... ${firebase.apps.length}`)
    firebase.initializeApp(firebaseConfig)
    console.log(`Conectado: ${firebase.apps.length}`)
}

export default firebase;