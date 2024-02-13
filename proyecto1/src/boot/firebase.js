import { boot } from "quasar/wrappers";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { VueFire } from "vuefire";

const firebaseConfig = {
  apiKey: "AIzaSyBiumksqcKXLCIApF6PHBLe_-p_vexKk8A",
  authDomain: "cursoquasar.firebaseapp.com",
  projectId: "cursoquasar",
  storageBucket: "cursoquasar.appspot.com",
  messagingSenderId: "503397844174",
  appId: "1:503397844174:web:209a1dc9162016d1bebc9f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(({ app }) => {
  // something to do
  app.use(VueFire, {
    // imported above but could also just be created here
    app,
    modules: [
      // we will see other modules later on
    ],
  });
});
export { db };
